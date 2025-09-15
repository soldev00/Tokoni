export default function ContactPage() {
  return (
    <main className="container section narrow">
      <h1 className="section-title">Contact</h1>
      <form className="form">
        <label>
          Name
          <input type="text" placeholder="Your name" />
        </label>
        <label>
          Email
          <input type="email" placeholder="you@example.com" />
        </label>
        <label>
          Message
          <textarea rows={5} placeholder="How can we help?" />
        </label>
        <button className="btn">Send Message</button>
      </form>
    </main>
  );
}
