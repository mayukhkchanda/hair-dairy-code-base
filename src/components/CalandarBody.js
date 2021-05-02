import React, { useEffect, useRef } from "react";
import Row from "./Row";
import data from "../Data.json";
import { OnVisible } from "../hooks/onVIsible";

const CalandarBody = ({ month, setHeaderMonth, setCurrentMonthRef }) => {
  //console.log(month);

  const monthRef = useRef(null);

  const currentMonthVis = OnVisible(monthRef, 5);

  useEffect(() => {
    if (currentMonthVis) {
      setHeaderMonth(month.forMonth);
    }
  }, [currentMonthVis, month]);

  useEffect(() => {
    const currentMonth = new Date().getMonth();

    if (month.forMonth === currentMonth) {
      setCurrentMonthRef(monthRef);
    }
  }, [month]);

  return (
    <div ref={monthRef} className="calendar__body">
      {month?.dates &&
        month?.dates
          .filter((arr, index) => index !== month?.dates.length - 1)
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

export default CalandarBody;
