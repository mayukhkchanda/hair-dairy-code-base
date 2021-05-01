import React, { useEffect, useRef, useState } from "react";
import { onVisible } from "../../hooks/onVIsible";

function ImageCard({ urls, alt_description }) {
  const [vis, setvis] = useState(false);

  const cardRef = useRef();

  const isVisible = onVisible(ref);

  return (
    <div
      ref={cardRef}
      className={`image__showcase ${isVisible ? "vis" : "invis"}`}
      key={urls.thumb}
    >
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

export default ImageCard;
