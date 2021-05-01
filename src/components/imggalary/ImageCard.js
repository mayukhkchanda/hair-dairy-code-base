import React, { useEffect, useRef, useState } from "react";
import { OnVisible } from "../../hooks/onVIsible";
import { gotImageRef } from "../../actions";

import { connect } from "react-redux";

function ImageCard({ urls, alt_description, gotImageRef, selectedImg }) {
  const [vis, setvis] = useState(false);

  const cardRef = useRef();

  const isVisible = OnVisible(cardRef);

  //console.log(selectedImg);

  useEffect(() => {
    if (selectedImg.url === urls.thumb) {
      gotImageRef(cardRef);
    }
  }, []);

  return (
    <div
      ref={cardRef}
      className={`image__showcase ${isVisible ? "vis" : "invis"}`}
      key={urls.thumb}
    >
      <div className="gradient"></div>
      <div className="image__container">
        <img
          src={urls.thumb}
          alt={alt_description}
          className="image__display"
        />
      </div>
      <div className="image__content">
        <h3 className="content__header">29 December</h3>
        <div className="content__text">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Incidunt
          reiciendis sed iure doloremque, fuga iusto quae fugit deserunt, vero
          odit ad ...
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  //console.log(state);

  return { selectedImg: state.selectedImage };
};

export default connect(mapStateToProps, { gotImageRef })(ImageCard);
