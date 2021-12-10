import ProjectItem from "../ProjectItem/ProjectItem";
import { Project } from "../../common/project-model";
import "./ProjectsList.scss";

interface ProjectListProps {
  title: string;
  projects: Project[];
  addProject: (project: Project) => void;
  deleteProject: (project: Project) => void;
}

const ProjectsList: React.FC<ProjectListProps> = ({
  title,
  projects,
  addProject,
  deleteProject,
}) => {
  return (
    <div className="projects">
      <h5 className="projects__header">{title} PROJECTS</h5>
      <ul className="projects__list">
        {projects.map((project, i) => {
          return (
            <li key={i}>
              <ProjectItem
                project={project}
                title={title}
                addProject={addProject}
                deleteProject={deleteProject}
              />
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default ProjectsList;
