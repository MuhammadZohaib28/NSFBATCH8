import React from "react";
import "./Cards.css";

const ProjectCard = ({ image, title, skills, description, link }) => {
  return (
    <div className="projectCard">
      <div className="projectCard-image-container">
        <img src={image} className="card-image" />
      </div>
      
      <h1>{title}</h1>

      <div className="projectCard-skills">
        {skills.map((i, index) => (
          <li key={index}>{i}</li>
        ))}
      </div>

      <p>{description}</p>

      <a href={link} target="_blank" className="projectCard-link">
        <button>Project Link</button>
      </a>
    </div>
  );
};

export default ProjectCard;
