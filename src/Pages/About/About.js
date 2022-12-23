import React from 'react';
import { myInfo } from '../../Data/Data';
import './About.css'

const About = () => {
    const {name} = myInfo;
    return (
        <article className='container aboutContainer' id='about'>
            <h1 className='heading'><span>About</span>Me</h1>
           <div className='aboutWrapper'>
           <div className='aboutMe'>
                <p>Name:<span>{name}</span></p>
                <p>Position:<span>{name}</span></p>
                <p>Age:<span>{name}</span></p>
                <p>Qualification:<span>{name}</span></p>
                <p>languages:<span>{name}</span></p>
            </div>

            <div>
            <div className="aboutCards">

            <article className="aboutCard">
            <i className="fa-light fa-award aboutIcon"/>
              <h5>Experience</h5>
              <small>1 year</small>
            </article>

            <article className="aboutCard">
            <i className="fa-thin fa-file-chart-pie aboutIcon"/>
              <h5>Projects</h5>
              <small>20+ Completed Projects</small>
            </article>

            <article className="aboutCard">
            <i className="fa-thin fa-file-chart-pie aboutIcon"/>
              <h5>Projects</h5>
              <small>20+ Completed Projects</small>
            </article>

            <article className="aboutCard">
            <i className="fa-thin fa-file-chart-pie aboutIcon"/>
              <h5>Projects</h5>
              <small>20+ Completed Projects</small>
            </article>


          </div>
            </div>
           </div>
        </article>
    );
};

export default About;