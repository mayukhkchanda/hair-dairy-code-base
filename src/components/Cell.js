import React, { useEffect } from "react";
import { imageSelected, newImageAdded } from "../actions";
import RoundedText from "./RoundedText";

import { connect } from "react-redux";
import Star from "./Star";

const Cell = ({ date, isGray, cellData, imageSelected, newImageAdded }) => {
  useEffect(() => {
    if (cellData && cellData !== {}) {
      newImageAdded({
        date: date.date,
        month: date.month,
        year: date.year,
        stars: cellData?.stars,
        url: cellData?.urls?.thumb,
        alt_desc: cellData?.alt_description,
      });
    }
  }, [cellData, date, newImageAdded]);

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

  const getWeekday = () => {
    const dateNo = new Date(date.year, date.month, date.date).getDay();

    if (dateNo === 0 || dateNo === 6) return "S";
    else if (dateNo === 1) return "M";
    else if (dateNo === 2 || dateNo === 4) return "T";
    else if (dateNo === 3) return "W";
    else if (dateNo === 5) return "F";
  };

  return (
    <div className={`cell ${isGray ? "gray" : ""}`}>
      <h3 className="cell__header">
        {date.date}
        <span className="cell__header_month">
          {`${date.date === 1 ? " " + getMonth(date.month) : ""}`}{" "}
        </span>
      </h3>
      <div className="image-container">
        {cellData ? (
          <>
            <Star starsCount={cellData?.stars}></Star>
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
            <div className="cell_image_footer">
              <RoundedText text={getWeekday()} fontSize="medium"></RoundedText>
              <RoundedText
                text={getMonth(date.month).substr(0, 2).toUpperCase()}
                fontSize="small"
              ></RoundedText>
            </div>
          </>
        ) : null}
      </div>
    </div>
  );
};

export default connect(null, {
  imageSelected,
  newImageAdded,
})(Cell);
