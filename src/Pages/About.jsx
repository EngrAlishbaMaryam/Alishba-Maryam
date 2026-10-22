
import "./About.css";

function About() {
  return (
    <section className="about" id="about">
      <div className="about__content">
        <p className="about__eyebrow">
          About <span>Me</span>
        </p>

        <h2 className="about__title">
          Turning Ideas Into
          <br />
          Beautiful Websites
          <span className="about__title-arrow">›</span>
        </h2>

        <p className="about__description">
          I'm Alishba Maryam, a Full Stack Web Developer
          and Computer Engineer. I enjoy building
          responsive, accessible and visually appealing
          web experiences. I love solving problems and
          bringing creative ideas to life through code.
        </p>

        <div className="about__features">
          <article className="about__feature">
            <span className="about__feature-icon" aria-hidden="true">
              {"</>"}
            </span>
            <div>
              <h3>Clean Code</h3>
              <p>Readable & Maintainable</p>
            </div>
          </article>

          <article className="about__feature">
            <span className="about__feature-icon" aria-hidden="true">
              ▣
            </span>
            <div>
              <h3>Responsive Design</h3>
              <p>Works on All Devices</p>
            </div>
          </article>

          <article className="about__feature">
            <span className="about__feature-icon" aria-hidden="true">
              ✣
            </span>
            <div>
              <h3>Creative Mind</h3>
              <p>Ideas to Real Projects</p>
            </div>
          </article>
        </div>

        <a
          className="about__cv-button"
          href="/Alishba-Maryam-CV.pdf"
          download
        >
          Download CV <span aria-hidden="true">↓</span>
        </a>
      </div>

      <div className="about__visual" aria-label="Code editor illustration">
        <div className="about__editor">
          <div className="about__editor-top">
            <span className="about__window-dot about__window-dot--red" />
            <span className="about__window-dot about__window-dot--yellow" />
            <span className="about__window-dot about__window-dot--green" />
          </div>

          <pre className="about__code">
            <code>
              <span className="about__code-blue">const</span>
              {" developer = {\n"}
              {"  name: "}
              <span className="about__code-green">"Alishba Maryam"</span>
              {",\n"}
              {"  role: "}
              <span className="about__code-green">
                "Full Stack Developer"
              </span>
              {",\n"}
              {"  field: "}
              <span className="about__code-green">
                "Computer Engineering"
              </span>
              {",\n"}
              {"  passion: "}
              <span className="about__code-green">
                "Building Web Experiences"
              </span>
              {"\n};"}
            </code>
          </pre>
        </div>

        <div className="about__handwritten">
          Keep
          <br />
          Coding <span>♥</span>
          <small>···</small>
        </div>
      </div>
    </section>
  );
}

export default About;
