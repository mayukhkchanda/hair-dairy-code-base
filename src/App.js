import "./App.css";
import { useEffect, useState } from "react";
import Calendar from "./components/Calendar";
import ImageGallary from "./components/imggalary/ImageGallary";

import { datesGenerator } from "dates-generator";
import { connect } from "react-redux";

const App = (selectedImage) => {
  const [Dates, setDates] = useState({});
  const [PreviousMonth, setPreviousMonth] = useState({});
  const [NextMonth, setNextMonth] = useState({});

  useEffect(() => {
    const today = new Date();

    const thisYear = today.getFullYear();
    const thisMonth = today.getMonth();

    const body = {
      year: thisYear,
      month: thisMonth,
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

    setDates({ dates: dates, forMonth: thisMonth });
    setPreviousMonth({
      dates: datesGenerator({
        year: thisYear,
        month: previousMonth,
        startingDay: 0,
      }).dates,
      forMonth: previousMonth,
    });
    setNextMonth({
      dates: datesGenerator({
        year: thisYear,
        month: nextMonth,
        startingDay: 0,
      }).dates,
      forMonth: nextMonth,
    });
  }, []);

  let displayEl = null;

  //console.log(Dates);

  if (selectedImage.image) {
    displayEl = <ImageGallary></ImageGallary>;
  } else {
    displayEl = (
      <Calendar
        currentMonth={Dates}
        previousMonth={PreviousMonth}
        nextMonth={NextMonth}
      />
    );
  }
  return <div className="App">{displayEl}</div>;
};

const mapStateToProps = (state) => {
  //console.log(state);

  return { image: state.selectedImage };
};

export default connect(mapStateToProps, {})(App);
