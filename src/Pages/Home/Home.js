import React from "react";
import Typewriter from "typewriter-effect";
import { myInfo } from "../../Data/Data";
import "./Home.css";

const Home = () => {
  const { name, image, titles, bio, resume } = myInfo;
  const pic = require(`../../Assets/MyPicture/${image}`);
  const cv = require(`../../Assets/MyResume/${resume}`);

  return (
    <article className="container homeContainer" id="home">
      <div className="imageBackBox">
        <div className="imageBox">
          <img src={pic} alt="me" />
        </div>
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
              strings:titles,
              autoStart: true,
              loop: true,
              delay: 75,
            }}
            />
  

        </h1>
        <p className="bio">
          {bio}   
        </p>

        <div>
          <div className="buttonBox">
            <a className="button" href={cv} >
              Download Resume
              <i className="fa-light fa-arrow-down" />
            </a>
          </div>

          <div className="socialIconWrapper">

            <a href="#" className="socialIconBox facebook">
              <div className="icon">
                <i className="fab fa-facebook-f" />
              </div>
              <span>Facebook</span>
            </a>


            <a href="#" className="socialIconBox github">
              <div className="icon">
                <i className="fa-light fa-arrow-down" />
              </div>
              <span>Facebook</span>
            </a>

            
            <a href="#" className="socialIconBox github">
              <div className="icon">
                <i className="fa-light fa-arrow-down" />
              </div>
              <span>Facebook</span>
            </a>


          </div>
        </div>
      </div>
    </article>
  );
};

export default Home;
