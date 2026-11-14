import { useLocale } from '../i18n/locale-context'

export function Contact() {
  const { contact, ui } = useLocale().content

  return (
    <section id="contacto" className="section">
      <h2>{ui.contactTitle}</h2>
      <div className="contact-box">
        <p>{contact.text}</p>
        <a className="btn btn--primary" href={`mailto:${contact.email}`}>
          {contact.email}
        </a>
      </div>
    </section>
  )
}
