# JuanPixel — Guía de estilos

> El personaje que explica diseño e IA desde un mundo de juguete. No habla con texto plano: actúa los conceptos con objetos. Esta guía documenta cómo se ve, cómo se comporta, y con qué sistema de color y tipografía vive dentro de juanpix.dev.

**Marca:** juanpix.dev · **Rol:** marca paraguas — el profesional, el maker · **Modo nativo:** dark (light mode con estrategia A+C) · **Estado:** v1 — base

---

## 01 — El personaje

Action figure 3D articulado, estilo Pixar/Funko. Dos modos, un mismo JuanPixel — el modo cambia según el tipo de contenido que está explicando, no según el canal.

### Cotidiano
*Portfolio, trabajo, proyectos*
- Calvo, barba, aretes, tatuajes
- Camiseta negra con un cohete blanco como logo
- Jeans azul petróleo
- Tenis negros con blanco

### Inventor
*Contenido sobre IA, conceptos, momentos maker*
- Bata blanca de científico
- Guantes verdes
- Gafas redondas
- Barba más poblada, energía desbordada — cables, chispas, bombillas

---

## 02 — Mecanismo narrativo

**JuanPixel actúa los conceptos con objetos — nunca los explica con texto plano.** Es una decisión de tono de contenido, no de marca: aplica igual si algún día el personaje es el tucán de Lupiter.

| Concepto | Objeto |
|---|---|
| Stakeholder difícil | Un Lego enojado con sombrero y traje, señalando con el dedo |
| Forma vs función | Una sacapuntas retro de manija + un robot esfera con visor azul |
| Momento maker | JuanPixel (bata) conectando cables a una bombilla gigante encendida, fondo azul |
| Truco de Figma | El logo 3D de Figma como objeto físico junto a JuanPixel en un escritorio infantil |

---

## 03 — Color

El sitio original de la persona ya era negro con verde lima — este sistema vuelve a esa raíz. El verde lima es el alma; el Obsidian Sea pasa a ser profundidad, no protagonista.

| Token | Hex | Rol |
|---|---|---|
| Verde lima | `#8DB84A` | Alma — color principal, protagonista |
| Obsidian Sea | `#0C3D52` | Secundario — profundidad, superficies, tarjetas |
| Negro | `#111111` | Fondo base |

### Categorías semánticas

Compartidas y coherentes con Lupiter — el mismo lenguaje de color entre las dos marcas.

| Categoría | Fondo | Texto |
|---|---|---|
| Producto & IA | `#0C3D52` | `#4ABFD8` |
| Diseño & forma | `#1A3A0A` | `#8DB84A` |
| Videojuegos | `#1A0F2A` | `#A080D4` |
| Impresión 3D | `#2A1500` | `#E8620A` |
| Lupiter familia | `#2A2000` | `#F0C832` |
| Malas prácticas | `#5C1010` | `#F08080` |
| Conflicto / stakeholders | `#3D0F0F` | `#F5C4B3` |
| Trucos / herramientas | `#1E2A0A` | `#9AC47A` |

### Light mode — estrategia A+C

El verde deja de ser color de texto (falla accesibilidad AA sobre fondo claro) y se convierte en color de superficie.

- **Hero:** fondo `#8DB84A` sólido + texto negro `#111111` en Bungee uppercase — ratio 5.9:1 AA
- **Botón primario sobre hero:** fondo negro `#111111` + texto verde `#8DB84A` — ratio 11.2:1 AAA
- **Botón secundario:** fondo gris-verde claro `#E4EED8` + texto oscuro
- **Resto del sitio:** fondo `#F4F8EE` + texto `#1A2A0A` — ratio 16:1 AAA
- **Nav:** fondo blanco `#FFFFFF`, marca en verde, CTA negro con texto verde

Patrón: `NAV blanco → HERO verde lima sólido con texto negro Bungee uppercase → sección CLIENTES en blanco → resto del sitio en verde muy pálido (#F4F8EE)`

---

## 04 — Tipografía

El mismo sistema de tres fuentes que Lupiter — no depende del nombre de la marca.

| Fuente | Rol | Uso |
|---|---|---|
| **Bungee** | Golpear | Heroes, H1/H2, labels de categoría |
| **MuseoModerno** | Hablar | Cuerpo, descripciones, botones, UI copy |
| **Roboto Mono** | Detallar | URLs, handles, tech stack, fechas, counters |

### Escala tipográfica

| Token | Tamaño | Fuente | Uso |
|---|---|---|---|
| display-xl | 64px | Bungee | Hero |
| display-lg | 40px | Bungee | H1 de sección |
| display-md | 28px | Bungee | H2, títulos de tarjeta |
| body-lg | 18px | MuseoModerno | Lede, intro de sección |
| body-md | 16px | MuseoModerno | Párrafo estándar |
| body-sm | 14px | MuseoModerno | Texto secundario |
| mono-sm | 12–13px | Roboto Mono | Metadatos, tags, fechas |

---

## 05 — Componentes base

| Variante | Fondo | Texto | Uso |
|---|---|---|---|
| Primary | `#8DB84A` (verde lima) | `#0E1A05` | Acción principal — "Ver el trabajo" |
| Secondary | transparente, borde verde | `#C7DDA0` | Acción secundaria — "Leer Figmañita" |
| Ghost | transparente, borde `#2A3320` | `#A3AE99` | Acción terciaria — "Ir a Lupiter" |

---

## Próximos pasos

- Definir cómo se ve JuanPixel al lado del tucán de Lupiter en piezas compartidas
- Sincronizar el verde definitivo en las variables de Figma (quedó pendiente el último cambio de "verde como alma")
- Decidir si el mecanismo narrativo de "actuar conceptos con objetos" se documenta como guía de contenido aparte, con más ejemplos por categoría

---

*juanpixel-style-guide.md · v1 base · negro `#111111` · verde lima `#8DB84A`*
