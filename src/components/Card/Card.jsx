import React from "react";
import "./Card.css";
const Card = ({ title, content, image }) => {
  return (
    <div className="card">
      {image && <img src={image} alt={title} className="card-image" />}
      <div className="card-content">
        <h2 className="card-title">{title}</h2>
        <p className="card-description">{content}</p>
      </div>
    </div>
  );
};

export default Card;
