import React from "react";
import Row from "./Row";
import "./Calendar.css";
import TopHeader from "./TopHeader";
import data from "../Data.json";

const Calendar = ({ dates, previousMonth, nextMonth }) => {
  const weekdays = ["S", "M", "T", "W", "T", "F", "S"];

  //console.log(nextMonth, " ", previousMonth);
  // console.log(data);

  return (
    <>
      <TopHeader></TopHeader>
      <div className="calendar">
        <div className="calendar__header">
          {weekdays.map((weekday, index) => {
            return (
              <div className="calendar__weekday " key={index}>
                {weekday}
              </div>
            );
          })}
        </div>

        {/* <div className="calendar__body">
        {previousMonth.map((weekDates) => {
          //console.log(weekDates);
          return (
            <React.Fragment key={JSON.stringify(weekDates)}>
              <Row weekDates={weekDates} />
            </React.Fragment>
          );
        })}
      </div> */}

        <div className="calendar__body">
          {dates.map((weekDates) => {
            //console.log(weekDates);
            return (
              <React.Fragment key={JSON.stringify(weekDates)}>
                <Row weekDates={weekDates} data={data} />
              </React.Fragment>
            );
          })}
        </div>

        {/* <div className="calendar__body">
        {nextMonth.map((weekDates) => {
          //console.log(weekDates);
          return (
            <React.Fragment key={JSON.stringify(weekDates)}>
              <Row weekDates={weekDates} />
            </React.Fragment>
          );
        })}
      </div> */}
      </div>
    </>
  );
};

export default Calendar;
