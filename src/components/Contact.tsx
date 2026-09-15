import { locale, portfolioTranslations } from '../data/portfolio'

const { contact } = portfolioTranslations[locale]

export function Contact() {
  return (
    <section id="contacto" className="section">
      <h2>Contact</h2>
      <div className="contact-box">
        <p>{contact.text}</p>
        <a className="btn btn--primary" href={`mailto:${contact.email}`}>
          {contact.email}
        </a>
      </div>
    </section>
  )
}
