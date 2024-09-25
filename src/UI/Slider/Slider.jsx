import React, { useState } from "react";
import "./Slider.scss";
import { SliderPhotos } from "../../utils/SliderPhotoes";
import ArrowButton from "../../UI/ArrowButton/ArrowButton";

const Slider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const photosKeys = Object.keys(SliderPhotos);
  const currentPhoto = SliderPhotos[photosKeys[currentIndex]];

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % photosKeys.length);
  };

  const handlePrev = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + photosKeys.length) % photosKeys.length
    );
  };

  return (
    <div className="slider">
      <div
        className="arrow-button"
        onClick={handlePrev}
      ></div>

      <div className="slider__content">
        <div className="slider__image">
          <img
            src={currentPhoto.photo}
            alt={currentPhoto.name}
          />
        </div>

        <div className="slider__name">{currentPhoto.name}</div>
      </div>

      <div
        className="arrow-button"
        style={{ transform: "rotate(180deg)" }}
        onClick={handleNext}
      ></div>
    </div>
  );
};

export default Slider;
