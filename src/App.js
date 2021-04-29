import "./App.css";
import { useEffect, useState } from "react";
import Calendar from "./components/Calendar";

import { datesGenerator } from "dates-generator";

export default function App() {
  const [Dates, setDates] = useState([]);
  const [PreviousMonth, setPreviousMonth] = useState([]);
  const [NextMonth, setNextMonth] = useState([]);

  useEffect(() => {
    const today = new Date();

    const thisYear = today.getFullYear();
    const thisMonth = today.getMonth();

    const body = {
      thisYear,
      thisMonth,
      startingDay: 0,
    };

    const {
      dates,
      previousYear,
      previousMonth,
      nextYear,
      nextMonth,
    } = datesGenerator(body);

    //console.log(dates);

    setDates(dates);
    setPreviousMonth(
      datesGenerator({ thisMonth, previousMonth, startingDay: 0 }).dates
    );
    setNextMonth(
      datesGenerator({ thisMonth, nextMonth, startingDay: 0 }).dates
    );
  }, []);

  return (
    <div className="App">
      <Calendar
        dates={Dates}
        previousMonth={PreviousMonth}
        nextMonth={NextMonth}
      />
    </div>
  );
}
