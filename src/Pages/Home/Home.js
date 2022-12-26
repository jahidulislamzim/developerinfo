import React from "react";
import Typewriter from "typewriter-effect";
import SocialLinks from "../../Component/SocialLinks/SocialLinks";
import { myInfo } from "../../Data/Data";
import "./Home.css";

const Home = () => {
  const { name, image, titles, bio, resume} = myInfo;

  function cvData() {
    try {
      const cv = require(`../../Assets/MyResume/${resume}`);
      const data = { cv: cv };
      return data;
    } catch (error) {
      const data = { cvError: "ami cv" };
      return data;
    }
  }

  function picData() {
    try {
      const pic = require(`../../Assets/MyPicture/${image}`);
      const data = { pic: pic };
      return data;
    } catch (error) {
      return 0;
    }
  }

  // console.log( socialLinks)


  return (
    <article className="container homeContainer" id="home">
      <div className="imageBackBox">
        {picData().pic ? (
          <div className="imageBox">
            <img src={picData().pic} alt="me" />
          </div>
        ) : (
          <div className="imageError">
            <i className="fa-light fa-triangle-exclamation" />
            <h1>
              Your file extension is incorrect. Please include your valid file
              extension in the data.js file.
            </h1>
          </div>
        )}
      </div>

      <div className="homeInfo">
        <h1 className="greeting">Hi There!</h1>
        <h1 className="name">
          <span className="im">I'm</span>
          {name}
        </h1>
        <h1 className="title">
          <span className="im">I'm</span>

          <Typewriter
            options={{
              strings: titles ? titles : 'Add Your Title In data.js File',
              autoStart: true,
              loop: true,
              delay: 75,
            }}
          />
        </h1>
        <p className="bio">{bio.length <= 590 ? bio  : bio.slice(0, 591)+'...'}</p>

        <div>
          <div className="buttonBox">
            <a className="button" href={cvData()?.cv ? cvData()?.cv : '#'}>
              Download Resume
              <i className="fa-light fa-arrow-down" />
            </a>

            {
              cvData().cv?"": 
              <small>
                Your resume file extension is incorrect. Please include your valid resume file extension in the data.js file.
              </small>
            }
            
          </div>

          

          <div className="socialIconWrapper">
          <SocialLinks count={3}/>
          </div>
        </div>
      </div>
    </article>
  );
};

export default Home;
