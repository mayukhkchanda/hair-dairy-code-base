import React, { useEffect, useRef } from "react";
import Row from "./Row";
import data from "../Data.json";
import { OnVisible } from "../hooks/onVIsible";

import { currentMonthRefAct } from "../actions";

import { connect } from "react-redux";

const CalandarBody = ({
  month,
  setHeaderMonth,
  currentMonthRefAct,
  showFullMonth,
}) => {
  //console.log(month);

  const monthRef = useRef(null);

  const currentMonthVis = OnVisible(monthRef, 5);

  useEffect(() => {
    if (currentMonthVis) {
      setHeaderMonth(month.forMonth);
    }
  }, [currentMonthVis, month, setHeaderMonth]);

  useEffect(() => {
    const currentMonth = new Date().getMonth();

    if (currentMonth === month.forMonth) {
      currentMonthRefAct(monthRef.current);
    }
  }, [month, currentMonthRefAct]);

  return (
    <div ref={monthRef} className="calendar__body">
      {month?.dates &&
        month?.dates
          .filter((arr, index) => {
            if (showFullMonth) return true;

            return index !== month?.dates.length - 1;
          })
          .map((weekDates) => {
            //console.log(weekDates);
            return (
              <React.Fragment key={JSON.stringify(weekDates)}>
                <Row weekDates={weekDates} data={data} />
              </React.Fragment>
            );
          })}
    </div>
  );
};

export default connect(null, { currentMonthRefAct })(CalandarBody);
