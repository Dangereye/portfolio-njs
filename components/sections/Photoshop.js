import { gsap } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

import { useState, useEffect } from "react";
import useAnimation from "../../hooks/useAnimation";
import slideshowData from "/data/slideshowData";
import Image from "next/image";

function Photoshop({ setSlideshowIsOpen, setFirstSlide }) {
  const animate = useAnimation();
  const [animIsLoaded, setAnimIsLoaded] = useState();

  useEffect(() => {
    if (!animIsLoaded) {
      animate("#photoshop", ".photoshop-fadeup");
      setAnimIsLoaded(true);
    }
  }, [animate, animIsLoaded]);

  useEffect(() => {
    const hero = gsap.timeline({
      scrollTrigger: {
        trigger: "#photoshop",
        start: "top 300px",
        toggleActions: "play none none none",
        markers: false,
      },
    });
    hero.to(".photoshop-final", {
      clipPath: "circle(100% at 50% 50%)",
      delay: 1.5,
      duration: 2,
      opacity: 1,
      ease: "ease-out",
    });
  }, []);

  const openSlideshow = (index) => {
    setFirstSlide(index);
    setSlideshowIsOpen(true);
  };

  return (
    <section className="section" id="photoshop">
      <div className="container">
        <div className="section__subtitle center photoshop-fadeup">
          Photoshop
        </div>
        <h2 className="section__title center photoshop-fadeup">Showcase</h2>
        <div className="section__block">
          <div className="photoshop-cutout photoshop-fadeup">
            <Image
              src="/img/sections/photoshop/beechfield_morf_elements.jpg"
              width="1920"
              height="819"
              alt="Image cutouts"
              layout="responsive"
              blurDataURL="/img/sections/photoshop/beechfield_morf_elements.jpg"
              placeholder="blur"
            />
            <div className="photoshop-final">
              <Image
                src="/img/sections/photoshop/beechfield_morf.jpg"
                width="1920"
                height="819"
                alt="Final Image"
                layout="responsive"
                blurDataURL="/img/sections/photoshop/beechfield_morf.jpg"
                placeholder="blur"
              />
            </div>
          </div>
          <div className="section__block grid grid--multiple photoshop-fadeup">
            {slideshowData.map((slide, index) => (
              <div className="photoshop-fadeup" key={`slide-${index}`}>
                <div className="project" onClick={() => openSlideshow(index)}>
                  <div className="project__image">
                    <Image
                      src={slide.image}
                      alt={slide.title}
                      width="265"
                      height="113"
                      layout="responsive"
                      blurDataURL={slide.image}
                      placeholder="blur"
                      title={slide.title}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Photoshop;
