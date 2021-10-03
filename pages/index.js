import Header from "../components/layout/Header";
import About from "../components/sections/About";
import Photoshop from "../components/sections/Photoshop";
import Portfolio from "../components/sections/Portfolio";
import Skills from "../components/sections/Skills";
import Contact from "../Contact";

function Home() {
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
