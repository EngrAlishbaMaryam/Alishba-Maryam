
import "./Projects.css";

const projects = [
  {
    number: "01",
    name: "Weather App",
    category: "Weather & Forecast",
    description:
      "A weather application designed to present weather conditions and forecast information in a clear, user-friendly interface.",
    technologies: ["React", "JavaScript", "CSS"],
    preview: "weather",
    featured: true,
  },
  {
    number: "02",
    name: "Medicare App",
    category: "Healthcare Application",
    description:
      "A healthcare-focused application concept with a clean interface for presenting medical services and essential information.",
    technologies: ["React", "Node.js", "Express"],
    preview: "medicare",
  },
  {
    number: "03",
    name: "Smart Garbage Management",
    category: "Smart Management System",
    description:
      "A web-based waste management project focused on presenting waste collection and management information in an organized way.",
    technologies: ["React", "Node.js", "MongoDB"],
    preview: "garbage",
  },
  {
    number: "04",
    name: "Food Website",
    category: "Food & Restaurant",
    description:
      "A food website designed to showcase food items and create an engaging, easy-to-navigate browsing experience.",
    technologies: ["React", "CSS", "JavaScript"],
    preview: "food",
  },
];

function WeatherPreview() {
  return (
    <div className="project-art project-art--weather" aria-hidden="true">
      <div className="weather-panel">
        <div className="weather-topbar">
          <span className="weather-brand">
            <i /> weatherly
          </span>
          <span className="weather-search">⌕ &nbsp; Search city</span>
          <span className="weather-menu">•••</span>
        </div>

        <div className="weather-content">
          <div className="weather-location">
            <span>◉ &nbsp; YOUR LOCATION</span>
            <strong>Good day!</strong>
            <small>Today's weather overview</small>
          </div>

          <div className="weather-current">
            <div>
              <span className="weather-sun">☀</span>
              <strong>28°</strong>
            </div>
            <div className="weather-current__details">
              <b>Sunny</b>
              <span>Feels like 30°</span>
              <span>H: 31° &nbsp; L: 22°</span>
            </div>
          </div>

          <div className="weather-stats">
            <div><span>Humidity</span><b>54%</b></div>
            <div><span>Wind</span><b>12 km/h</b></div>
            <div><span>UV Index</span><b>Moderate</b></div>
          </div>

          <div className="weather-forecast">
            <span>FORECAST</span>
            <div>
              <span>Mon <i>☀</i><b>28°</b></span>
              <span>Tue <i>☁</i><b>26°</b></span>
              <span>Wed <i>☀</i><b>30°</b></span>
              <span>Thu <i>🌧</i><b>24°</b></span>
            </div>
          </div>
        </div>
      </div>
      <span className="project-art__orb project-art__orb--one" />
      <span className="project-art__orb project-art__orb--two" />
    </div>
  );
}

function MedicarePreview() {
  return (
    <div className="project-art project-art--medicare" aria-hidden="true">
      <div className="medical-panel">
        <div className="medical-topbar">
          <span className="medical-logo"><i>✚</i> medicare</span>
          <span className="medical-avatar">AM</span>
        </div>

        <div className="medical-welcome">
          <span>YOUR HEALTH, OUR PRIORITY</span>
          <h3>Care that puts<br />you first.</h3>
          <p>A healthier you starts here.</p>
          <span className="medical-cta">Explore services ↗</span>
        </div>

        <div className="medical-services">
          <div>
            <span className="medical-service-icon">✚</span>
            <b>General Care</b>
            <small>Health support</small>
          </div>
          <div>
            <span className="medical-service-icon medical-service-icon--blue">♡</span>
            <b>Wellness</b>
            <small>Care for you</small>
          </div>
          <div>
            <span className="medical-service-icon medical-service-icon--mint">✳</span>
            <b>Appointments</b>
            <small>Stay connected</small>
          </div>
        </div>

        <div className="medical-bottom">
          <span><i /> YOUR WELLBEING MATTERS</span>
          <span>Medicare</span>
        </div>
      </div>
      <span className="medical-plus medical-plus--one">+</span>
      <span className="medical-plus medical-plus--two">+</span>
    </div>
  );
}

