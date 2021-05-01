import React from "react";
import imageList from "./data.json";
import ImageCard from "./ImageCard";
import "./imageGallary.css";

class ImageGallary extends React.Component {
  componentDidMount() {}

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

export default ImageGallary;
