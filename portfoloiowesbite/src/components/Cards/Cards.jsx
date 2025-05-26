import React from "react";

const Cards = ({ icon, title, description }) => {
  return (
    <div className="cards">
      <div className="cards-top">
        <span>{icon}</span>

        <h1>{title}</h1>
      </div>

      <div className="cards-description">
        <p>{description}</p>
      </div>
    </div>
  );
};

export default Cards;
