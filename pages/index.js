import Header from "../components/layout/Header";
import Photoshop from "../components/sections/Photoshop";
import Portfolio from "../components/sections/Portfolio";
import Skills from "../components/sections/Skills";

function Home() {
  return (
    <div className="page-content">
      <Header />
      <Portfolio />
      <Skills />
      <Photoshop />
    </div>
  );
}

export default Home;
