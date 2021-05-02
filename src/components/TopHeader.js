import React from "react";
import "./TopHeader.css";

const TopHeader = ({ month }) => {
  return (
    <div className="top-header">
      <div className="left-floated">
        <span className="blue bold">my</span>
        <span className="bold">&nbsp;hair dairy</span>
      </div>
      <div className="right-floated">
        <span className="bold">{month}</span>
        <span className="medium">&nbsp;2021</span>
      </div>
    </div>
  );
};

export default TopHeader;
