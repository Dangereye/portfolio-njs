import { useRouter } from "next/router";
import Pux from "../shared/Pux";
import Button from "../shared/Button";

function Header() {
  const router = useRouter();

  const handleButton = () => {
    router.push("/#portfolio");
  };

  return (
    <header className="header">
      <Pux />
      <div className="container">
        <div className="section__subtitle">Front-end Developer.</div>
        <h1>Craig Puxty</h1>
        <p className="lead">
          Projects created with <span>p</span>assion, producing great{" "}
          <span>u</span>ser e<span>x</span>periences!
        </p>
        <Button
          name="Recent Projects"
          style="btn--secondary btn--large"
          func={handleButton}
        />
      </div>
    </header>
  );
}

export default Header;
