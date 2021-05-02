import React, { createRef } from "react";
import Row from "./Row";
import "./Calendar.css";
import TopHeader from "./TopHeader";
import data from "../Data.json";
import { OnVisible } from "../hooks/onVIsible";

const Calendar = ({ currentMonth, previousMonth, nextMonth }) => {
  const weekdays = ["S", "M", "T", "W", "T", "F", "S"];

  //console.log(currentMonth);
  // console.log(data);

  const curMonthRef = createRef(null);
  const prevMonthRef = createRef(null);

  const previousMonthVis = OnVisible(prevMonthRef, 5);
  const currentMonthVis = OnVisible(curMonthRef, 5);

  //console.log("Previous month -> " + previousMonthVis);
  //console.log("Current  month -> " + currentMonthVis);

  let month = null;
  if (currentMonthVis) month = "May";
  else if (previousMonthVis) month = "Apr";

  return (
    <>
      <TopHeader month={month}></TopHeader>
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

        <div ref={prevMonthRef} className="calendar__body">
          {previousMonth?.dates &&
            previousMonth?.dates
              .filter((arr, index) => index !== previousMonth?.dates.length - 1)
              .map((weekDates) => {
                //console.log(weekDates);
                return (
                  <React.Fragment key={JSON.stringify(weekDates)}>
                    <Row weekDates={weekDates} data={data} />
                  </React.Fragment>
                );
              })}
        </div>

        <div ref={curMonthRef} className="calendar__body">
          {currentMonth?.dates &&
            currentMonth?.dates.map((weekDates) => {
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
              <Row weekDates={weekDates} data={data} />
            </React.Fragment>
          );
        })}
      </div> */}
      </div>
    </>
  );
};

export default Calendar;
