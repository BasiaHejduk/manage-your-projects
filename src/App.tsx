import React, { useState } from "react";
import Form from "./components/Form/Form";
import Header from "./components/Header/Header";
import ProjectsContainer from "./components/ProjectsContainer/ProjectsContainer";
import { Project } from "./common/project-model";
import "./App.scss";
import "./common/reset.scss";


const App: React.FC = () => {
  const [ongoingProjects, setOngoingProjects] = useState<Project[]>([]);
  const [finishedProjects, setFinishedProjects] = useState<Project[]>([]);
  
  const addProject = (newProject: Project) => {
    if (newProject.statusActive) {
      setOngoingProjects((prevState) => [...prevState, newProject]);
      setFinishedProjects(prevState => prevState.filter(project => !project.statusActive));
    }
    if (!newProject.statusActive) {
      setFinishedProjects((prevState) => [...prevState, newProject]);
      setOngoingProjects(prevState => prevState.filter(project => project.statusActive));
    }
  };

  const deleteProject = (projectToDelete: Project) => {
    setFinishedProjects(prevState => prevState.filter(project => project.name !== projectToDelete.name));
    setOngoingProjects(prevState => prevState.filter(project => project.name !== projectToDelete.name));
  };

  return (
    <div className="App">
      <Header />
      <Form addProject={addProject} />
      <ProjectsContainer
        ongoing={ongoingProjects}
        finished={finishedProjects}
        addProject={addProject}
        deleteProject={deleteProject}
      />
    </div>
  );
};

export default App;
