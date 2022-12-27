import React from 'react';
import { myInfo } from '../../Data/Data';
import './About.css'

const About = () => {
    const {name, age, position, qualification, languages, experience, completedProject, happyClients, awardsWon} = myInfo;
    return (
        <article className='container aboutContainer' id='about'>
            <h1 className='heading'><span>About</span>Me</h1>
           <div className='aboutWrapper'>
           <div className='aboutMe'>
                <p>Name:<span>{name}</span></p>
                <p>Position:<span>{position}</span></p>
                <p>Age:<span>{age}</span></p>
                <p>Qualification:<span>{qualification}</span></p>
                <p>languages:<span>{languages}</span></p>
            </div>

            <div>
            <div className="aboutCards">

            <article className="aboutCard">
            <i className="fa-thin fa-award aboutIcon" />
              <h5>Experience</h5>
              <small>{experience}</small>
            </article>

            <article className="aboutCard">
            <i className="fa-thin fa-file-chart-pie aboutIcon"/>
              <h5>Project</h5>
              <small><span>{completedProject}</span> Completed Projects</small>
            </article>

            <article className="aboutCard">
            <i className="fa-thin fa-handshake aboutIcon"/>
              <h5>Client</h5>
              <small><span>{happyClients}</span> Happy Clients</small>
            </article>

            <article className="aboutCard">
            <i className="fa-thin fa-trophy-star aboutIcon"/>
              <h5>Award</h5>
              <small><span>{awardsWon}</span> Awards Won</small>
            </article>


          </div>
            </div>
           </div>
        </article>
    );
};

export default About;