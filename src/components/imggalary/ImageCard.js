import React, { useEffect, useRef } from "react";
import { OnVisible } from "../../hooks/onVIsible";
import { gotImageRef } from "../../actions";

import { connect } from "react-redux";
import Star from "../Star";
import RoundedText from "../RoundedText";

function ImageCard({
  url,
  alt_desc,
  date,
  month,
  year,
  stars,
  gotImageRef,
  selectedImg,
}) {
  const cardRef = useRef();

  const isVisible = OnVisible(cardRef);

  //console.log(selectedImg);

  const getWeekday = () => {
    const dateNo = new Date(year, month, date).getDay();

    if (dateNo === 0 || dateNo === 6) return "S";
    else if (dateNo === 1) return "M";
    else if (dateNo === 2 || dateNo === 4) return "T";
    else if (dateNo === 3) return "W";
    else if (dateNo === 5) return "F";
  };

  const fullMonth = new Date(year, month, date).toLocaleString("default", {
    month: "long",
  });

  useEffect(() => {
    if (selectedImg.url === url) {
      gotImageRef(cardRef);
    }
  }, []);

  return (
    <div
      ref={cardRef}
      className={`image__showcase ${isVisible ? "vis" : "invis"}`}
      key={url}
    >
      <div className="gradient"></div>
      <div className="image__container">
        <img src={url} alt={alt_desc} className="image__display" />
      </div>
      <div className="image__content">
        <div className="content_header">
          <div className="rounded-text-container">
            <RoundedText
              circleSize="bigCircle"
              text={getWeekday()}
              fontSize={"large"}
            ></RoundedText>
            <RoundedText
              circleSize="bigCircle"
              text={fullMonth.substr(0, 2).toUpperCase()}
              fontSize={"large"}
            ></RoundedText>
          </div>
          <div className="stars-container">
            <Star starsCount={stars} fontSize="medium"></Star>
          </div>
        </div>
        <h3 className="content__date">{`${date} ${fullMonth}`}</h3>
        <div className="content__text">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Incidunt
          reiciendis sed iure doloremque, fuga iusto...
        </div>
      </div>
      {/* <hr /> */}
      <div className="content__footer">View full Post</div>
    </div>
  );
}

const mapStateToProps = (state) => {
  //console.log(state);

  return { selectedImg: state.selectedImage };
};

export default connect(mapStateToProps, { gotImageRef })(ImageCard);
