export const navigation = [
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experiencia' },
  { label: 'Tools', href: '#tools' },
  { label: 'Projects', href: '#proyectos' },
  { label: 'Contact', href: '#contacto' },
]

export const hero = {
  eyebrow: "Hi, I'm",
  name: 'Juan Muñoz',
  role: 'Senior Product Designer | AI-Driven Design Engineer',
  cta: 'About me',
}

export const about = {
  title: 'About',
  subtitle: 'Designing products in the era of AI',
  description:
    'Senior Product Designer with over 8 years designing digital experiences for banking, insurance, and capital markets: user-centered transactional and back-office systems. I connect the business vision with the final product and power up flows with artificial intelligence. At GFT Technologies I have worked with 7 financial-sector clients in Colombia and Chile and led the design of more than 10 initiatives. I built AI accelerators now used by other Design Studio teams and I mentor new designers. I work with agile methodologies, multidisciplinary teams, and senior stakeholders, remotely or hybrid.',
}

export const experiences = [
  {
    role: 'Senior Product Designer (UX/UI)',
    company: 'GFT Technologies (formerly Sophos Solutions)',
    period: 'July 2021 - Present',
    description:
      'Led 6 Fiduciaria Bancolombia initiatives through formal delivery, moving processes to automation (3 of them were born already automated). Built 3 AI accelerators adopted beyond my project: synthetic users (used by 3 Design Studio teams for Bancolombia and Mapfre, turning days of analysis into seconds), prompt-to-code with Figma Make (4 projects), and the design.md brand guide used by GFT’s AI and marketing teams. Designed and delivered 2 complete applications in one month each (Knowledge Base and Accounting Converter); the Knowledge Base will serve more than 2,000 people across the bank and its call centers. Increased Banco Popular advisors’ productivity by 15% with the redesign of their credit tools. In the GFT Design Studio (11 people serving 6+ banking clients) I mentor 3 designers, lead Design Talks and AI sessions, and trained the whole team in AI. Recognized with Talento Excede two years in a row and a Gem Sophos award.',
    clients: [
      'Bancolombia',
      'Itaú Chile',
      'nuam (formerly Bolsa de Valores de Colombia)',
      'Banco Popular',
      'Sistecrédito',
      'Tuya S.A.',
      'Protección',
    ],
    tags: ['Product Design', 'AI accelerators', 'Research', 'Design systems', 'Mentoring'],
  },
  {
    role: 'Digital Creative & Web Master',
    company: 'Fedesoft',
    period: 'October 2018 - March 2021',
    description:
      'Led the creative direction and digital experiences for Premio Ingenio, Softic, and the largest international business matchmaking event in Colombia: visual identity, print pieces, communication strategy, and the website of each event. Redesigned the organization’s website and its event sites with a user-centered approach, and maintained the web ecosystem, improving load times and search engine positioning.',
    tags: ['Creative direction', 'Web design', 'Visual identity', 'SEO'],
  },
  {
    role: 'UI Designer',
    company: 'Nativo (Miami agency)',
    period: 'December 2017 - June 2018',
    description:
      'Designed visual experiences for international brands, aligning identity and message, and supported the creation of visual identities for companies.',
    tags: ['UI Design', 'Brand design', 'Adobe CC'],
  },
  {
    role: 'Product Designer',
    company: 'Grimorum (design consultancy)',
    period: 'January 2017 - October 2017',
    description:
      'Gave talks on MVPs and product design and mentored early-stage startups. Built physical, digital, and high-fidelity prototypes and ran user tests to validate hypotheses.',
    tags: ['Prototyping', 'User testing', 'Speaker', 'Mentoring'],
  },
]

export const tools = [
  'Figma',
  'Figma Make',
  'Maze',
  'Miro',
  'Notion',
  'Adobe CC',
  'Claude',
  'Claude Code',
  'GitHub Copilot',
  'VS Code',
  'Antigravity',
  'Stitch',
  'Lovable',
  'v0',
  'Google AI Studio',
  'Supabase',
  'React',
  'TypeScript',
  'Angular',
  'HTML 5',
  'CSS 3',
  'JavaScript',
  'Git',
  'Blender',
  'Unreal Engine',
]

