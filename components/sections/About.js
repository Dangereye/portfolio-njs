import { useState, useEffect } from "react";
import useAnimation from "../../hooks/useAnimation";
import Image from "next/image";

function About() {
  const [animIsLoaded, setAnimIsLoaded] = useState(false);
  const animate = useAnimation();

  useEffect(() => {
    if (!animIsLoaded) {
      animate("#about", ".about-fadeup", ".about-scale");
      setAnimIsLoaded(true);
    }
  }, [animate, animIsLoaded]);
  return (
    <section className="section" id="about">
      <div className="container">
        <div className="grid grid--50-50">
          <div className="grid--50-50__a">
            <div className="about-scale">
              <Image
                src="/img/sections/about/profile-image.jpg"
                width="600"
                height="600"
                alt="Craig Puxty"
              />
            </div>
          </div>
          <div className="grid--50-50__b">
            <h2 className="section__title about-fadeup">
              <span>Hello,</span> I am Craig.
            </h2>
            <h3 className="section__subtitle about-fadeup">
              Currently, I live in a small town in Flintshire, United Kingdom.
            </h3>
            <p className="section__paragraph about-fadeup">
              My experience thus far has primarily been front-end. However, I do
              have some basic knowledge of back-end technologies, such as Node,
              Express, Mongoose and Mongo DB.
            </p>
            <p className="section__paragraph about-fadeup">
              Through passion, constant practice and learning, I can produce
              beautiful modern software to a high standard, utilising best
              practices.
            </p>
            <p className="section__paragraph about-fadeup">
              React has predominantly been my focus during the last 12 months,
              with several small projects under my belt. I intend to explore
              Next.js to use in conjunction with React and take a deeper dive
              into back-end technologies over the coming months.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
