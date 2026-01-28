import "../styles/contact.css";

const SOCIALS = [
  { label: "GitHub", href: "https://github.com/safaktepe", icon: "github" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/USERNAME", icon: "linkedin" },
  { label: "X", href: "https://x.com/USERNAME", icon: "x" },
  { label: "Email", href: "mailto:you@example.com", icon: "mail" },
] as const;

function Icon({ name }: { name: (typeof SOCIALS)[number]["icon"] }) {
  switch (name) {
    case "github":
      return (
        <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true">
          <path
            fill="currentColor"
            d="M12 .5C5.73.5.75 5.62.75 12c0 5.1 3.29 9.42 7.86 10.95.58.11.79-.26.79-.57v-2.1c-3.2.71-3.87-1.28-3.87-1.28-.53-1.38-1.3-1.74-1.3-1.74-1.06-.75.08-.74.08-.74 1.17.08 1.78 1.23 1.78 1.23 1.04 1.81 2.73 1.29 3.4.99.11-.77.41-1.29.74-1.59-2.55-.3-5.23-1.31-5.23-5.82 0-1.29.45-2.35 1.19-3.18-.12-.3-.52-1.52.11-3.17 0 0 .97-.32 3.18 1.21a10.7 10.7 0 0 1 2.9-.4c.98 0 1.97.14 2.9.4 2.2-1.53 3.18-1.21 3.18-1.21.63 1.65.23 2.87.11 3.17.74.83 1.19 1.89 1.19 3.18 0 4.52-2.69 5.52-5.25 5.81.42.37.79 1.1.79 2.22v3.29c0 .31.21.68.79.57 4.57-1.53 7.86-5.85 7.86-10.95C23.25 5.62 18.27.5 12 .5Z"
          />
        </svg>
      );
    case "linkedin":
      return (
        <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true">
          <path
            fill="currentColor"
            d="M20.45 20.45h-3.56v-5.58c0-1.33-.03-3.05-1.86-3.05-1.86 0-2.15 1.45-2.15 2.95v5.68H9.32V9h3.42v1.56h.05c.48-.9 1.64-1.86 3.38-1.86 3.61 0 4.28 2.38 4.28 5.47v6.28ZM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12ZM7.12 20.45H3.56V9h3.56v11.45Z"
          />
        </svg>
      );
    case "x":
      return (
        <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true">
          <path
            fill="currentColor"
            d="M18.9 2H21l-6.6 7.54L22 22h-6.2l-4.86-6.44L5.6 22H3.5l7.08-8.09L2 2h6.35l4.4 5.76L18.9 2Zm-1.08 18h1.16L7.68 3.9H6.43l11.39 16.1Z"
          />
        </svg>
      );
    case "mail":
      return (
        <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true">
          <path
            fill="currentColor"
            d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2Zm0 4-8 5L4 8V6l8 5 8-5v2Z"
          />
        </svg>
      );
    default:
      return null;
  }
}

export function ContactSection() {
  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    // Placeholder: wire to your backend/service later.
  }

  return (
    <section id="contact" className="contactSection">
      <div className="contactInner">
        <header className="contactHeader">
          <h2 className="contactTitle">Get in Touch</h2>
          <p className="contactKicker">Hire Me!</p>
        </header>

        <div className="contactGrid">
          <div className="contactCard">
            <h3 className="contactCardTitle">Get in Touch</h3>

            <form className="contactForm" onSubmit={onSubmit}>
              <label className="field">
                <span className="srOnly">Your Name</span>
                <input className="input" name="name" placeholder="Your Name" autoComplete="name" />
              </label>

              <label className="field">
                <span className="srOnly">Your Email</span>
                <input
                  className="input"
                  name="email"
                  type="email"
                  placeholder="Your Email"
                  autoComplete="email"
                />
              </label>

              <label className="field">
                <span className="srOnly">Your Message</span>
                <textarea className="textarea" name="message" placeholder="Your Message" rows={7} />
              </label>

              <button type="submit" className="contactPrimaryBtn">
                Send Message
              </button>
            </form>
          </div>

          <aside className="contactCard">
            <h3 className="contactCardTitle">Connect With Me</h3>

            <div className="socialRow" aria-label="Social links">
              {SOCIALS.map((s) => (
                <a
                  key={s.label}
                  className="socialBtn"
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={s.label}
                  title={s.label}
                >
                  <Icon name={s.icon} />
                </a>
              ))}
            </div>

            <div className="infoBlock">
              <h4 className="infoTitle">Location</h4>
              <p className="infoText">Dortmund, 44369</p>
            </div>

            <div className="infoBlock">
              <h4 className="infoTitle">Availability</h4>
              <p className="infoText">
                Currently seeking full-time opportunities and open to collaborations within dynamic and
                innovative companies
              </p>
            </div>

            <div className="contactResumeWrap">
              <a className="resumeBtn" href="/resume.pdf" target="_blank" rel="noreferrer">
                Download My Resume
              </a>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
