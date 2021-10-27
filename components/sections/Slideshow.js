import slideshowData from "../../data/slideshowData";
import Image from "next/image";
import { useState } from "react";
import Button from "../shared/Button";

function Slideshow({ setSlideshowIsOpen, firstSlide = 0 }) {
  const [activeSlide, setActiveSlide] = useState(firstSlide);
  const [position, setPosition] = useState(0 - activeSlide * 100);
  const wrapperWidth = slideshowData.length * 100;

  const nextSlide = () => {
    if (activeSlide < slideshowData.length - 1) {
      setActiveSlide((slide) => slide + 1);
      setPosition((pos) => pos - 100);
    }
  };

  const previousSlide = () => {
    if (activeSlide > 0) {
      setActiveSlide((slide) => slide - 1);
      setPosition((pos) => pos + 100);
    }
  };

  const goToSlide = (index) => {
    setActiveSlide(index);
    setPosition(0 - index * 100);
  };

  return (
    <div className="slideshow">
      <div className="slideshow__container">
        <div
          className="slideshow__wrapper"
          style={{ width: `${wrapperWidth}%`, left: `${position}%` }}
        >
          {slideshowData.map((slide, index) => (
            <div className="slideshow__slide" key={`slide-${index}`}>
              <Image
                src={slide.image}
                width={1920}
                height={819}
                alt={slide.title}
                blurDataURL={slide.image}
                placeholder="blur"
              />
            </div>
          ))}
        </div>
        <div className="slideshow__close">
          <Button
            name="X"
            style="btn--primary btn--small"
            func={() => setSlideshowIsOpen(false)}
          />
        </div>
        <div className="slideshow__controls">
          <Button
            name="&#11164;"
            style="btn--primary btn--small"
            func={previousSlide}
          />
          <div className="slideshow__navigation">
            {slideshowData.map((slide, index) => (
              <div
                className={
                  position === 0 - index * 100 ? "item active" : "item"
                }
                onClick={() => goToSlide(index)}
                key={`navigation-${index}`}
              ></div>
            ))}
          </div>
          <Button
            name="&#11166;"
            style="
            btn--primary
            btn--small"
            func={nextSlide}
          />
        </div>
      </div>
    </div>
  );
}
export default Slideshow;
