function Contact() {
  return (
    <section className="contact scroll-reveal" id="contact">
      <div className="contact-container">
        <div className="contact-header">
          <h2>
            Let's <span>Create</span> Something Amazing
          </h2>
          <p>
            Have a project, question, or just want to say hello? I'd love to
            hear from you.
          </p>
        </div>

        <form
          action="https://formspree.io/f/mrpbkyeb"
          className="contact-form"
          method="POST"
        >
          <div className="form-group">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              className="form-input"
              required
            />
          </div>
          <div className="form-group">
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              className="form-input"
              required
            />
          </div>
          <div className="form-group">
            <textarea
              name="message"
              placeholder="Your Message"
              rows="6"
              className="form-input"
              required
            ></textarea>
          </div>
          <button type="submit" className="submit-button">
            Send Message
          </button>
        </form>

        <div className="contact-alternative">
          <p>Or reach me directly:</p>
          <div className="contact-methods">
            <a href="mailto:bennieeecodes@gmail.com" className="contact-method">
              Email
            </a>
            <a href="https://wa.me/+2349070868414" className="contact-method">
              WhatsApp
            </a>
            <a
              href="https://x.com/thatgirlbennie?s=11"
              className="contact-method"
            >
              X
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
