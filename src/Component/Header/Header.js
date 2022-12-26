import React, { useContext, useState } from "react";
import { ThemeContext } from "../../Context/Theme";
import { header } from "../../Data/Data";
import "./Header.css";

const Header = () => {
  const { title, titleLink } = header;
  const [click, setClick] = useState(true);

  const handleClick = () => setClick(!click);

  const [{ themeName, toggleTheme }] = useContext(ThemeContext);

  return (
    <header className="header">
      <nav className="navbar">
        <div className="logoBox">
          <a
            href={titleLink ? titleLink : "#"}
            target={titleLink ? "_blank" : "_self"}
            rel="noopener noreferrer"
          >
            {title}
          </a>
        </div>

        <div className="navLinkWrapper">
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

          <div className="darkLight">
            {themeName === "dark" ? (
              <span
              className="toggle"
                onClick={() => {
                  toggleTheme("light");
                }}
              >
                <i className="fa-light fa-sun"></i>
              </span>
            ) : (
              <span
              className="toggle"
                onClick={() => {
                  toggleTheme("dark");
                }}
              >
                <i className="fa-light fa-moon"></i>
              </span>
            )}
          </div>

          <div
            className={click ? "menu-btn" : "menu-btn open"}
            onClick={handleClick}
          >
            <div className="menu-btn__burger"></div>
          </div>
        </div>
      </nav>

      <div className="resNavBar">
        <div className="navBody">
          <nav className={click ? "navLinks" : "navLinks close"}>
            <a href="#home" className="links">home</a>
            <a href="#about" className="links">about</a>
            <a href="#h" className="links">skills</a>
            <a href="#h" className="links">projects</a>
            <a href="#h" className="links">contact</a>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;

//   rel="noopener noreferrer"
