
import "./Contact.css";

const socialLinks = [
  {
    name: "Instagram",
    icon: "◎",
    description: "Connect with me on Instagram",
    url: "https://www.instagram.com/maryam6032114/?hl=en",
    className: "contact__link--instagram",
  },
  {
    name: "Facebook",
    icon: "f",
    description: "Find me on Facebook",
    url: "https://www.facebook.com/share/1EBfcANSpB/",
    className: "contact__link--facebook",
  },
  {
    name: "LinkedIn",
    icon: "in",
    description: "Let's connect professionally",
    url: "https://linkedin.com/in/alishba-maryam-56202b388",
    className: "contact__link--linkedin",
  },
  {
    name: "Email Me",
    icon: "✉",
    description: "Let's discuss your project",
    url: "mailto:engralishbamaryam@gmail.com?subject=Project%20Inquiry",
    className: "contact__link--email",
  },
  
  {
    name: "GitHub",
    icon: "⌘",
    description: "Explore my code and projects",
    url: "https://github.com/EngrAlishbaMaryam",
    className: "contact__link--github",
  },

];

function Contact() {
  return (
    <section className="contact" id="contact">
      <div className="contact__container">
        <header className="contact__header">
          <span className="contact__eyebrow">
            GET IN TOUCH
          </span>

          <h2>
            Let's work <span>together.</span>
          </h2>

          <p>
            Have an idea or a project in mind? I would love
            to hear from you. Let's create something amazing!
          </p>
        </header>

        <div className="contact__grid">
          {socialLinks.map((social) => (
            <a
  key={social.name}
  className={`contact__link ${social.className}`}
  href={social.url}
  target={social.name === "Email Me" ? undefined : "_blank"}
  rel={
    social.name === "Email Me"
      ? undefined
      : "noopener noreferrer"
  }
  aria-label={`Open my ${social.name}`}
>
              <span className="contact__icon" aria-hidden="true">
                {social.icon}
              </span>

              <span className="contact__link-text">
                <strong>{social.name}</strong>
                <small>{social.description}</small>
              </span>

              <span className="contact__arrow" aria-hidden="true">
                ↗
              </span>
            </a>
          ))}
        </div>

        <p className="contact__footer">
          ✦ Thank you for visiting my portfolio!
        </p>
      </div>
    </section>
  );
}

export default Contact;
