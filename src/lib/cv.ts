import { profile, type Locale, type portfolioTranslations } from '../data/portfolio'

type Content = (typeof portfolioTranslations)[Locale]

const FILE_BASENAME = 'juan-munoz-cv'

const isRealUrl = (url: string) => Boolean(url) && url !== '#'

/**
 * Arma el CV en Markdown a partir de los mismos datos que muestra el sitio.
 * Al agregar contenido en portfolio.ts, el Markdown se actualiza solo.
 */
export function buildCvMarkdown(content: Content): string {
  const { hero, about, experiences, education, languages, tools, projects, contact, ui } = content
  const lines: string[] = []

  lines.push(`# ${profile.fullName}`, '')
  // Dos espacios al final = salto de línea en Markdown
  lines.push(`**${hero.role}**  `)
  lines.push(`${contact.location} · ${contact.email}  `)
  lines.push(profile.links.map((link) => `[${link.label}](${link.url})`).join(' · '), '')

  lines.push(`## ${about.title}`, '', about.description, '')

  lines.push(`## ${ui.experienceTitle}`, '')
  for (const job of experiences) {
    lines.push(`### ${job.role} · ${job.company}`)
    lines.push(`*${job.period}*`, '')
    lines.push(job.description, '')
    if ('clients' in job && job.clients) {
      lines.push(`**${ui.clientsLabel}:** ${job.clients.join(', ')}`, '')
    }
  }

  lines.push(`## ${ui.projectsTitle}`, '')
  for (const project of projects) {
    lines.push(`### ${project.title}`, '', project.description)
    const links = [
      isRealUrl(project.preview) ? `[${ui.previewLabel}](${project.preview})` : null,
      isRealUrl(project.github) ? `[${ui.codeLabel}](${project.github})` : null,
    ].filter(Boolean)
    if (links.length) lines.push('', links.join(' · '))
    lines.push('')
  }

  lines.push(`## ${ui.certificationsLabel}`, '')
  for (const item of education) {
    const meta = [item.institution, item.year].filter(Boolean).join(', ')
    lines.push(`- **${item.title}**, ${meta}${item.detail ? `. ${item.detail}` : ''}`)
  }
  lines.push('')

  lines.push(`## ${ui.toolsTitle}`, '', tools.join(' · '), '')

  lines.push(`## ${ui.languagesLabel}`, '')
  lines.push(languages.map((lang) => `${lang.name} (${lang.level})`).join(' · '), '')

  return lines.join('\n')
}

/** Ruta del PDF pre-generado (scripts/build-cv.mjs) para cada idioma */
export const cvPdfUrl = (locale: Locale) => `${import.meta.env.BASE_URL}cv/${FILE_BASENAME}-${locale}.pdf`

function triggerDownload(href: string, filename: string) {
  const link = document.createElement('a')
  link.href = href
  link.download = filename
  document.body.appendChild(link)
  link.click()
  link.remove()
}

export function downloadCvMarkdown(content: Content, locale: Locale) {
  const blob = new Blob([buildCvMarkdown(content)], { type: 'text/markdown;charset=utf-8' })
  const url = URL.createObjectURL(blob)
  triggerDownload(url, `${FILE_BASENAME}-${locale}.md`)
  setTimeout(() => URL.revokeObjectURL(url), 1000)
}

export function downloadCvPdf(locale: Locale) {
  triggerDownload(cvPdfUrl(locale), `${FILE_BASENAME}-${locale}.pdf`)
}
