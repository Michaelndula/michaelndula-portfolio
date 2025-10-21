import { useState } from 'react';

export function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('submitting');

    const form = new FormData(e.target as HTMLFormElement);
    const params = new URLSearchParams();
    form.forEach((value, key) => {
      params.append(key, String(value));
    });
    const encodedData = params.toString();

    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encodedData,
    })
      .then(() => setFormStatus('success'))
      .catch((error) => {
        console.error("Form submission error:", error);
        setFormStatus('error');
      });
  };

  return (
    <section id="contact" className="section container fade-in-section contact-section">
      <h2 className="projects-title">Get In Touch</h2>
      <p className="hero-summary">
        Have a question, a project proposal, or just want to connect? I'd love to hear from you.
      </p>

      {formStatus === 'success' ? (
        <div className="form-success-message">
          <h3>Thank You!</h3>
          <p>Your message has been sent successfully. I'll get back to you shortly.</p>
        </div>
      ) : (
        <form
          name="contact"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
          onSubmit={handleSubmit}
          className="contact-form"
        >
          <input type="hidden" name="form-name" value="contact" />
          <p hidden><label>Don’t fill this out: <input name="bot-field" /></label></p>

          <div className="form-row">
            <div className="form-group">
              <label htmlFor="name">Your Name</label>
              <input type="text" name="name" id="name" value={formData.name} onChange={handleChange} required />
            </div>
            <div className="form-group">
              <label htmlFor="email">Your Email</label>
              <input type="email" name="email" id="email" value={formData.email} onChange={handleChange} required />
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea name="message" id="message" rows={5} value={formData.message} onChange={handleChange} required></textarea>
          </div>

          <div className="form-group form-submit">
            <button type="submit" className="btn-submit" disabled={formStatus === 'submitting'}>
              {formStatus === 'submitting' ? 'Sending...' : 'Send Message'}
            </button>
          </div>

          {formStatus === 'error' && (
            <p className="form-error-message">
              Sorry, there was an error sending your message. Please try again later.
            </p>
          )}
        </form>
      )}
    </section>
  );
}

