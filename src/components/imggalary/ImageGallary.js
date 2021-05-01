import React from "react";
import imageList from "./data.json";
import ImageCard from "./ImageCard";
import "./imageGallary.css";

import { connect } from "react-redux";

class ImageGallary extends React.Component {
  componentDidUpdate() {
    // console.log(this.props.imageNode);
    this.props.imageNode.current.scrollIntoView();
  }

  render() {
    const renderedList = imageList
      .filter((el, index) => index < 10)
      .map(({ urls, alt_description }) => {
        return (
          <ImageCard
            key={urls.thumb}
            urls={urls}
            alt_description={alt_description}
          ></ImageCard>
        );
      });

    return <div className="image__slider">{renderedList}</div>;
  }
}

const mapStateToProps = (state) => {
  // console.log(state);
  return { imageNode: state.imageNode };
};

export default connect(mapStateToProps)(ImageGallary);
