import React, { useState } from "react";
import swal from "sweetalert";
import SocialLinks from "../../Component/SocialLinks/SocialLinks";
import { contact } from "../../Data/Data";
import emailjs from "@emailjs/browser";
import "./Contact.css";

const Contact = () => {
  const { phone, email, location, serviceId, templateId, publicKey} = contact;
  const [userEmail, setUserEmail] = useState("");
  const [name, setName] = useState("");
  const [message, setMessage] = useState(``);
  const [errorMessage, setErrorMessage] = useState("");
  const [emailValidation, setEmailValidation] = useState("");


  

  const emailHandaller = (e) => {
    const mailformat = /^[^]+@[^ ]+\.[a-z]{2,63}$/;
    if (e.target.value.match(mailformat)) {
      setUserEmail(e.target.value);
      setEmailValidation("");
    } else {
      setEmailValidation(
        <p className="error-message">
          {" "}
          Input Correct Email Formate{" "}
          <i class="fa-light fa-triangle-exclamation"></i>
        </p>
      );
    }
  };

  const nameHandaller = (e) => {
    setName(e.target.value);
  };

  const userMessageHandaller = (e) => {
    setMessage(e.target.value);
  };



  const fromHandaller = (e) => {
    e.preventDefault();
    
   if (email === "") {
    setErrorMessage(
      <p className="error-message">
        You Can't Sent Message With An Empty Input{" "}
        <i className="fa-light fa-triangle-exclamation"></i>
      </p>
    );
  } else if (name === "") {
    setErrorMessage(
      <p className="error-message">
        You Can't Sent Message With An Empty Input{" "}
        <i className="fa-light fa-triangle-exclamation"></i>
      </p>
    );
  } else if (message === ``) {
    setErrorMessage(
      <p className="error-message">
        You Can't Sent Message With An Empty Input{" "}
        <i className="fa-light fa-triangle-exclamation"></i>
      </p>
    );
  } else {
    setErrorMessage();
    const data = {
      name: name,
      email: userEmail,
      message: message,
    };

    emailjs
      .send(serviceId, templateId, data, publicKey)
      .then(
        (result) => {
          if (result) {
            swal({
              title: "Message Send!",
              text: "Thank you for send message!",
              icon: "success",
            });
          }
          
          setErrorMessage("");
          setMessage(``);
          setName("");
          setUserEmail("");
          e.target.reset();
            
        },
        (error) => {
          if (error) {
            swal({
              title: "Message Don't Send!",
              text: "Message don't send for server issue. Please try again!",
              icon: "error",
            });
          }

        }
        
      );

     
  }




  };

  return (
    <article className="container contactContainer">
      <h1 className="heading">
        <span>contact</span> me
      </h1>

      <div className="contactWrapper">
        <article className="contactBox">
          <div>
            <h3 className="title">
              <span>contact</span> info
            </h3>

            <div className="info">
              <h3>
                <i className="fal fa-envelope-open-text contact-icon"></i>
                {email}
              </h3>
              <h3>
                <i className="fal fa-mobile contact-icon"></i> {phone}
              </h3>
              <h3>
                <i className="fal fa-map-marker-smile contact-icon"></i>
                {location}
              </h3>
            </div>
          </div>

          <div>
            <SocialLinks />
          </div>
        </article>

        <div data-aos="fade-left" data-aos-duration="2000">
          <form onSubmit={fromHandaller}>
            <input
              onBlur={nameHandaller}
              type="text"
              placeholder="name"
              className="box"
            />
            <input
              onBlur={emailHandaller}
              type="email"
              placeholder="email"
              className="box"
            />
            <span>{emailValidation}</span>
            <textarea
              onBlur={userMessageHandaller}
              name=""
              id=""
              className="box message"
              placeholder="message"
            ></textarea>
            <span>{errorMessage}</span>
            <button
              type="submit"
              className="button"
            >
              {" "}
              send <i className="fal fa-paper-plane contact-send-icon"></i>{" "}
            </button>
          </form>
        </div>
      </div>
    </article>
  );
};

export default Contact;
