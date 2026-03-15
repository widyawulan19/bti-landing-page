import React, { useEffect, useState } from "react";
import "../styles/Navbar.css";
// import logo from "../assets/logo.png";
import logo2 from '../assets/logoBTI2.png';
import { useLocation, useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate()
  const location = useLocation()

  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  // ✅ smooth scroll function
  const scrollToSection = (id) => {
    const el = document.getElementById(id);

    if (el) {
      el.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }

    setMenuOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

    // pindah page
  const goToPage = (path) => {
    navigate(path);
    setMenuOpen(false);
  };

  return (
    <div className={`navbar-container ${scrolled ? "scrolled" : ""}`}>
      <div className="navbar-box">

        {/* LOGO */}
        <div className="logo">
          <button onClick={() => scrollToSection("home")}>
            <img src={logo2} alt="logo btn" />
          </button>
        </div>

        {/* MENU */}
        <div className={`nav-links ${menuOpen ? "active" : ""}`}>

          {/* <button onClick={() => scrollToSection("home")}>
            Home
          </button> */}

          <button onClick={() => scrollToSection("services")}>
            Services
          </button>

          <button onClick={() => scrollToSection("about")}>
            About
          </button>

          <button onClick={() => scrollToSection("scope")}>
            Scope
          </button>

          <button onClick={() => scrollToSection("project")}>
            Project
          </button>

          <button onClick={() => scrollToSection("clients")}>
            Clients
          </button>

          <button onClick={() => scrollToSection("contact")}>
            Contact
          </button>

          <button onClick={() => goToPage("/product")}>
            Product
          </button>

        </div>

        {/* BUTTON */}
        <div className="nav-btn">
          <button onClick={() => scrollToSection("contact")}>
            Get in Touch
          </button>
        </div>

        {/* HAMBURGER */}
        <div
          className={`hamburger ${menuOpen ? "open" : ""}`}
          onClick={toggleMenu}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>

      </div>
    </div>
  );
}

export default Navbar;