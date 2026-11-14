// Genera el CV en PDF (uno por idioma) a partir del sitio compilado.
//
// 1. Sirve `dist/` con `vite preview`.
// 2. Abre cada idioma (?lang=xx) en Chrome headless vía DevTools Protocol.
// 3. Aplica los estilos @media print (sin menú ni botones) y exporta el PDF
//    con el ancho de escritorio, en una sola página continua: fiel al sitio.
// 4. Guarda en public/cv/ (para el repo y el servidor de desarrollo) y en dist/cv/.
//
// Si no encuentra Chrome (p. ej. en CI), avisa y sale sin error: se usan los
// PDF ya versionados en public/cv/. Ruta personalizada: CHROME_PATH=/ruta/chrome.

import { spawn } from 'node:child_process'
import { existsSync, mkdirSync, mkdtempSync, rmSync, writeFileSync } from 'node:fs'
import { tmpdir } from 'node:os'
import { join, resolve } from 'node:path'
import { preview } from 'vite'

const ROOT = resolve(import.meta.dirname, '..')
const LOCALES = ['en', 'es']
const FILE_BASENAME = 'juan-munoz-cv'
const PAGE_WIDTH_PX = 1280 // ancho de escritorio con el que se "fotografía" el sitio
const DEBUG_PORT = 9341

const sleep = (ms) => new Promise((r) => setTimeout(r, ms))

function findChrome() {
  const candidates = [
    process.env.CHROME_PATH,
    'C:/Program Files/Google/Chrome/Application/chrome.exe',
    'C:/Program Files (x86)/Google/Chrome/Application/chrome.exe',
    'C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe',
    process.env.LOCALAPPDATA && join(process.env.LOCALAPPDATA, 'Google/Chrome/Application/chrome.exe'),
    '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
    '/usr/bin/google-chrome',
    '/usr/bin/google-chrome-stable',
    '/usr/bin/chromium',
    '/usr/bin/chromium-browser',
  ]
  return candidates.find((path) => path && existsSync(path))
}

async function connect(port) {
  let targets
  for (let i = 0; i < 60 && !targets; i++) {
    try {
      targets = await (await fetch(`http://127.0.0.1:${port}/json`)).json()
    } catch {
      await sleep(250)
    }
  }
  if (!targets) throw new Error('No se pudo conectar con Chrome')

  const page = targets.find((t) => t.type === 'page')
  const ws = new WebSocket(page.webSocketDebuggerUrl)
  await new Promise((r, reject) => {
    ws.addEventListener('open', r)
    ws.addEventListener('error', reject)
  })

  let nextId = 0
  const pending = new Map()
  const listeners = new Map()
  ws.addEventListener('message', (event) => {
    const msg = JSON.parse(event.data)
    if (msg.id && pending.has(msg.id)) {
      const { resolve: ok, reject } = pending.get(msg.id)
      pending.delete(msg.id)
      msg.error ? reject(new Error(msg.error.message)) : ok(msg.result)
    } else if (msg.method && listeners.has(msg.method)) {
      listeners.get(msg.method)(msg.params)
      listeners.delete(msg.method)
    }
  })

  const send = (method, params = {}) =>
    new Promise((ok, reject) => {
      const id = ++nextId
      pending.set(id, { resolve: ok, reject })
      ws.send(JSON.stringify({ id, method, params }))
    })
  const once = (method) => new Promise((ok) => listeners.set(method, ok))
  const evaluate = async (expression) =>
    (await send('Runtime.evaluate', { expression, awaitPromise: true, returnByValue: true })).result.value

  return { send, once, evaluate, close: () => ws.close() }
}

async function main() {
  const chromePath = findChrome()
  if (!chromePath) {
    console.warn('[build-cv] Chrome no encontrado: se conservan los PDF existentes en public/cv/.')
    return
  }
  if (!existsSync(join(ROOT, 'dist/index.html'))) {
    throw new Error('[build-cv] Falta dist/. Ejecuta primero "vite build".')
  }

  const server = await preview({ root: ROOT, preview: { port: 4318, strictPort: false, open: false } })
  const baseUrl = server.resolvedUrls.local[0]
  const profileDir = mkdtempSync(join(tmpdir(), 'cv-chrome-'))
  const chrome = spawn(chromePath, [
    '--headless=new',
    '--disable-gpu',
    '--hide-scrollbars',
    `--remote-debugging-port=${DEBUG_PORT}`,
    `--user-data-dir=${profileDir}`,
    `--window-size=${PAGE_WIDTH_PX},900`,
    'about:blank',
  ])

  try {
    const cdp = await connect(DEBUG_PORT)
    await cdp.send('Page.enable')
    await cdp.send('Emulation.setDeviceMetricsOverride', {
      width: PAGE_WIDTH_PX,
      height: 900,
      deviceScaleFactor: 1,
      mobile: false,
    })

    for (const outDir of ['public/cv', 'dist/cv']) mkdirSync(join(ROOT, outDir), { recursive: true })

    for (const locale of LOCALES) {
      const loaded = cdp.once('Page.loadEventFired')
      await cdp.send('Page.navigate', { url: `${baseUrl}?lang=${locale}` })
      await loaded

      // Espera fuentes e imágenes, luego mide la altura con los estilos de impresión
      await cdp.evaluate(`(async () => {
        await document.fonts.ready
        await Promise.all([...document.images].map((img) =>
          img.complete ? null : new Promise((r) => { img.onload = img.onerror = r })))
      })()`)
      await cdp.send('Emulation.setEmulatedMedia', { media: 'print' })
      await sleep(300)
      const heightPx = await cdp.evaluate('Math.ceil(document.documentElement.scrollHeight)')

      const { data } = await cdp.send('Page.printToPDF', {
        printBackground: true,
        preferCSSPageSize: false,
        paperWidth: PAGE_WIDTH_PX / 96,
        paperHeight: (heightPx + 2) / 96, // una sola página continua
        marginTop: 0,
        marginBottom: 0,
        marginLeft: 0,
        marginRight: 0,
        scale: 1,
      })
      await cdp.send('Emulation.setEmulatedMedia', { media: '' })

      const file = `${FILE_BASENAME}-${locale}.pdf`
      const pdf = Buffer.from(data, 'base64')
      for (const outDir of ['public/cv', 'dist/cv']) writeFileSync(join(ROOT, outDir, file), pdf)
      console.log(`[build-cv] ${file} (${Math.round(pdf.length / 1024)} KB, ${heightPx}px de alto)`)
    }

    cdp.close()
  } finally {
    chrome.kill()
    await new Promise((r) => server.httpServer.close(r))
    await sleep(300)
    rmSync(profileDir, { recursive: true, force: true, maxRetries: 3 })
  }
}

main().catch((error) => {
  console.error(error)
  process.exit(1)
})
