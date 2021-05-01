import React from "react";
import "./Star.css";

const Star = ({ starsCount, fontSize }) => {
  if (!starsCount) return null;

  const stars = [];
  for (let i = 1; i <= 5; i++) {
    stars.push(
      <i
        key={i}
        className={`fa fa-star ${fontSize ? fontSize : ""} ${
          i <= starsCount ? "blue" : "grey"
        } `}
      ></i>
    );
  }

  return <span className="stars">{stars}</span>;
};

export default Star;
