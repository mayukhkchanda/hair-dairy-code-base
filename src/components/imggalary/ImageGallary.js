import React from "react";
import ImageCard from "./ImageCard";
import "./imageGallary.css";

import { connect } from "react-redux";

class ImageGallary extends React.Component {
  componentDidUpdate() {
    console.log(this.props.imagesList);
    this.props.imageNode.current.scrollIntoView();
  }

  render() {
    const imageList = this.props.imagesList;

    const renderedList = imageList
      //.filter((el, index) => index < 10)
      .map(({ url, alt_desc, date, month, year, stars }) => {
        return (
          <ImageCard
            key={url}
            url={url}
            alt_desc={alt_desc}
            date={date}
            month={month}
            year={year}
            stars={stars}
          ></ImageCard>
        );
      });

    return <div className="image__slider">{renderedList}</div>;
  }
}

const mapStateToProps = (state) => {
  //console.log(state);
  return { imageNode: state.imageNode, imagesList: state.imagesObjList };
};

export default connect(mapStateToProps)(ImageGallary);
