
import { useState } from "react";
import Navbar from "./Components/Navbar";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Skills from "./Pages/Skills";
import Projects from "./Pages/Projects";
import Services from "./Pages/Services";
import Contact from "./Pages/Contact";
import "./App.css";

function App() {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme((currentTheme) =>
      currentTheme === "light" ? "dark" : "light"
    );
  };

  return (
    <div className={`app app--${theme}`}>
      <Navbar
        theme={theme}
        onToggleTheme={toggleTheme}
      />

      <main>
        <Home />
        <About />
        <Skills />
        <Projects />
        <Services />
        <Contact />
      </main>
    </div>
  );
}

export default App;
