import React from "react";
import "./Projects.css";

const Projects = () => {
  return (
    <article className="container">
      <h1 className="heading">
        <span>My</span>Projects
      </h1>
    
    <div className="projectWrapper">
        
      <article className="projectCard">
        <div className="projectDetails">
          <h1>CHRISTMAS TREE</h1>

          <p class="information">
          Let's spread the joy , here is Christmas , the most awaited day of the year. Christmas Tree is what one need the most. Here is the correct tree which will enhance your Christmas. most awaited day of the year. Christmas Tree is what one need the most.
          </p>

          <div className="projectButtonBox">
            <a href="#" className="button">Source</a>
            <a href="#" className="button">Live</a>
          </div>
        </div>
        <div className="productImage">
          <img
            src="https://images.unsplash.com/photo-1606830733744-0ad778449672?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mzl8fGNocmlzdG1hcyUyMHRyZWV8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
            alt=""
          />
        </div>
      </article>

      <article className="projectCard">
        <div className="projectDetails">
          <h1>CHRISTMAS TREE</h1>

          <p class="information">
          Let's spread the joy , here is Christmas , the most awaited day of the year. Christmas Tree is what one need the most. Here is the correct tree which will enhance your Christmas. most awaited day of the year. Christmas Tree is what one need the most.
          </p>

          <div className="projectButtonBox">
            <a href="#" className="button">Source</a>
            <a href="#" className="button">Live</a>
          </div>
        </div>
        <div className="productImage">
          <img
            src="https://images.unsplash.com/photo-1606830733744-0ad778449672?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mzl8fGNocmlzdG1hcyUyMHRyZWV8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
            alt=""
          />
        </div>
      </article>

    </div>


    </article>
  );
};

export default Projects;
