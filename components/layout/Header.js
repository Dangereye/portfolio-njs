import { gsap } from "gsap/dist/gsap";
import { useEffect } from "react";
import { useRouter } from "next/router";
import Pux from "../shared/Pux";
import Button from "../shared/Button";

function Header() {
  const router = useRouter();

  const handleButton = () => {
    router.push("/#portfolio");
  };

  useEffect(() => {
    const tl = gsap.timeline({ delay: 1, duration: 1 });
    tl.from(".caption", { scale: 0, opacity: 0, ease: "power1" });
    tl.from(".header-fadeup", {
      y: -100,
      delay: 1,
      opacity: 0,
      stagger: 0.3,
      ease: "ease-in",
    });
    tl.from(".header-fadedown", { y: 100, opacity: 0, ease: "back.out(2.5)" });
  }, []);

  return (
    <header className="header">
      <Pux />
      <div className="container">
        <div className="section__subtitle header-fadeup">
          Front-end Developer.
        </div>
        <h1 className="header-fadeup">Craig Puxty</h1>
        <p className="lead caption">
          Projects created with <span>p</span>assion, producing great{" "}
          <span>u</span>ser e<span>x</span>periences!
        </p>
        <Button
          name="Recent Projects"
          style="btn--secondary btn--large header-fadedown "
          func={handleButton}
        />
      </div>
    </header>
  );
}

export default Header;
