import React from "react";
import TopHeader from "./TopHeader";
import CalandarBody from "./CalandarBody";
import "./Calendar.css";

class Calendar extends React.Component {
  weekdays = ["S", "M", "T", "W", "T", "F", "S"];

  state = { headerMonth: null };

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

  renderMonths = () => {
    return this.props.months.map((month, index) => {
      return (
        <CalandarBody
          key={index}
          month={month}
          setHeaderMonth={this.setHeaderMonth}
          showFullMonth={index === this.props.months.length - 1}
        ></CalandarBody>
      );
    });
  };

  render() {
    return (
      <>
        <TopHeader
          headerMonth={this.getMonth(this.state.headerMonth)}
        ></TopHeader>

        <div className="rounded-plus">
          <span className="plus-text">&#65291;</span>
        </div>

        <div className={`calendar ${this.props.isBottom ? "bottom" : ""} `}>
          <div className="calendar__header">
            {this.weekdays.map((weekday, index) => {
              return (
                <div className="calendar__weekday " key={index}>
                  {weekday}
                </div>
              );
            })}
          </div>
          <div className="calendar_body_container">{this.renderMonths()}</div>
        </div>
      </>
    );
  }
}

export default Calendar;
