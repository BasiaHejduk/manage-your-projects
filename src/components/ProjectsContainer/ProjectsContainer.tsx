import { Project } from "../../common/project-mode";
import ProjectsList from "../ProjectsList/ProjectsList";
import "./ProjectsContainer.scss";

interface ProjectContainerProps {
    ongoing: Project[];
    finished: Project[];
}

const ProjectsContainer: React.FC<ProjectContainerProps> = ({ongoing, finished}) => {
    return (
        <section className="projects-container">
            <ProjectsList title={"ONGOING"} projects={ongoing}/>
            <ProjectsList title={"FINISHED"} projects={finished}/>
        </section>
    )
};

export default ProjectsContainer