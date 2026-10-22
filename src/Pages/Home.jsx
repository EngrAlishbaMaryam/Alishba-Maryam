
import "./Home.css";
import profileImage from "../assets/profile.png";

function Home() {
  return (
    <section className="hero" id="home">
      <div className="hero__content">
        <p className="hero__eyebrow">Hello, I'm</p>

        <h1 className="hero__title">
          Alishba Maryam
        </h1>

        <h2>Full Stack Web Developer</h2>
        <p className="home__subtitle">Computer Engineer</p>

        <p className="hero__description">
          I build clean, responsive and user-friendly
          websites with modern web technologies.
        </p>

        <div className="hero__buttons">
          <a href="#projects" className="hero__button hero__button--primary">
            View Projects <span>↗</span>
          </a>

          <a href="#contact" className="hero__button hero__button--secondary">
            Contact Me
          </a>
        </div>
      </div>

      <div className="hero__visual">
  <div className="hero__circle hero__circle--large"></div>
  <div className="hero__circle hero__circle--small"></div>
  <div className="hero__blob"></div>

  <img
    src={profileImage}
    alt="Alishba Maryam wearing a blue hijab"
    className="hero__image"
  />

  <div className="hero__note">
    <span className="hero__note-sparkles">✳ · ·</span>
    <p>Building<br />Digital<br />Dreams ♥</p>
    <span className="hero__note-arrow">↙</span>
  </div>

  <span className="hero__dot hero__dot--one"></span>
  <span className="hero__dot hero__dot--two"></span>
</div>
    </section>
  );
}

export default Home;