export const projects = [
  {
    title: 'GLITCHRUN',
    description:
      '2D arcade runner with retro pixel-art style, built end-to-end as a 100% spec-driven MVP: PRD, wireframes, design system, and implementation plan first, then developed with AI. Includes an 8x8 sprite editor, solo and co-op modes, a global leaderboard, and a community gallery. Tested with around 20 people. Stack: React, TypeScript, Vite, Tailwind, and Supabase.',
    preview: 'https://glitchrun-beta.vercel.app/',
    github: 'https://github.com/juanpixel/glitchrun',
    image:
      'https://images.unsplash.com/photo-1511512578047-dfb367046420?fm=jpg&fit=crop&w=800&q=70',
  },
  {
    title: 'Knowledge Base II · Bancolombia',
    description:
      'End-to-end redesign of the platform where Bancolombia centralizes and governs operational knowledge (+800 processes, 16 information domains): 9+ modules, an approval governance model with inheritable roles, an AI-summarized smart search, and a “living document” approval flow. Approved as final delivery and built for more than 2,000 users.',
    preview: '#',
    github: '#',
    image:
      'https://images.unsplash.com/photo-1554224155-6726b3ff858f?fm=jpg&fit=crop&w=800&q=70',
  },
  {
    title: 'ORBIT',
    description:
      'My framework for the GFT Design Studio to build agile, AI-powered digital products. It delivers Value Impulses in a continuous five-phase cycle (Observe, Reimagine, Build, Integrate, Track), with real evidence in every iteration.',
    preview: '#',
    github: '#',
    image:
      'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?fm=jpg&fit=crop&w=800&q=70',
  },
]

// Datos que no cambian con el idioma
export const profile = {
  fullName: 'Juan Pablo Muñoz Rozo',
  links: [
    { label: 'Website', url: 'https://juanpixel.dev' },
    { label: 'LinkedIn', url: 'https://linkedin.com/in/juanpablomunoz' },
    { label: 'GitHub', url: 'https://github.com/juanpixel' },
    { label: 'Behance', url: 'https://behance.net/juanpablomunoz' },
  ],
}

export const contact = {
  text: 'Available for product design, design engineering, and AI-driven product collaborations. Based in Colombia (UTC-5), remote or hybrid.',
  email: 'hello@juanpixel.dev',
  location: 'Colombia (UTC-5) · Remote or hybrid',
}

export const education = [
  { title: 'Industrial Designer', institution: 'Universidad Icesi, Cali' },
  {
    title: 'Diploma in Strategy and Leadership for Digital Transformation',
    institution: 'Universidad Sergio Arboleda',
    year: '2026',
  },
  { title: 'AI for UXers (Design Engineering)', institution: 'Interface School', year: '2026' },
  { title: 'Design Systems + AI', institution: 'Interface School', year: '2026' },
  { title: 'AI Fluency: Framework & Foundations', institution: 'Anthropic' },
  {
    title: '130+ courses',
    institution: 'Platzi',
    detail:
      'Paths in front-end design, design systems, and product design. Recent: Software Architecture Fundamentals, Prompt Engineering, Accessibility and Inclusive Design, Ethics in UX Research, Supabase.',
  },
]

export const languages = [
  { name: 'Spanish', level: 'Native' },
  { name: 'English', level: 'B2' },
]

export const ui = {
  navLabel: 'Main navigation',
  languageLabel: 'Language',
  experienceTitle: 'Experience',
  clientsLabel: 'Clients',
  educationTitle: 'Education',
  certificationsLabel: 'Education & certifications',
  languagesLabel: 'Languages',
  toolsTitle: 'Tools',
  projectsTitle: 'Projects',
  previewLabel: 'Preview',
  codeLabel: 'Code',
  contactTitle: 'Contact',
  portraitLabel: 'Portrait of Juan Muñoz',
  cvButton: 'Download CV',
  cvMenuLabel: 'CV download format',
  cvMarkdown: 'Markdown',
  cvMarkdownHint: 'Plain text · ideal for ATS and AI tools',
  cvPdf: 'PDF',
  cvPdfHint: 'Same design as this site',
}

export type Locale = 'en' | 'es'

export const defaultLocale: Locale = 'en'

