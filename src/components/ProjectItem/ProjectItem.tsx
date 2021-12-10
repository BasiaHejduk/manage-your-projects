import { Project } from "../../common/project-mode";
import "./ProjectItem.scss";

interface ProjectItemProps {
  project: Project;
  title: string;
  addProject: (project: Project) => void;
}

const ProjectItem: React.FC<ProjectItemProps> = ({ project, title, addProject }) => {

  const changeStatusHandler = (project: Project) => {
    project.statusActive = !project.statusActive;
    addProject(project);
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
        </div>
        <div className="project__details project__details--right">
          <div className="project__details-item project__deadline">
            DEADLINE: {project.deadline}
            <p className="project__deadline-item">days: 152</p>
            <p className="project__deadline-item">hours: 14</p>
            <p className="project__deadline-item">seconds: 46</p>
          </div>
        </div>
      </div>
      <div className="project__buttons-wrapper">
        <button className="project__button" onClick={()=>changeStatusHandler(project)}>
          SET AS {title === "ONGOING" ? "FINISHED" : "ONGOING"}
        </button>
      </div>
    </div>
  );
};

export default ProjectItem;
