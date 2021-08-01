export default function ContactForm() {
  return (
    <form name="contact-form" method="post">
      <input type="hidden" name="form-name" value="contact-form" />
      <div>
        <label htmlFor="name">Full Name</label> <br />
        <input
          type="text"
          id="name"
          name="name"
          placeholder="Jane Doe"
          required
        />
      </div>
      <div>
        <label htmlFor="email">E-mail</label> <br />
        <input
          type="email"
          id="email"
          name="email"
          placeholder="doe@example.com"
          required
        />
      </div>
      <div>
        <label htmlFor="message">Message</label> <br />
        <textarea
          id="message"
          name="message"
          placeholder="Your message here!"
          required
        ></textarea>
      </div>
      <div>
        <input type="submit" className="submit" value="Send Message" />
      </div>
    </form>
  );
}