export const portfolioTranslations = {
  en: {
    ui,
    navigation,
    hero,
    about,
    experiences,
    education,
    languages,
    tools,
    projects,
    contact,
  },
  es: {
    ui: {
      navLabel: 'Navegación principal',
      languageLabel: 'Idioma',
      experienceTitle: 'Experiencia',
      clientsLabel: 'Clientes',
      educationTitle: 'Formación',
      certificationsLabel: 'Formación y certificaciones',
      languagesLabel: 'Idiomas',
      toolsTitle: 'Herramientas',
      projectsTitle: 'Proyectos',
      previewLabel: 'Ver demo',
      codeLabel: 'Código',
      contactTitle: 'Contacto',
      portraitLabel: 'Retrato de Juan Muñoz',
      cvButton: 'Descargar CV',
      cvMenuLabel: 'Formato de descarga del CV',
      cvMarkdown: 'Markdown',
      cvMarkdownHint: 'Texto plano · ideal para ATS y herramientas de IA',
      cvPdf: 'PDF',
      cvPdfHint: 'Con el mismo diseño de este sitio',
    },
    navigation: [
      { label: 'Sobre mí', href: '#about' },
      { label: 'Experiencia', href: '#experiencia' },
      { label: 'Herramientas', href: '#tools' },
      { label: 'Proyectos', href: '#proyectos' },
      { label: 'Contacto', href: '#contacto' },
    ],
    hero: {
      eyebrow: 'Hola, soy',
      name: 'Juan Muñoz',
      role: 'Senior Product Designer | AI-Driven Design Engineer',
      cta: 'Sobre mí',
    },
    about: {
      title: 'Sobre mí',
      subtitle: 'Diseñando productos en la era de la IA',
      description:
        'Senior Product Designer con más de 8 años diseñando experiencias digitales para banca, seguros y mercado de valores: sistemas transaccionales y de backoffice centrados en el usuario. Conecto la visión de negocio con el producto final y potencio los flujos con inteligencia artificial. En GFT Technologies he trabajado con 7 clientes del sector financiero en Colombia y Chile y liderado el diseño de más de 10 iniciativas. Construí aceleradores de IA que hoy usan otros equipos del Design Studio y mentoro a nuevos diseñadores. Trabajo con metodologías ágiles, equipos multidisciplinarios y stakeholders senior, en remoto o híbrido.',
    },
    experiences: [
      {
        role: 'Senior Product Designer (UX/UI)',
        company: 'GFT Technologies (antes Sophos Solutions)',
        period: 'Julio 2021 - Actualidad',
        description:
          'Lideré 6 iniciativas de Fiduciaria Bancolombia hasta su entrega formal, llevando procesos a la automatización (3 de ellos nacieron ya automatizados). Construí 3 aceleradores de IA adoptados fuera de mi proyecto: usuarios sintéticos (usados por 3 equipos del Design Studio en Bancolombia y Mapfre; de días de análisis a segundos), prompt-to-code con Figma Make (4 proyectos) y la guía de marca design.md que usan los equipos de IA y mercadeo de GFT. Diseñé y entregué 2 aplicaciones completas en un mes cada una (Base de Conocimiento y Conversor Contable); Base de Conocimiento la usarán más de 2.000 personas entre el banco y sus call centers. Aumenté un 15% la productividad de los asesores de Banco Popular con el rediseño de sus herramientas de crédito. En el GFT Design Studio (11 personas, más de 6 clientes bancarios) mentoro a 3 personas, lidero las Design Talks y charlas de IA, y capacité en IA a todo el equipo. Reconocido con Talento Excede dos años consecutivos y un reconocimiento Gem Sophos.',
        clients: [
          'Bancolombia',
          'Itaú Chile',
          'nuam (antes Bolsa de Valores de Colombia)',
          'Banco Popular',
          'Sistecrédito',
          'Tuya S.A.',
          'Protección',
        ],
        tags: ['Diseño de producto', 'Aceleradores de IA', 'Investigación', 'Sistemas de diseño', 'Mentoría'],
      },
      {
        role: 'Creativo Digital y Web Master',
        company: 'Fedesoft',
        period: 'Octubre 2018 - Marzo 2021',
        description:
          'Lideré la dirección creativa y las experiencias digitales de Premio Ingenio, Softic y la rueda de negocios internacional más grande de Colombia: identidad visual, piezas impresas, estrategia de comunicación y sitios web de cada evento. Rediseñé el sitio web de la organización y los de sus eventos con enfoque centrado en el usuario, y mantuve el ecosistema web, mejorando tiempos de carga y posicionamiento en buscadores.',
        tags: ['Dirección creativa', 'Diseño web', 'Identidad visual', 'SEO'],
      },
      {
        role: 'UI Designer',
        company: 'Nativo (agencia de Miami)',
        period: 'Diciembre 2017 - Junio 2018',
        description:
          'Diseñé experiencias visuales para marcas internacionales, alineando identidad y mensaje, y apoyé la creación de identidad visual para empresas.',
        tags: ['UI Design', 'Diseño de marca', 'Adobe CC'],
      },
      {
        role: 'Diseñador de Producto',
        company: 'Grimorum (consultora de diseño)',
        period: 'Enero 2017 - Octubre 2017',
        description:
          'Dicté charlas sobre MVP y diseño de producto y fui mentor de emprendimientos en etapa temprana. Construí prototipos físicos, digitales y de alta fidelidad, y realicé pruebas con usuarios para validar hipótesis.',
        tags: ['Prototipado', 'Pruebas con usuarios', 'Ponente', 'Mentoría'],
      },
    ],
    tools,
    projects: [
      {
        title: 'GLITCHRUN',
        description:
          'Arcade runner 2D con estética pixel-art retro, diseñado y construido de punta a punta como MVP 100% spec-driven: primero PRD, wireframes, sistema de diseño y plan de implementación; después desarrollado con IA. Incluye editor de sprites 8x8, modos individual y cooperativo, ranking global y galería comunitaria. Validado con unas 20 personas. Stack: React, TypeScript, Vite, Tailwind y Supabase.',
        preview: 'https://glitchrun-beta.vercel.app/',
        github: 'https://github.com/juanpixel/glitchrun',
        image:
          'https://images.unsplash.com/photo-1511512578047-dfb367046420?fm=jpg&fit=crop&w=800&q=70',
      },
      {
        title: 'Base de Conocimiento II · Bancolombia',
        description:
          'Rediseño integral de la plataforma donde Bancolombia centraliza y gobierna su conocimiento operativo (+800 procesos, 16 dominios de información): más de 9 módulos, un modelo de gobierno de aprobaciones con roles heredables, un buscador inteligente con resumen generado por IA y un flujo de aprobación de "documento vivo". Aprobada como entrega final y pensada para más de 2.000 usuarios.',
        preview: '#',
        github: '#',
        image:
          'https://images.unsplash.com/photo-1554224155-6726b3ff858f?fm=jpg&fit=crop&w=800&q=70',
      },
      {
        title: 'ORBIT',
        description:
          'Mi framework para el GFT Design Studio para construir productos digitales ágiles potenciados por IA. Entrega Impulsos de Valor en un ciclo continuo de cinco fases (Observe, Reimagine, Build, Integrate, Track), con evidencia real en cada iteración.',
        preview: '#',
        github: '#',
        image:
          'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?fm=jpg&fit=crop&w=800&q=70',
      },
    ],
    contact: {
      text: 'Disponible para diseño de producto, ingeniería de diseño y colaboraciones con IA. Desde Colombia (UTC-5), en remoto o híbrido.',
      email: 'hello@juanpixel.dev',
      location: 'Colombia (UTC-5) · Remoto o híbrido',
    },
    education: [
      { title: 'Diseñador Industrial', institution: 'Universidad Icesi, Cali' },
      {
        title: 'Diplomado en Estrategia y Dirección para la Transformación Digital',
        institution: 'Universidad Sergio Arboleda',
        year: '2026',
      },
      { title: 'IA para UXers (Design Engineering)', institution: 'Interface School', year: '2026' },
      { title: 'Design Systems + AI', institution: 'Interface School', year: '2026' },
      { title: 'AI Fluency: Framework & Foundations', institution: 'Anthropic' },
      {
        title: 'Más de 130 cursos',
        institution: 'Platzi',
        detail:
          'Rutas en diseño front-end, sistemas de diseño y diseño de producto. Recientes: Fundamentos de Arquitectura de Software, Prompt Engineering, Accesibilidad y Diseño Inclusivo, Ética en el UX Research, Supabase.',
      },
    ],
    languages: [
      { name: 'Español', level: 'Nativo' },
      { name: 'Inglés', level: 'B2' },
    ],
  },
}
