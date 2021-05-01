import React from "react";
import { imageSelected } from "../actions";

import { connect } from "react-redux";

const Cell = ({ date, isGray, cellData, imageSelected }) => {
  const getMonth = (month) => {
    switch (month) {
      case 0:
        return "Jan";

      case 1:
        return "Feb";

      case 2:
        return "Mar";

      case 3:
        return "Apr";

      case 4:
        return "May";

      case 5:
        return "Jun";

      case 6:
        return "Jul";

      case 7:
        return "Aug";

      case 8:
        return "Sep";

      case 9:
        return "Oct";

      case 10:
        return "Nov";

      case 11:
        return "Dec";

      default:
        return "";
    }
  };

  return (
    <div className={`cell  ${isGray ? "gray" : ""} `}>
      <h3 className="cell__header">
        {" "}
        {date.date}
        <span className="cell__header_month">
          {" "}
          {`${date.date === 1 ? " " + getMonth(date.month) : ""}`}{" "}
        </span>
      </h3>
      <div className="image-container">
        {/* <div className="image-stars">⭐⭐⭐⭐</div>
         */}

        {cellData ? (
          <img
            onClick={() => {
              //console.log(cellData?.urls?.thumb);
              imageSelected({
                date: date.date,
                month: date.month,
                url: cellData?.urls?.thumb,
              });
            }}
            className="image"
            src={cellData?.urls?.thumb}
            alt={cellData?.alt_description}
          />
        ) : null}
      </div>
    </div>
  );
};

export default connect(null, {
  imageSelected,
})(Cell);
