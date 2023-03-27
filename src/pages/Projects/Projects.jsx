import Project from "../../components/Project/Project"
import {projects} from "../../helpers.js/projectList" 
import "./Projects.css"

const Projects = () => {
  return (

    <div>

        <section className="section">
        <div className="container">
          <h1 className="section__title">Projects</h1>

          <ul className="projects__list">
            {projects.map((project,index)=>{
                return <Project key = {index} img={project.img} title={project.title} id = {index} />
            })}
          </ul>

        </div>
        </section>

    </div>

  );
};

export default Projects;
