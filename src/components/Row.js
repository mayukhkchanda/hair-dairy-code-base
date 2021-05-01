import React, { Fragment } from "react";
import Cell from "./Cell";
import "./Row.css";

const Row = ({ weekDates, data }) => {
  return (
    <div className="row">
      {weekDates.map((date, index) => {
        return (
          <Fragment key={JSON.stringify(date)}>
            <Cell
              date={date}
              isGray={index === 0}
              cellData={data[0][`${date.date}-${date.month + 1}-${date.year}`]}
            ></Cell>
          </Fragment>
        );
      })}
    </div>
  );
};

export default Row;
