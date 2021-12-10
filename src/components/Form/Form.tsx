import React, { useState } from "react";
import { Project } from "../../common/project-mode";
import "./Form.scss";

interface FormProps {
  addProject: (project: Project) => void;
}

const Form: React.FC<FormProps> = ({ addProject }) => {
  const [projectName, setProjectName] = useState<string>("");
  const [persons, setPersons] = useState<string>("");
  const [deadline, setDeadline] = useState<string>("");
  const [description, setDescription] = useState<string>("");

  const addProjectHandler = (event: React.FormEvent) => {
    event.preventDefault();
    addProject({
      name: projectName,
      persons: persons,
      description: description,
      deadline: deadline,
      statusActive: true
    });
    setProjectName("");
    setPersons("");
    setDeadline("");
    setDescription("");
  };

  return (
    <section className="form">
      <h2 className="form__header">CREATE YOUR PROJECT:</h2>
      <form className="form__form" onSubmit={addProjectHandler}>
        <div className="form__input-wrapper">
          <label className="form__label">Project Name: </label>
          <input
            className="form__input"
            type="text"
            value={projectName}
            onChange={(e) => setProjectName(e.target.value)}
          ></input>
        </div>
        <div className="form__input-wrapper">
          <label className="form__label">Number of persons: </label>
          <input
            className="form__input"
            type="number"
            value={persons}
            onChange={(e) => setPersons(e.target.value)}
          ></input>
        </div>
        <div className="form__input-wrapper">
          <label className="form__label">Deadline: </label>
          <input
            className="form__input"
            type="text"
            value={deadline}
            onChange={(e) => setDeadline(e.target.value)}
          ></input>
        </div>
        <div className="form__input-wrapper form__input-wrapper--desc">
          <label className="form__label">Description: </label>
          <textarea
            className="form__input form__input--desc"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          ></textarea>
        </div>
        <button className="form__button" type="submit">
          ADD A NEW PROJECT
        </button>
      </form>
    </section>
  );
};

export default Form;
