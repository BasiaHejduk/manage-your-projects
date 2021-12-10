import ProjectItem from "../ProjectItem/ProjectItem";
import { Project } from "../../common/project-mode";
import "./ProjectsList.scss";

interface ProjectListProps {
    title: string,
    projects: Project[],
    addProject: (project: Project) => void;
}

const ProjectsList: React.FC<ProjectListProps> = ({title, projects, addProject}) => {
    return (
        <div className="projects">
            <h5 className="projects__header">{title} PROJECTS</h5>
            <ul className="projects__list">
                {
                    projects.map((project, i) => {
                        return <li key={i}><ProjectItem project={project} title={title} addProject={addProject}/></li>
                    })
                }
            </ul>
        </div>
    )
};

export default ProjectsList;