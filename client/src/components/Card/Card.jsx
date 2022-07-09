import "./Card.css";
import React from "react";

function Card({ title, img, name, experience }) {
  return (
    <div className="Card">
      <h2>{title}</h2>
      <img src={img} alt="avatar" />
      <h1>{name}</h1>
      <h3>{experience}</h3>
    </div>
  );
}

export default Card;
