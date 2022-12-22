import React from "react";
import { projects } from "../../Data/Data";
import "./Projects.css";

const Projects = () => {
  return (
    <article className="container">
      <h1 className="heading">
        <span>My</span>Projects
      </h1>

      <div className="projectWrapper">
        {projects.slice(0, 5).map((element, index) => (
          <article className="projectCard" key={index}>
            <div className="projectDetails">
              <h1>{element.title}</h1>

              <p class="information">{element.details}</p>

              <div className="projectButtonBox">
                <a
                  href={element.source ? element.source : "#"}
                  className="button"
                  target={element.source ? "_blank" : "_self"}
                  rel="noreferrer"
                >
                  Source
                </a>
                <a
                  href={element.live ? element.live : "#"}
                  className="button"
                  target={element.live ? "_blank" : "_self"}
                  rel="noreferrer"
                >
                  Live
                </a>
              </div>
            </div>
            <div className="productImage">
              <img
                src={require(`../../Assets/MyProjects/${element.image}`)}
                alt={element.title}
              />
            </div>
          </article>
        ))}
      </div>
    </article>
  );
};

export default Projects;

