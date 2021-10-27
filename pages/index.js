import { useState, useEffect } from "react";
import UseScroll from "../hooks/useScroll";

import Header from "../components/layout/Header";
import About from "../components/sections/About";
import Photoshop from "../components/sections/Photoshop";
import Portfolio from "../components/sections/Portfolio";
import Skills from "../components/sections/Skills";
import Contact from "../components/sections/Contact";
import Slideshow from "../components/sections/Slideshow";

function Home() {
  const scrollToSection = UseScroll();
  const [slideshowIsOpen, setSlideshowIsOpen] = useState(false);
  const [firstSlide, setFirstSlide] = useState(0);

  useEffect(() => {
    scrollToSection();
  });

  return (
    <div className="page-content">
      <Header />
      <Portfolio />
      <Skills />
      <Photoshop
        setSlideshowIsOpen={setSlideshowIsOpen}
        setFirstSlide={setFirstSlide}
      />
      {slideshowIsOpen && (
        <Slideshow
          slideshowIsOpen={slideshowIsOpen}
          setSlideshowIsOpen={setSlideshowIsOpen}
          firstSlide={firstSlide}
        />
      )}
      <About />
      <Contact />
    </div>
  );
}

export default Home;
