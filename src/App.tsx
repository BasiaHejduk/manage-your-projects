import React from 'react';
import Form from './components/Form/Form';
import Header from './components/Header/Header';
import ProjectsContainer from './components/ProjectsContainer/ProjectsContainer';
import './App.scss';
import './common/reset.scss';

const App: React.FC = () => {
  return (
    <div className="App">
      <Header/>
      <Form/>
      <ProjectsContainer/>
    </div>
  )
}

export default App;
