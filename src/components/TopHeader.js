import React from "react";
import "./TopHeader.css";

const TopHeader = ({ headerMonth }) => {
  const headerYear = new Date().getFullYear();

  return (
    <div className="top-header">
      <div className="left-floated">
        <span className="blue bold">my</span>
        <span className="bold">&nbsp;hair dairy</span>
      </div>
      <div className="right-floated">
        <span className="bold">{headerMonth}</span>
        <span className="medium">&nbsp;{headerYear}</span>
      </div>
    </div>
  );
};

export default TopHeader;
