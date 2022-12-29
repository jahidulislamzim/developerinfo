import React from "react";
import { myInfo } from "../../Data/Data";
import "./SocialLinks.css";

const SocialLinks = (props) => {
  const links = [];


  for (const property in myInfo.SocialLinks) {
    if (myInfo.SocialLinks[property] !== "") {
      links.push({
        name: property,
        url: myInfo.SocialLinks[property],
      });
    }
  }


  



  return (
    <div>
      {links.slice(0, props.count).map((element, index) => (

        <a
          href={ element.url}
          className={`socialIconBox ${element.name}`}
          rel="noopener noreferrer"
          key={index}
        >
          <div className="icon">
            {
              element.name.toLowerCase() === "facebook" ? 
              <i className="fab fa-facebook-f"/> :
              element.name.toLowerCase() === "instagram" ?
              <i className="fa-brands fa-instagram"/> :
              element.name.toLowerCase() === "github" ?
              <i className="fa-brands fa-github"/> :
              element.name.toLowerCase() === "linkedin" ?
              <i className="fa-brands fa-linkedin-in"/>:
              element.name.toLowerCase() === "twitter" ?
              <i className="fa-brands fa-twitter"/>:
              element.name.toLowerCase() === "behance" ?
              <i className="fa-brands fa-behance"/>:
              element.name.toLowerCase() === "dribbble" ?
              <i className="fa-brands fa-dribbble"/>:''
            }
          </div>
          <span>
          {
              element.name.toLowerCase() === "facebook" ? 
              'Facebook' :
              element.name.toLowerCase() === "instagram" ?
              'Instagram':
              element.name.toLowerCase() === "github" ?
              'GitHub' :
              element.name.toLowerCase() === "linkedin" ?
              'Linked In':
              element.name.toLowerCase() === "twitter" ?
              'Twitter':
              element.name.toLowerCase() === "behance" ?
              'Behance' :
              element.name.toLowerCase() === "dribbble" ?
              'Dribbble' :''
            }
          </span>
        </a>
      ))}
    </div>
  );
};

export default SocialLinks;