function GarbagePreview() {
  return (
    <div className="project-art project-art--garbage" aria-hidden="true">
      <div className="garbage-panel">
        <div className="garbage-topbar">
          <span className="garbage-brand"><i>♻</i> EcoTrack</span>
          <span className="garbage-admin">ADMIN <b>AM</b></span>
        </div>

        <div className="garbage-heading">
          <span>MANAGEMENT OVERVIEW</span>
          <h3>Smart waste control.</h3>
          <p>Monitor your waste management system.</p>
        </div>

        <div className="garbage-stats">
          <div><span>Total Bins</span><b>128</b><i>↗ 12%</i></div>
          <div><span>Collected</span><b>86</b><i>Today</i></div>
          <div><span>Needs Pickup</span><b>14</b><i className="garbage-alert">Action</i></div>
        </div>

        <div className="garbage-lower">
          <div className="garbage-chart">
            <div className="garbage-chart__title">Collection activity</div>
            <div className="garbage-bars">
              <i style={{ height: "42%" }} />
              <i style={{ height: "65%" }} />
              <i style={{ height: "50%" }} />
              <i style={{ height: "82%" }} />
              <i style={{ height: "60%" }} />
              <i style={{ height: "94%" }} />
              <i style={{ height: "73%" }} />
            </div>
            <div className="garbage-chart__days">
              <span>M</span><span>T</span><span>W</span><span>T</span>
              <span>F</span><span>S</span><span>S</span>
            </div>
          </div>
          <div className="garbage-status">
            <span>BIN STATUS</span>
            <div><i /> Collected <b>68%</b></div>
            <div><i /> In progress <b>22%</b></div>
            <div><i /> Pending <b>10%</b></div>
          </div>
        </div>
      </div>
      <span className="garbage-leaf garbage-leaf--one">♻</span>
      <span className="garbage-leaf garbage-leaf--two">✳</span>
    </div>
  );
}

function FoodPreview() {
  return (
    <div className="project-art project-art--food" aria-hidden="true">
      <div className="food-panel">
        <div className="food-topbar">
          <span className="food-brand">sav<span>our.</span></span>
          <span>Home&nbsp;&nbsp; Menu&nbsp;&nbsp; About</span>
          <span className="food-bag">Bag ♧</span>
        </div>

        <div className="food-hero">
          <div className="food-copy">
            <span className="food-eyebrow">FRESH FROM OUR KITCHEN</span>
            <h3>A little joy<br />in every <em>bite.</em></h3>
            <p>Discover delicious moments, made fresh for you.</p>
            <span className="food-button">Explore menu ↗</span>
          </div>
          <div className="food-plate">
            <div className="food-plate__outer">
              <div className="food-plate__inner">
                <span className="food-garnish food-garnish--one" />
                <span className="food-garnish food-garnish--two" />
                <span className="food-tomato food-tomato--one" />
                <span className="food-tomato food-tomato--two" />
                <span className="food-leaf food-leaf--one" />
                <span className="food-leaf food-leaf--two" />
                <span className="food-center">✦</span>
              </div>
            </div>
          </div>
        </div>

        <div className="food-bottom">
          <span>MADE WITH LOVE ♡</span>
          <span>Fresh ingredients. Happy moments.</span>
        </div>
      </div>
      <span className="food-spark food-spark--one">✦</span>
      <span className="food-spark food-spark--two">✧</span>
    </div>
  );
}

function ProjectArtwork({ type }) {
  switch (type) {
    case "weather":
      return <WeatherPreview />;
    case "medicare":
      return <MedicarePreview />;
    case "garbage":
      return <GarbagePreview />;
    case "food":
      return <FoodPreview />;
    default:
      return null;
  }
}

function Projects() {
  return (
    <section className="projects section" id="projects">
      <div className="projects__container">
        <header className="projects__header">
          <div className="projects__heading">
            <span className="projects__eyebrow">
              <span /> SELECTED WORK
            </span>
            <h2>
              Projects I&apos;ve <span>built.</span>
            </h2>
            <p>
              A collection of my web development projects, where I bring
              ideas to life through thoughtful design and development.
            </p>
          </div>

          <div className="projects__count" aria-label="Four projects">
            <strong>04</strong>
            <span>COMPLETED<br />PROJECTS</span>
          </div>
        </header>

        <div className="projects__grid">
          {projects.map((project) => (
            <article
              className={`project-card project-card--${project.preview}`}
              key={project.number}
            >
              <div className="project-card__visual">
                <ProjectArtwork type={project.preview} />
                <span className="project-card__number">
                  PROJECT {project.number}
                </span>
              </div>

              <div className="project-card__content">
                <div className="project-card__meta">
                  <span>{project.category}</span>
                  <span className="project-card__status">
                    Completed
                  </span>
                </div>

                <h3>{project.name}</h3>
                <p>{project.description}</p>

                <ul
                  className="project-card__technologies"
                  aria-label={`${project.name} technologies`}
                >
                  {project.technologies.map((technology) => (
                    <li key={technology}>{technology}</li>
                  ))}
                </ul>

                
              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Projects;
