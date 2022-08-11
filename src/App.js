import "./App.css";
import { useState } from "react";

function App() {
  const [enteredName, setEnteredName] = useState(" ");
  const [enteredLastname, setEnteredLastName] = useState(" ");
  const [enteredEmail, setEnteredEmail] = useState(" ");

  const [enteredNameIsValid, setEnteredNameIsValid] = useState(false);
  const [enteredNameTouched, setEnteredNameTouched] = useState(false);

  const nameInputChangeHandler = (event) => {
    setEnteredName(event.target.value);

    if (event.target.value.trim() !== "") {
      setEnteredNameIsValid(true);
    }
  };

  const nameInputBlurHandler = (event) => {
    setEnteredNameTouched(true)

    if (enteredName.trim() === "") {
      setEnteredNameIsValid(false);
    }
  }



  const lastNameInputChangeHandler = (event) => {
    setEnteredLastName(event.target.value);
  };





  const emailInputChangeHandler = (event) => {
    setEnteredEmail(event.target.value);
  };






  const formSubmitHandler = (event) => {
    event.preventDefault();

    setEnteredNameTouched(true);


    if (enteredName.trim() === "") {
      setEnteredNameIsValid(false);
      return;
    }

    setEnteredNameIsValid(true);

    setEnteredName("");
  };

  const nameInputInvalid = !enteredNameIsValid && enteredNameTouched;
  const nameInputClasses = nameInputInvalid
    ? "form-control invalid"
    : "form-control ";

  return (
    <div>
      <h1>Basic Form</h1>
      <form onSubmit={formSubmitHandler}>
        <div className={nameInputClasses}>
          <label htmlFor="name">Your name</label>
          <input
            id="name"
            type="text"
            onChange={nameInputChangeHandler}
            value={enteredName}
            onBlur={nameInputBlurHandler}
          ></input>
          {nameInputInvalid && (
            <p className="error-text">Name must not be empty </p>
          )}
        </div>
        <div className="form-control">
          <label htmlFor="lastname">Last name</label>
          <input
            id="lastname"
            type="text"
            onChange={lastNameInputChangeHandler}
            
          ></input>
        </div>
        <div className="form-control">
          <label htmlFor="email">Your email</label>
          <input
            id="email"
            type="email"
            onChange={emailInputChangeHandler}
          ></input>
        </div>
        <div>
          <button>Submit</button>
        </div>
      </form>
    </div>
  );
}

export default App;
