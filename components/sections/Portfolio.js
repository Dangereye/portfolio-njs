import myProjects from "../../data/myProjects";
import Image from "next/image";

function Portfolio() {
  return (
    <section className="section" id="portfolio">
      <div className="container">
        <div className="section__subtitle">Portfolio</div>
        <h2 className="section__title">Recent Projects</h2>
        <div className="section__block grid grid--multiple">
          {myProjects.map((project) => (
            <div className="project" key={`project-${project.id}`}>
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
          ))}
        </div>
      </div>
    </section>
  );
}

export default Portfolio;
