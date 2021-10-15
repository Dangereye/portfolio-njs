import Image from "next/image";
import Slides from "/data/photoshopSlides";

function Photoshop() {
  return (
    <section className="section" id="photoshop">
      <div className="container">
        <div className="section__subtitle center">Photoshop</div>
        <h2 className="section__title center">Showcase</h2>
        <div className="section__block">
          <Image
            src="/img/sections/photoshop/beechfield_morf_elements.jpg"
            width="1920"
            height="819"
            layout="responsive"
            blurDataURL="/img/sections/photoshop/beechfield_morf_elements.jpg"
            placeholder="blur"
          />
          <div className="section__block grid grid--multiple">
            {Slides.map((slide, index) => (
              <div className="project" key={`slide-${index}`}>
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
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Photoshop;
