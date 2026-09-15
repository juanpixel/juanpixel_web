import { contact } from '../data/portfolio'

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
