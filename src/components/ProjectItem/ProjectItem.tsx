import { Project } from "../../common/project-model";
import Counter from "../Counter/Counter";
import "./ProjectItem.scss";

interface ProjectItemProps {
  project: Project;
  title: string;
  addProject: (project: Project) => void;
  deleteProject: (project: Project) => void;
}

const ProjectItem: React.FC<ProjectItemProps> = ({
  project,
  title,
  addProject,
  deleteProject,
}) => {

  const changeStatusHandler = () => {
    project.statusActive = !project.statusActive;
    addProject(project);
  };

  const deleteHandler = () => {
    deleteProject(project);
  };

  return (
    <div className="project">
      <h6 className="project__header">{project.name}</h6>
      <div className="project__details-wrapper">
        <div className="project__details project__details--left">
          <p className="project__details-item">
            DESCRIPTION: {project.description}
          </p>
          <p className="project__details-item">PERSONS: {project.persons}</p>
          <p className="project__details-item">DEADLINE: {project.deadline}</p>
        </div>
        <div className="project__details project__details--right">
          <Counter deadline={project.deadline}/>
        </div>
      </div>
      <div className="project__buttons-wrapper">
        <button
          className="project__button"
          onClick={changeStatusHandler}
        >
          SET AS {title === "ONGOING" ? "FINISHED" : "ONGOING"}
        </button>
        <button className="project__button" onClick={deleteHandler}>
          DELETE
        </button>
      </div>
    </div>
  );
};

export default ProjectItem;
