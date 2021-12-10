import { Project } from "../../common/project-mode";
import ProjectsList from "../ProjectsList/ProjectsList";
import "./ProjectsContainer.scss";

interface ProjectContainerProps {
    ongoing: Project[];
    finished: Project[];
    addProject: (project: Project) => void;
}

const ProjectsContainer: React.FC<ProjectContainerProps> = ({ongoing, finished, addProject}) => {
    return (
        <section className="projects-container">
            <ProjectsList title={"ONGOING"} projects={ongoing} addProject={addProject}/>
            <ProjectsList title={"FINISHED"} projects={finished} addProject={addProject}/>
        </section>
    )
};

export default ProjectsContainer;