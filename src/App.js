import "./App.css";
import React from "react";
import Calendar from "./components/Calendar";
import ImageGallary from "./components/imggalary/ImageGallary";

import { datesGenerator } from "dates-generator";
import { connect } from "react-redux";

/* const App = ({ selectedImage, currentMonthNode }) => {
  const [months, setMonths] = useState([]);

  //console.log(selectedImage);
  //console.log(currentMonthNode);

  useEffect(() => {
    const today = new Date();

    const thisYear = today.getFullYear();
    const thisMonth = today.getMonth();

    const months = Array(thisMonth + 1)
      .fill({})
      .map((_, index) => {
        const { dates } = datesGenerator({
          year: thisYear,
          month: index,
          startingDay: 0,
        });
        return { dates: dates, forMonth: index };
      });

    setMonths(months);
  }, []);

  let displayEl = null;
  if (selectedImage?.url) {
    displayEl = <ImageGallary></ImageGallary>;
  }

  return (
    <div className="App">
      {displayEl}
      <Calendar months={months} isBottom={selectedImage?.url ? true : false} />
    </div>
  );
}; */

class App extends React.Component {
  state = { months: [] };

  componentDidMount() {
    const today = new Date();

    const thisYear = today.getFullYear();
    const thisMonth = today.getMonth();

    const Months = Array(thisMonth + 1)
      .fill({})
      .map((_, index) => {
        const { dates } = datesGenerator({
          year: thisYear,
          month: index,
          startingDay: 0,
        });
        return { dates: dates, forMonth: index };
      });

    this.setState({ months: Months });
  }

  componentDidUpdate() {
    // console.log(this.props.currentMonthNode);
    if (this.props.currentMonthNode) {
      this.props.currentMonthNode.scrollIntoView();
    }
  }

  displayEl = () => {
    if (this.props.selectedImage?.url) {
      return <ImageGallary></ImageGallary>;
    }
    return null;
  };
  render() {
    return (
      <div className="App">
        {this.displayEl()}
        <Calendar
          months={this.state.months}
          isBottom={this.props.selectedImage?.url ? true : false}
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  //console.log(state);

  return {
    selectedImage: state.selectedImage,
    currentMonthNode: state.CurrentMonthNode,
  };
};

export default connect(mapStateToProps, {})(App);
