import React, { useEffect, useRef, useState } from "react";

//import VisibilitySensor from "react-visibility-sensor";

function ImageCard({ urls, alt_description }) {
  const [vis, setvis] = useState(false);

  const cardRef = useRef();

  useEffect(() => {
    const onScroll = () => {
      const { left, width } = cardRef.current.getBoundingClientRect();
      if (left > 0 && left + width < 375) {
        setvis(true);
      } else {
        setvis(false);
      }
    };
    window.addEventListener("scroll", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  /*  const onChange = (isVisible) => {
    //console.log(isVisible);
    setvis(isVisible);
  };
 */
  return (
    <div
      ref={cardRef}
      className={`image__showcase ${vis ? "vis" : "invis"}`}
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
