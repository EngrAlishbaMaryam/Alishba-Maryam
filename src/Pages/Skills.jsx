
import "./Skills.css";

const skillGroups = [
  {
    title: "Frontend Development",
    subtitle: "Beautiful user experiences",
    number: "01",
    skills: ["HTML", "CSS", "JavaScript", "React"],
  },
  {
    title: "Backend & Database",
    subtitle: "Logic, APIs & data",
    number: "02",
    skills: ["Node.js", "Express", "MongoDB"],
  },
  {
    title: "Tools & Workflow",
    subtitle: "Build smarter, work better",
    number: "03",
    skills: ["Git", "GitHub", "VS Code"],
  },
];

const orbitSkills = [
  { name: "HTML", symbol: "5" },
  { name: "CSS", symbol: "3" },
  { name: "JS", symbol: "JS" },
  { name: "React", symbol: "⚛" },
  { name: "Node", symbol: "N" },
  { name: "Git", symbol: "G" },
];

function Skills() {
  return (
    <section className="skills" id="skills">
      <div className="skills__container">
        <header className="skills__header">
          <p className="skills__eyebrow">
            <span className="skills__eyebrow-line" />
            WHAT I WORK WITH
          </p>

          <h2 className="skills__title">
            My Creative <span>Toolkit</span>
          </h2>

          <p className="skills__intro">
            The technologies and tools I use to turn ideas
            into responsive, meaningful web experiences.
          </p>
        </header>

        <div className="skills__showcase">
          <div className="skills__orbit-area">
            <div className="skills__orbit-glow" />

            <div className="skills__orbit skills__orbit--outer">
              <span className="skills__orbit-dot skills__orbit-dot--one" />
              <span className="skills__orbit-dot skills__orbit-dot--two" />
            </div>

            <div className="skills__orbit skills__orbit--inner" />

            <div className="skills__core">
              <span className="skills__core-symbol">&lt;/&gt;</span>
              <strong>FULL STACK</strong>
              <span>Developer</span>
            </div>

            {orbitSkills.map((skill, index) => (
              <div
                className={`skills__orbit-item skills__orbit-item--${index + 1}`}
                key={skill.name}
                title={skill.name}
              >
                <span className="skills__orbit-symbol">
                  {skill.symbol}
                </span>
                <span className="skills__orbit-label">
                  {skill.name}
                </span>
              </div>
            ))}

            <span className="skills__spark skills__spark--one">✦</span>
            <span className="skills__spark skills__spark--two">✧</span>
            <span className="skills__spark skills__spark--three">✦</span>
          </div>

          <div className="skills__side-note">
            <span className="skills__status-dot" />
            <div>
              <strong>Always learning</strong>
              <p>Growing with every project.</p>
            </div>
          </div>
        </div>

        <div className="skills__groups">
          {skillGroups.map((group) => (
            <article className="skills__card" key={group.number}>
              <div className="skills__card-top">
                <span className="skills__card-number">
                  {group.number}
                </span>
                <span className="skills__card-arrow" aria-hidden="true">
                  ↗
                </span>
              </div>

              <h3 className="skills__card-title">{group.title}</h3>
              <p className="skills__card-subtitle">{group.subtitle}</p>

              <div className="skills__tags">
                {group.skills.map((skill) => (
                  <span className="skills__tag" key={skill}>
                    <span className="skills__tag-dot" />
                    {skill}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>

        <p className="skills__footer-note">
          <span>✳</span> Curiosity fuels my code.
        </p>
      </div>
    </section>
  );
}

export default Skills;
