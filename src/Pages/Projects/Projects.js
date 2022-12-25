import React from "react";
import { projects } from "../../Data/Data";
import "./Projects.css";


const Projects = () => {


 const data = projects.map((element, index)=>{
  
    try {
      const img = require(`../../Assets/MyProjects/${element.image}`);

      const data = {
        image:img,
        title:element.title,
        details:element.details,
        source:element.source,
        live:element.live
      }
      return data;
    } catch (error) {
      
      const data ={
        title:element.title,
        details:element.details,
        source:element.source,
        live:element.live,
      }
      return data
    }
  })












  return (
    <article className="container projectContainer">
      <h1 className="heading">
        <span>My</span>Projects
      </h1>

      <div className="projectWrapper">
        {data.slice(0, 6).map((element, index) => (
          <article className="projectCard" key={index}>
            <div className="projectDetails">
              <h1>{element.title}</h1>

              <p className="information">
                {element.details.length > 180
                  ? element.details.slice(0, 181)+'...'
                  : element.details}
              </p>

              <div className="projectButtonBox">
                <a
                  href={element.source ? element.source : "#"}
                  className="button projectButton"
                  target={element.source ? "_blank" : "_self"}
                  rel="noreferrer"
                >
                  Source
                </a>
                <a
                  href={element.live ? element.live : "#"}
                  className="button projectButton"
                  target={element.live ? "_blank" : "_self"}
                  rel="noreferrer"
                >
                  Live
                </a>
              </div>
            </div>
            <div className="productImage">
            {
              element.image ?
              <img
              src={element.image}
                alt={element.title}
                />
                :
              <div className="imageError">
                <i className="fa-light fa-triangle-exclamation"/>
                <h1>Your file extension is incorrect. Please include your valid file extension in the data.js file.</h1>
              </div>
            }
            </div>
          </article>
        ))}
      </div>
    </article>
  );
};

export default Projects;
