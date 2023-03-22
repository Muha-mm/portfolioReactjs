import { useParams } from "react-router-dom";
import GithubBtn from "../../components/githubBtn/GithubBtn";
import { projects } from "../../helpers.js/projectList";

const ProjectPage = () => {
  const { id } = useParams();
  const project = projects[id];

  return (
    <main className="section">
      <div className="container">
        <div className="projectDetails">
          <h1 className="section__title">{project.title}</h1>
          <img
            className="projectDetails__img"
            src={project.imgBig}
            alt={project.title}
          />

          <div className="projectDetails__description">
            <p>Skills: {project.skills}</p>
          </div>

          <GithubBtn link={project.gitHubLink} />

        </div>
      </div>
    </main>
  );
};

export default ProjectPage;
