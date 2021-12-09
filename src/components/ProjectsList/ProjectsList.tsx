import ProjectItem from "../ProjectItem/ProjectItem";
import { Project } from "../../common/project-mode";
import "./ProjectsList.scss";

interface ProjectListProps {
    title: string,
    projects: Project[]
}

const ProjectsList: React.FC<ProjectListProps> = ({title, projects}) => {
    return (
        <div className="projects">
            <h5 className="projects__header">{title} PROJECTS</h5>
            <ul className="projects__list">
                {
                    projects.map((project, i) => {
                        return <li key={i}><ProjectItem project={project} title={title}/></li>
                    })
                }
                {/* <ProjectItem/>
                <ProjectItem/>
                <ProjectItem/> */}
            </ul>
        </div>
    )
};

export default ProjectsList;