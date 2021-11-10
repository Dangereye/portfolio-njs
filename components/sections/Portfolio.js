import { useState, useEffect } from "react";
import useAnimation from "../../hooks/useAnimation";
import myProjects from "../../data/myProjects";
import Image from "next/image";
import Link from "next/link";

function Portfolio() {
  const animate = useAnimation();
  const [animIsLoaded, setAnimIsLoaded] = useState(false);

  useEffect(() => {
    if (!animIsLoaded) {
      animate("#portfolio", ".fadeup");
      setAnimIsLoaded(true);
    }
  }, [animate, animIsLoaded]);

  return (
    <section className="section" id="portfolio">
      <div className="container">
        <div className="section__subtitle center fadeup">Portfolio</div>
        <h2 className="section__title center fadeup">Recent Projects</h2>
        <div className="section__block grid grid--multiple">
          {myProjects.map((project) => (
            <Link href={`/project/${project.id}`} key={`project-${project.id}`}>
              <a className="fadeup">
                <div className="project">
                  <div className="project__image">
                    <Image
                      src={project.preview_image}
                      alt={project.title}
                      width="265"
                      height="150"
                      layout="responsive"
                      blurDataURL={project.preview_image}
                      placeholder="blur"
                    />
                  </div>
                  <div className="project__details">
                    <div className="project__type">{project.type}</div>
                    <h4 className="project__title">{project.title}</h4>
                    <div className="project__year">{project.date}</div>
                  </div>
                </div>
              </a>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Portfolio;
