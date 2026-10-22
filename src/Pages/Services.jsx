
import "./Services.css";

const services = [
  {
    number: "01",
    icon: "🌐",
    title: "Website Development",
    description:
      "I build modern and professional websites for businesses, brands, and personal portfolios.",
    benefits: [
      "Build a strong online presence",
      "Present your business professionally",
      "Help customers find your services",
    ],
    tag: "Professional websites",
  },
  {
    number: "02",
    icon: "📱",
    title: "Responsive Design",
    description:
      "I create flexible layouts that adapt to mobile phones, tablets, laptops, and desktop screens.",
    benefits: [
      "A better experience on every device",
      "Easy navigation for visitors",
      "Consistent design across screens",
    ],
    tag: "Mobile-friendly layouts",
  },
  {
    number: "03",
    icon: "💻",
    title: "Frontend Development",
    description:
      "I turn designs into interactive interfaces using React, JavaScript, HTML, and CSS.",
    benefits: [
      "Clean and attractive interfaces",
      "Smooth and intuitive interactions",
      "Easy-to-use website layouts",
    ],
    tag: "Interactive experiences",
  },
  {
    number: "04",
    icon: "⚙️",
    title: "Full-Stack Web Applications",
    description:
      "I develop complete web applications by connecting the frontend, backend, and database.",
    benefits: [
      "Frontend and backend integration",
      "Dynamic features and data handling",
      "A solution tailored to your needs",
    ],
    tag: "Complete web solutions",
  },
];

function Services() {
  return (
    <section className="services" id="services">
      <div className="services__container">
        <header className="services__hero">
          <span className="services__eyebrow">
            WHAT I CAN DO FOR YOU
          </span>

          <h1>
            Services that help your{" "}
            <span>business grow.</span>
          </h1>

          <p>
            I create modern, responsive, and user-friendly
            web solutions to help bring your ideas to life.
          </p>
        </header>

        <div className="services__grid">
          {services.map((service) => (
            <article
              className="services__card"
              key={service.number}
            >
              <div className="services__card-top">
                <span className="services__icon">
                  {service.icon}
                </span>
                <span className="services__number">
                  {service.number}
                </span>
              </div>

              <h2>{service.title}</h2>
              <p className="services__description">
                {service.description}
              </p>

              <div className="services__benefits">
                <h3>What you gain</h3>

                <ul>
                  {service.benefits.map((benefit) => (
                    <li key={benefit}>
                      <span aria-hidden="true">✓</span>
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="services__tag">
                {service.tag}
              </div>
            </article>
          ))}
        </div>

        <div className="services__cta">
          <div>
            <span className="services__eyebrow">
              LET'S WORK TOGETHER
            </span>
            <h2>Have a project in mind?</h2>
            <p>
              Let’s discuss your idea and turn it into
              something useful.
            </p>
          </div>

          <a className="services__button" href="/#contact">
            Contact Me <span aria-hidden="true">↗</span>
          </a>
        </div>
      </div>
    </section>
  );
}

export default Services;
