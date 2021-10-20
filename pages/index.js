import { useEffect } from "react";
import UseScroll from "../hooks/useScroll";

import Header from "../components/layout/Header";
import About from "../components/sections/About";
import Photoshop from "../components/sections/Photoshop";
import Portfolio from "../components/sections/Portfolio";
import Skills from "../components/sections/Skills";
import Contact from "../components/sections/Contact";

function Home() {
  const scrollToSection = UseScroll();

  useEffect(() => {
    scrollToSection();
  });

  return (
    <div className="page-content">
      <Header />
      <Portfolio />
      <Skills />
      <Photoshop />
      <About />
      <Contact />
    </div>
  );
}

export default Home;
