import { Project } from "../../common/project-model";
import ProjectsList from "../ProjectsList/ProjectsList";
import "./ProjectsContainer.scss";

interface ProjectContainerProps {
  ongoing: Project[];
  finished: Project[];
  addProject: (project: Project) => void;
  deleteProject: (project: Project) => void;
}

const ProjectsContainer: React.FC<ProjectContainerProps> = ({
  ongoing,
  finished,
  addProject,
  deleteProject,
}) => {
  return (
    <section className="projects-container">
      <ProjectsList
        title={"ONGOING"}
        projects={ongoing}
        addProject={addProject}
        deleteProject={deleteProject}
      />
      <ProjectsList
        title={"FINISHED"}
        projects={finished}
        addProject={addProject}
        deleteProject={deleteProject}
      />
    </section>
  );
};

export default ProjectsContainer;
