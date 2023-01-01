import React, { useState } from "react";
import { GoChevronUp, GoCode } from "react-icons/go";
import "./Navbar.css";

function Navbar() {
  const [activeNav, setActiveNav] = useState("#");

  return (
    <nav className="navbar" id="home">
      <div className="logo">
      <GoCode className='icon-logo'/>
        <h2>Diazcdeveloper</h2>
      </div>
      <ul className="links">
        <li>
          <a
            href="#aboutme"
            onClick={() => setActiveNav("#aboutme")}
            className={activeNav === "#aboutme" ? "active" : ""}
          >
            ABOUT ME
          </a>
        </li>
        <li>
          <a
            href="#projects"
            onClick={() => setActiveNav("#projects")}
            className={activeNav === "#projects" ? "active" : ""}
          >
            PROJECTS
          </a>
        </li>
        <li>
          <a
            href="#contact"
            onClick={() => setActiveNav("#contact")}
            className={activeNav === "#contact" ? "active" : ""}
          >
            CONTACT
          </a>
        </li>
      </ul>
      <a
        href="#home"
        onClick={() => setActiveNav("#home")}
        className={activeNav === "#home" ? "active scroll-up" : "scroll-up"}
      ><GoChevronUp className="icon-scroll-up"/></a>
    </nav>
  );
}

export default Navbar;
