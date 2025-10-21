export function ContactForm() {
  return (
    <section id="contact" className="contact section">
      <div className="container">
        <h2 className="contact__title">Get In Touch</h2>
        <p className="contact__subtitle">
          Have a question or want to work together?
        </p>

        {/* Netlify form attributes are still here and will work perfectly */}
        <form
          name="contact"
          method="POST"
          data-netlify="true"
          className="contact-form"
        >
          <input type="hidden" name="form-name" value="contact" />

          <div className="form-group">
            <label htmlFor="name">Your Name</label>
            <input type="text" name="name" id="name" required />
          </div>

          <div className="form-group">
            <label htmlFor="email">Your Email</label>
            <input type="email" name="email" id="email" required />
          </div>

          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea name="message" id="message" rows={4} required></textarea>
          </div>

          <div className="form-group form-group--button">
            <button type="submit" className="btn btn-primary">
              Send Message
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}