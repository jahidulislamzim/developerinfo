import React from "react";
import { header } from "../../Data/Data";
import "./Header.css";

const Header = () => {
  const { title, titleLink } = header;

  return (
    <header className="header">
      <nav className="navbar">
        <div className="logoBox">
          <a 
          href={titleLink ? titleLink : "#"}
          target={titleLink?'_blank':'_self'}
          rel="noopener noreferrer"
          >
            {title}
            </a>
        </div>
        <div className="navLinkBox">
          <a href="#home" className="links">
            home
          </a>
          <a href="#h" className="links">
            about
          </a>
          <a href="#h" className="links">
            skills
          </a>
          <a href="#h" className="links">
            projects
          </a>
          <a href="#h" className="links">
            contact
          </a>
        </div>
      </nav>
    </header>
  );
};

export default Header;

//   rel="noopener noreferrer"
