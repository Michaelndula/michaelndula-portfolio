export function Contact() {
  return (
    <section id="contact" className="section container fade-in-section contact-section">
      <h2 className="projects-title">Get In Touch</h2>
      <p className="hero-summary">
        Have a question, a project proposal, or just want to connect? I'd love to hear from you.
      </p>
      <form
        name="contact"
        method="POST"
        data-netlify="true"
        className="contact-form"
      >
        <input type="hidden" name="form-name" value="contact" />

        <div className="form-row">
            <div className="form-group">
                <label htmlFor="name">Your Name</label>
                <input type="text" name="name" id="name" required />
            </div>
            <div className="form-group">
                <label htmlFor="email">Your Email</label>
                <input type="email" name="email" id="email" required />
            </div>
        </div>

        <div className="form-group">
          <label htmlFor="message">Message</label>
          <textarea name="message" id="message" rows={5} required></textarea>
        </div>

        <div className="form-group form-submit">
          <button type="submit" className="btn-submit">
            Send Message
          </button>
        </div>
      </form>
    </section>
  );
}

