import React, { useState } from 'react';
import Form from './components/Form/Form';
import Header from './components/Header/Header';
import ProjectsContainer from './components/ProjectsContainer/ProjectsContainer';
import { Project } from './common/project-mode';
import './App.scss';
import './common/reset.scss';

const newProject: Project = {
  name: "Test Project",
  persons: "3",
  description: "Lorem ipsum dolor sit amet....",
  deadline: "data"
}

const App: React.FC = () => {
  const [ongoingProjects, setOngoingProjects] = useState<Project[]>([newProject]);
  const [finishedProjects, setFinishedProjects] = useState<Project[]>([]);

  const addNewProject = (newProject: Project) => {
    setOngoingProjects(prevState => [...prevState, newProject])
  };

  return (
    <div className="App">
      <Header/>
      <Form addNewProject={addNewProject}/>
      <ProjectsContainer ongoing={ongoingProjects} finished={finishedProjects}/>
    </div>
  )
}

export default App;
