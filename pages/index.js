import Header from "../components/layout/Header";
import Portfolio from "../components/sections/Portfolio";
import Skills from "../components/sections/Skills";

function Home() {
  return (
    <div className="page-content">
      <Header />
      <Portfolio />
      <Skills />
    </div>
  );
}

export default Home;
