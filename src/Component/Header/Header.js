import React, { useState } from "react";
import { header } from "../../Data/Data";
import "./Header.css";

const Header = () => {
  const { title, titleLink } = header;
  const [click, setClick] = useState(true);

  const handleClick = () => setClick(!click);


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
          <a href="#about" className="links">
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


        <div
            className={click ? "menu-btn" : "menu-btn open"}
            onClick={handleClick}
          >
            <div className="menu-btn__burger"></div>
          </div>
      </nav>

      
      <div className="res-nav-bar">
          
          <div className="nav-body">
            <nav className={click ? "nav-link" : "nav-link close"}>
            <a href="#home" >
            home
          </a>
          <a href="#about">
            about
          </a>
          <a href="#h">
            skills
          </a>
          <a href="#h">
            projects
          </a>
          <a href="#h">
            contact
          </a>
            </nav>
          </div>
        </div>
        
    </header>
  );
};

export default Header;

//   rel="noopener noreferrer"
