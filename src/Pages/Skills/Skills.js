import React from "react";
import { skills } from "../../Data/Data";
import "./Skills.css";

const Skills = () => {

    const level = {
        junior:'I am a junior now learning in elementary level, I wish to improve further and move to my level.',
        midLevel:'I have learned roughly and now I am at mid level, if I keep this consistency I will learn better and become an expert.',
        expart:'I am at an expert level but I think it is not enough for me I want to learn more and go to a better level.',
    }




  return (
    <article className="container skillsContainer">
      <h1 className="heading">
        <span>My</span>Skills
      </h1>

      <div className="skillWrapper">
        {skills.map((element, index) => (
          <div className="skill" key={index}>
            <div className="tooltip">
                {
                    element.level.toLowerCase() === "expart"
                    ? level.expart
                    : element.level.toLowerCase() ===  "mid level"
                    ? level.midLevel
                    : element.level.toLowerCase() === "junior"
                    ? level.junior
                    : ""
                }
            </div>
            <h3>{element.title}</h3>
            <h5>
              {element.level}
            </h5>
          </div>
        ))}

      </div>
    </article>
  );
};

export default Skills;
