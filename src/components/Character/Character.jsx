import React, { useState } from "react";
import "./Character.css";

function Character({ name, image, species }) {
  const [rotated, setRotated] = useState(false);

  const handleClick = () => setRotated(prev => !prev);

  return (
    <div className="character-card">
      <img
        src={image}
        alt={name}
        className={rotated ? "rotated" : ""}
        onClick={handleClick}
      />
      <h3>{name}</h3>
      <p>{species}</p>
    </div>
  );
}

export default Character;