import "./App.css";
import { useEffect, useState } from "react";
import Calendar from "./components/Calendar";
import ImageGallary from "./components/imggalary/ImageGallary";

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
      {/* <Calendar
        dates={Dates}
        previousMonth={PreviousMonth}
        nextMonth={NextMonth}
      /> */}
      <ImageGallary
        selectedImage={
          "https://images.unsplash.com/photo-1554180842-41b1dd69d588?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyMjA4NzZ8MHwxfHNlYXJjaHw2fHxnaXJsc3xlbnwwfHx8fDE2MTk2ODA3NDk&ixlib=rb-1.2.1&q=80&w=200"
        }
      ></ImageGallary>
    </div>
  );
}
