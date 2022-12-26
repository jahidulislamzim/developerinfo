import React, { useState } from "react";
import swal from "sweetalert";
import SocialLinks from "../../Component/SocialLinks/SocialLinks";
import "./Contact.css";

const Contact = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [project, setProject] = useState("");
  const [message, setMessage] = useState(``);
  const [errorMessage, setErrorMessage] = useState("");
  const [emailValidation, setEmailValidation] = useState("");
  const convertMessage = message.replace(/(\r\n|\n|\r)/gm, "");

  const getMessage = `Message From Portfolio:%0A %0A ${project} %0A %0A ${convertMessage} %0A %0A <b>Your Regards</b> %0A ${name} %0A ${email} `;

  const token = "2128920656:AAHTV931aUGuowcd9GFYb1I47mt_WisNAvI";
  const chat_id = 1716383497;
  const url = `https://api.telegram.org/bot${token}/sendMessage?chat_id=${chat_id}&text=${getMessage}&parse_mode=html`;

  const fromHandaller = (e) => {
    e.preventDefault();
    if (!errorMessage) {
      e.target.reset();
    }
  };

  const emailHandaller = (e) => {
    const mailformat = /^[^]+@[^ ]+\.[a-z]{2,63}$/;
    if (e.target.value.match(mailformat)) {
      setEmail(e.target.value);
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
  const projectHandaller = (e) => {
    setProject(e.target.value);
  };

  const userMessageHandaller = (e) => {
    setMessage(e.target.value);
  };

  const sendMessageHandaller = (e) => {
    if (email === "") {
      setErrorMessage(
        <p className="error-message">
          You Can't Sent Message With An Empty Input{" "}
          <i class="fa-light fa-triangle-exclamation"></i>
        </p>
      );
    } else if (name === "") {
      setErrorMessage(
        <p className="error-message">
          You Can't Sent Message With An Empty Input{" "}
          <i class="fa-light fa-triangle-exclamation"></i>
        </p>
      );
    } else if (project === "") {
      setErrorMessage(
        <p className="error-message">
          You Can't Sent Message With An Empty Input{" "}
          <i class="fa-light fa-triangle-exclamation"></i>
        </p>
      );
    } else if (message === ``) {
      setErrorMessage(
        <p className="error-message">
          You Can't Sent Message With An Empty Input{" "}
          <i class="fa-light fa-triangle-exclamation"></i>
        </p>
      );
    } else {
      let api = new XMLHttpRequest();
      api.open("GET", url, true);
      api.send();
      setErrorMessage("");
      setMessage(``);
      setProject("");
      setName("");
      setEmail("");
      swal({
        title: "Message Send!",
        text: "Thank you for send message!",
        icon: "success",
      });
    }
  };

  return (
    <article className="container contactContainer">
      <h1 className="heading">
        <span>contact</span> me
      </h1>

      <div className="contactWrapper">
        <article className="contactBox">


          <div >
            <h3 className="title">
              <span>contact</span> info
            </h3>

            <div className="info">
              <h3>

                <i className="fal fa-envelope-open-text contact-icon"></i>
                jahidulislamzim845@gmail.com
              </h3>
              <h3>

                <i className="fal fa-mobile contact-icon"></i> +8801780115943
              </h3>
              <h3>

                <i className="fal fa-map-marker-smile contact-icon"></i> Kurigram,
                Rangpur, Bangladesh.
              </h3>
            </div>
          </div>

          <div>
            <SocialLinks/>
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
            <p>{emailValidation}</p>
            <input
              onBlur={projectHandaller}
              type="text"
              placeholder="project"
              className="box"
            />
            <textarea
              onBlur={userMessageHandaller}
              name=""
              id=""
              className="box message"
              placeholder="message"
            ></textarea>
            <p>{errorMessage}</p>
            <button
              onClick={sendMessageHandaller}
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
