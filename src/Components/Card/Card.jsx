import React from "react";

const Card = ({ image, title, description }) => {
  return (
    <div className="Card">
      <img className="coding-image" src={image} alt="img" />
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
};

export default Card;
