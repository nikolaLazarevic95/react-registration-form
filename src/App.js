import "./App.css";
import { useState } from "react";

function App() {
  const [enteredName, setEnteredName] = useState(" ");
  const [enteredLastname, setEnteredLastName] = useState(" ");
  const [enteredEmail, setEnteredEmail] = useState(" ");

  const [enteredNameIsValid, setEnteredNameIsValid] = useState(false);
  const [enteredNameTouched, setEnteredNameTouched] = useState(false);

  const [enteredEmailIsValid, setEmailIsValid] = useState(false);
  const [enteredEmailIsTouched, setEmailTouched] = useState(false);

  const [enteredLastnameIsValid, setLastnameIsValid] = useState(false);
  const [enteredLastnameTouched, setLastnameTouched] = useState(false);

  //--------------------------------------------------------------------
  const nameInputChangeHandler = (event) => {
    setEnteredName(event.target.value);

    if (event.target.value.trim() !== "") {
      setEnteredNameIsValid(true);
    }
  };

  const nameInputBlurHandler = (event) => {
    setEnteredNameTouched(true);

    if (enteredName.trim() === "") {
      setEnteredNameIsValid(false);
    }
  };

  // ----------------------------------------------------------------------

  const lastNameInputChangeHandler = (event) => {
    setEnteredLastName(event.target.value);

    if (event.target.value.trim() !== "") {
      setLastnameIsValid(true);
    }
  };

  const lastnameBlurHandler = (event) => {
    setLastnameTouched(true);

    if (enteredLastname.trim() === "") {
      setLastnameIsValid(false);
    }
  };

  // -------------------------------------------------------------------------------------
  const emailInputChangeHandler = (event) => {
    setEnteredEmail(event.target.value);

    if (event.target.value.trim() !== "") {
      setEmailIsValid(true);
    }
  };

  const emailInputBlurHandler = (event) => {
    setEmailTouched(true);

    if (enteredEmail.trim() !== "") {
      setEmailIsValid(true);
    }
  };

  // ----------------------------------------------------------------

  const formSubmitHandler = (event) => {
    event.preventDefault();

    setEnteredNameTouched(true);
    setEmailTouched(true);
    setLastnameTouched(true);

    if (enteredName.trim() === "") {
      setEnteredNameIsValid(false);
      return;
    }

    if (enteredEmail.trim() === "") {
      setEmailIsValid(false);
    }

    setEnteredNameIsValid(true);

    setEmailIsValid(true);

    setEnteredName("");
    setEnteredEmail("");
    setEnteredLastName("");
  };

  // ----------------------------------------------------------------------

  const nameInputInvalid = !enteredNameIsValid && enteredNameTouched;
  const nameInputClasses = nameInputInvalid
    ? "form-control invalid"
    : "form-control ";

  const emailInputInvalid = !enteredEmailIsValid && enteredEmailIsTouched;
  const emailInputClasses = emailInputInvalid
    ? "form-control invalid"
    : "form-control ";

  const lastnameInputInvalid =
    !enteredLastnameIsValid && enteredLastnameTouched;
  const lastnameInputClasses = lastnameInputInvalid
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
        <div className={lastnameInputClasses}>
          <label htmlFor="lastname">Last name</label>
          <input
            id="lastname"
            type="text"
            onChange={lastNameInputChangeHandler}
            value={enteredLastname}
            onBlur={lastnameBlurHandler}
          ></input>
          {lastnameInputInvalid && (
            <p className="error-text">Last name can't be empty</p>
          )}
        </div>
        <div className={emailInputClasses}>
          <label htmlFor="email">Your email</label>
          <input
            id="email"
            type="email"
            onChange={emailInputChangeHandler}
            value={enteredEmail}
            onBlur={emailInputBlurHandler}
          ></input>
          {emailInputInvalid && (
            <p className="error-text">Email must not be empty </p>
          )}
        </div>
        <div>
          <button>Submit</button>
        </div>
      </form>
    </div>
  );
}

export default App;
