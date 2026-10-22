
import { useState } from "react";
import "./Navbar.css";
import ThemeToggle from "./ThemeToggle";

function Navbar({ theme, onToggleTheme }) {
  const [menuOpen, setMenuOpen] = useState(false);

  function closeMenu() {
    setMenuOpen(false);
  }

  function handleMenuToggle() {
    setMenuOpen((isOpen) => !isOpen);
  }

  return (
    <header className="navbar">
      <a href="#home" className="navbar__logo" onClick={closeMenu}>
        <svg
          className="navbar__mark"
          viewBox="0 0 100 70"
          role="img"
          aria-label="AM logo"
        >
          <path
            d="M8 60 L30 10 L52 60 M17 40 H43"
            className="logo__letter-a"
          />
          <path
            d="M43 36 V12 L63 36 L83 12 V60"
            className="logo__letter-m"
          />
        </svg>

        <span className="navbar__name">Alishba Maryam</span>
      </a>

      {menuOpen && (
        <button
          type="button"
          className="navbar__backdrop"
          aria-label="Close navigation menu"
          onClick={closeMenu}
        />
      )}

      <nav
        id="mobile-navigation"
        className={`navbar__links ${menuOpen ? "navbar__links--open" : ""}`}
        aria-label="Main navigation"
      >
        <a href="#home" className="navbar__link" onClick={closeMenu}>Home</a>
        <a href="#about" className="navbar__link" onClick={closeMenu}>About</a>
        <a href="#skills" className="navbar__link" onClick={closeMenu}>Skills</a>
        <a href="#projects" className="navbar__link" onClick={closeMenu}>Projects</a>
        <a href="#services" className="navbar__link" onClick={closeMenu}>Services</a>
        <a href="#contact" className="navbar__link" onClick={closeMenu}>Contact</a>
      </nav>

      <div className="navbar__actions">
        <ThemeToggle
          theme={theme}
          onToggle={onToggleTheme}
        />

        <button
          type="button"
          className="navbar__menu-button"
          onClick={handleMenuToggle}
          aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-controls="mobile-navigation"
          aria-expanded={menuOpen}
        >
          {menuOpen ? "✕" : "☰"}
        </button>
      </div>
    </header>
  );
}

export default Navbar;
