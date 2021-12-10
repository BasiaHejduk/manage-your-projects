import React, { useState } from "react";
import { Project } from "../../common/project-model";
import { validate, Validatable } from "../../common/validation";
import "./Form.scss";

interface FormProps {
  addProject: (project: Project) => void;
}

const Form: React.FC<FormProps> = ({ addProject }) => {
  const [projectName, setProjectName] = useState<string>("");
  const [persons, setPersons] = useState<string>("");
  const [deadline, setDeadline] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [alert, setAlert] = useState<boolean>(false);

  const nameValidatable: Validatable = {
    value: projectName,
    required: true,
    minLength: 1,
  };
  const personsValidatable: Validatable = {
    value: persons,
    required: true,
    minLength: 1
  };
  const deadlineValidatable: Validatable = {
    value: deadline,
    required: true,
    minLength: 5
  };
  const descriptionValidatable: Validatable = {
    value: description,
    required: true,
    minLength: 10,
    maxLength: 150
  };

  const addProjectHandler = (event: React.FormEvent) => {
    event.preventDefault();
    if (
      !validate(nameValidatable) ||
      !validate(personsValidatable) ||
      !validate(deadlineValidatable) ||
      !validate(descriptionValidatable)
    ) {
      setAlert(true);
    } else {
      setAlert(false);
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
    }
  };

  return (
    <section className="form">
      <h2 className="form__header">CREATE YOUR PROJECT:</h2>
      <form className="form__form" onSubmit={addProjectHandler}>
        <div className="form__input-wrapper">
          <label className="form__label">Project name: </label>
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
            type="date"
            value={deadline}
            onChange={(e) => setDeadline(e.target.value)}
          ></input>
        </div>
        <div className="form__input-wrapper form__input-wrapper--desc">
          <label className="form__label">Description <br/> (max 150 char.): </label>
          <textarea
            className="form__input form__input--desc"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          ></textarea>
        </div>
        {alert ? <p className="form__alert">Invalid inputs! Please correct them.</p> : null}
        <button className="form__button" type="submit">
          ADD A NEW PROJECT
        </button>
      </form>
    </section>
  );
};

export default Form;
