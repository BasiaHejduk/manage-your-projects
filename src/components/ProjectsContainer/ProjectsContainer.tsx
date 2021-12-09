import ProjectsList from "../ProjectsList/ProjectsList";
import "./ProjectsContainer.scss";

const ProjectsContainer: React.FC = () => {
    return (
        <section className="projects-container">
            <ProjectsList/>
            <ProjectsList/>
        </section>
    )
};

export default ProjectsContainer