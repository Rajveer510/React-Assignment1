import React from "react";
import logo from "../../assets/images/one.jpg";

const Card = ({ title, content, image }) => {
  return (<div className="card">
    {imageUrl && <img src={imageUrl} alt={title} className="card-image" />}
    <div className="card-content">
        <h2 className="card-title">{title}</h2>
        <p className="card-description">{description}</p>
      </div>
    </div>
  );
};


export default Card;
