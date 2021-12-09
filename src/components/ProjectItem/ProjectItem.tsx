import "./ProjectItem.scss";

const ProjectItem: React.FC = () => {
    return (
        <div className="project">
            <h6 className="project__header">PROJECT NAME</h6>
            <div className="project__details-wrapper">
                <div className="project__details project__details--left">
                    <p className="project__details-item">DESCRIPTION: Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugit quas dolorum odit at ex, impedit labore obcaecati facere, soluta exercitationem facilis?</p>
                    <p className="project__details-item">PERSONS: 4</p>
                </div>
                <div className="project__details project__details--right">
                    <div className="project__details-item project__deadline">DEADLINE:
                        <p className="project__deadline-item">days: 156</p>
                        <p className="project__deadline-item">hours: 14</p>
                        <p className="project__deadline-item">seconds: 46</p>
                    </div>
                </div>
            </div>
            <div className="project__buttons-wrapper">
                <button className="project__button">SET AS FINISHED</button>
                <button className="project__button">SET AS ONGOING</button>
            </div>
        </div>
    )
};

export default ProjectItem;