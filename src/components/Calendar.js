import React, { createRef, useEffect, useState } from "react";
import TopHeader from "./TopHeader";
import CalandarBody from "./CalandarBody";
import "./Calendar.css";

/* const Calendar = ({ months }) => {
  const weekdays = ["S", "M", "T", "W", "T", "F", "S"];

  const [headerMonth, setHeaderMonth] = useState(null);

  const [currentMonthRef, setCurrentMonthRef] = useState(null);

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

  const renderMonths = () => {
    return months.map((month, index) => {
      //console.log(month);

      return (
        <CalandarBody
          key={index}
          month={month}
          setHeaderMonth={setHeaderMonth}
        ></CalandarBody>
      );
    });
  };

  return (
    <>
      <TopHeader headerMonth={getMonth(headerMonth)}></TopHeader>
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

        {renderMonths()}
      </div>
    </>
  );
}; */

class Calendar extends React.Component {
  weekdays = ["S", "M", "T", "W", "T", "F", "S"];

  // const [headerMonth, setHeaderMonth] = useState(null);

  state = { headerMonth: null, currentMonthRef: null };

  getMonth = (month) => {
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

  setHeaderMonth = (month) => {
    this.setState({ headerMonth: month });
  };

  setCurrentMonthRef = (monthRef) => {
    this.setState({ currentMonthRef: monthRef });
  };

  renderMonths = () => {
    return this.props.months.map((month, index) => {
      //console.log(month);

      return (
        <CalandarBody
          key={index}
          month={month}
          setHeaderMonth={this.setHeaderMonth}
          setCurrentMonthRef={this.setCurrentMonthRef}
        ></CalandarBody>
      );
    });
  };

  componentDidMount() {
    //console.log(this.state.currentMonthRef);
    const currentMonthNode = this.state.currentMonthRef?.current;
    if (currentMonthNode) currentMonthNode.scrollIntoView();
  }

  render() {
    return (
      <>
        <TopHeader
          headerMonth={this.getMonth(this.state.headerMonth)}
        ></TopHeader>

        <div className="calendar">
          <div className="calendar__header">
            {this.weekdays.map((weekday, index) => {
              return (
                <div className="calendar__weekday " key={index}>
                  {weekday}
                </div>
              );
            })}
          </div>

          {this.renderMonths()}
        </div>
      </>
    );
  }
}

export default Calendar;
