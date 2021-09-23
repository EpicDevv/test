import React from "react";
import './MoreAboutMe.css';



const MoreAboutMe = ({ infoName, description, infoImg }) => {
  return (
    <div className="about-card">
      <div className="image-container">
        <img src={infoImg} alt="project" className="imagex" />
      </div>

      <div className="about-details-container">
        <h2 className="about-heading">{infoName}</h2>
        <p className="about-details">{description}</p>
      </div>
    </div>
  );
};

export default MoreAboutMe;
