import React from "react";
import "./RoundedText.css";

const colorArr = ["purple", "violet", "yellow"];

const RoundedText = ({ text, fontSize, circleSize }) => {
  const index = Math.ceil(Math.random() * colorArr.length) - 1;

  const backgroundColor = colorArr[index];

  return (
    <div
      className={`rounded ${
        circleSize ? circleSize : ""
      } ${backgroundColor} roboto black ${fontSize}`}
    >
      {text}
    </div>
  );
};

export default RoundedText;
