import React from "react";
import Slider from "infinite-react-carousel";
import "./Slide.scss";

function Slide({ children, slidesToShow, arrowsScroll, centerMode, autoplay}) {
  return (
    <div className="slide">
      <div className="container">
        <Slider slidesToShow={slidesToShow} arrowsScroll={arrowsScroll} centerMode={centerMode} autoplay={autoplay}>
          {children}
        </Slider>
      </div>
    </div>
  );
}

export default Slide;
