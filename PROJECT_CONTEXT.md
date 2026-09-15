# JuanPixel Portfolio - Contexto de migración

## 1. Información general del proyecto
- Nombre: JuanPixel web / portfolio personal
- Tipo: landing page / portfolio profesional
- Propósito: presentar perfil, experiencia, herramientas y proyectos
- Persona: Juan Pablo Muñoz (JuanPixel.dev)
- Estilo visual: dark mode, minimalista, tecnológico, muy orientado a diseño y frontend

## 2. Estructura del proyecto original

### Archivos principales
- index.html: contenido principal de la web
- css/main.css: estilos visuales y responsive
- assets/img/: imágenes, favicon y capturas de proyecto
- README.md: descripción básica del proyecto

### Secciones principales que existen en la web
1. Navegación principal
   - Home
   - About
   - Experience
   - Tools
   - Projects
   - Contact

2. Hero / home
   - Título: JuanPixel
   - Subtítulo: Product Designer & Frontend Developer
   - Texto introductorio: "Hi I'm"
   - Botón: About me
   - Imagen principal: assets/img/juanpixel.png

3. About
   - Título: About
   - Subtítulo: "I’m a designer and developer since 2015"
   - Texto biográfico: Juan Pablo Muñoz, industrial designer from Icesi University, passionate about digital products.
   - Experiencia mencionada: UX, UI, design systems, front-end development, identities, digital experiences.

4. Experience
   - Sr UX-UI Designer — Sophos Solutions — 2021 - Currently
   - Digital Creative — Fedesoft — 2018 - 2021
   - Visual Designer — Nativo — 2017 - 2018
   - UX Designer — Grimorum — 2017

5. Tools / stack
   - Figma
   - Adobe CC
   - Miro
   - Maze
   - HTML 5
   - CSS 3
   - JavaScript
   - Notion
   - etc.

6. Projects
   - Animal Collect
   - Price calculator
   - Otros proyectos listados en la web original

7. Contact
   - Secciones de contacto y enlaces a redes/proyectos

## 3. Visual identity a preservar
- Fondo principal: negro / muy oscuro
- Texto principal: blanco / casi blanco
- Acento verde: tonos verdes para botones, badges y elementos de marca
- Tipografía principal: Roboto Mono
- Navegación estilo pills con fondo oscuro y hover verde
- Botones con bordes verdes y tratamiento dark-mode
- Secciones en formato vertical con separación clara
- Layout con mucho ancho editorial y estructura minimalista

## 4. Paleta de colores
Variables detectadas en CSS:
- --black: #222222
- --white: #EBEBEB
- --Green-Primary-DarckMode: #1AD11A
- --Green-Secundary-DarckMode: #0F780F
- --Green-Terciary-DarkMode: #C2F7C2
- --Grey--DarkMode: #363636

## 5. Typography
- Fuente principal: "Roboto Mono", monospace
- Tamaños importantes:
  - h1: 40px
  - h2: 35px
  - h3: 25px
  - p: 16px
  - tiny: 12px

## 6. Estructura de contenido a conservar
### Hero
- Texto: "Hi I'm"
- Nombre: JuanPixel
- Cargo: Product Designer & Frontend Developer
- CTA: About me

### About
- Texto: “I’m a designer and developer since 2015”
- Bio: descripción profesional y formación industrial en Icesi University
- Lógica: perfil profesional con enfoque digital

### Experience
Cada experiencia tiene:
- cargo
- empresa
- periodo
- descripción larga con responsabilidades/impacto
- badges/tags de herramientas o metodologías

### Tools
- listado visual de iconos + etiqueta
- enfoque visual de stack personal

### Projects
- cada proyecto tiene:
  - imagen
  - título
  - descripción corta
  - preview link
  - github o Behance link

## 7. Componentes que conviene reutilizar en React
- Navbar
- HeroSection
- AboutSection
- ExperienceTimeline
- ExperienceItem
- ToolGrid
- ProjectCard
- ContactSection
- Button
- Badge

## 8. Objetivo de la migración
Convertir una web estática en una app React reutilizable y escalable, manteniendo:
- el diseño original
- la identidad visual
- el contenido profesional actual
- la capacidad de evolucionar con nuevos proyectos, secciones y datos externos

## 9. Reglas para la migración
- No perder el mensaje central de marca
- Mantener la misma estética dark mode
- No agregar demasiada complejidad innecesaria en la primera iteración
- Extraer contenido a estructuras de datos reutilizables cuando se pueda
- Priorizar legibilidad y mantenibilidad

## 10. Estado actual del proyecto
- La versión original está guardada como referencia histórica en la rama legacy/portfolio-html
- La rama feature/portfolio-react se usa para la migración a React
- El objetivo es mantener el diseño original y convertirlo en una base modular y profesional

## 11. Archivos clave para referencia durante la migración
- [index.html](index.html)
- [css/main.css](css/main.css)
- assets/img/juanpixel.png
- assets/img/proyectos/*

## 12. Notas finales
Este portfolio ya tiene una base muy sólida en cuanto a branding y contenido. El reto principal no es “rediseñar”, sino “estructurar mejor” para que crezca sin repetir código y sin perder la esencia visual original.
