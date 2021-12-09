import ProjectItem from "../ProjectItem/ProjectItem";
import "./ProjectsList.scss";

const ProjectsList: React.FC = () => {
    return (
        <div className="projects">
            <h5 className="projects__header">NEW PROJECTS</h5>
            <ul className="projects__list">
                <ProjectItem/>
                <ProjectItem/>
                <ProjectItem/>
            </ul>
        </div>
    )
};

export default ProjectsList;