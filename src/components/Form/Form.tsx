import "./Form.scss";

const Form = () => {
    return (
        <section className="form">
            <form className="form__form">
                <div className="form__input-wrapper">
                    <label className="form__label">Project Name: </label>
                    <input className="form__input" type="text"></input>
                </div>
                <div className="form__input-wrapper">
                    <label className="form__label">Number of persons: </label>
                    <input className="form__input" type="number"></input>
                </div>
                <div className="form__input-wrapper">
                    <label className="form__label">Deadline: </label>
                    <input className="form__input" type="date"></input>
                </div>
                <div className="form__input-wrapper form__input-wrapper--desc">
                    <label className="form__label">Description: </label>
                    <input className="form__input" type="textarea"></input>
                </div>
                <button className="form__button">ADD A NEW PROJECT</button>
            </form>
        </section>
    )
};

export default Form;