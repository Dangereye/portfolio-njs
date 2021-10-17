import myProjects from "../../data/myProjects";
import Image from "next/image";
import { BiTimeFive } from "react-icons/bi";
import ListOfAnchors from "../../components/shared/lists/ListOfAnchors";
import Button from "../../components/shared/Button";

function ProjectDetails({ project }) {
  return (
    <div className="page-content">
      <section className="section">
        <div className="container">
          <div className="grid grid--sidebar">
            <main>
              <div className="section__subtitle date">
                <BiTimeFive />
                {project.date}
              </div>
              <h1>{project.title}</h1>
              <div className="icons-array">
                {project.tech.map((tech, index) => (
                  <Image
                    key={`tech-${index}`}
                    src={tech.image}
                    alt={tech.text}
                    title={tech.text}
                    width="40"
                    height="40"
                  />
                ))}
              </div>
              <h3 className="list__title">Description</h3>
              <p>{project.description}</p>
            </main>
            <aside>
              {project.api && (
                <ListOfAnchors
                  component="project_api"
                  title="Api's"
                  list={project.api}
                />
              )}
              {project.third_party && (
                <ListOfAnchors
                  component="project_third_party"
                  title="Third Party"
                  list={project.third_party}
                />
              )}
            </aside>
          </div>
          <div className="buttons">
            <Button />
            <Button />
          </div>
          <Image
            src={project.preview_image}
            width="1920"
            height="1080"
            blurDataURL={project.preview_image}
            placeholder="blur"
          />
        </div>
      </section>
    </div>
  );
}

export default ProjectDetails;

export async function getStaticPaths() {
  const paths = myProjects.map((project) => {
    return { params: { projectId: `${project.id}` } };
  });

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps(context) {
  const { params } = context;
  const project = myProjects.find((project) => project.id === params.projectId);
  return {
    props: { project },
  };
}
