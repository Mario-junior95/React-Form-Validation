import React from "react";
import { validate } from "./validations";

const validateForm = (errors) => {
  let valid = true;
  Object.values(errors).forEach((val) => val.length > 0 && (valid = false));
  return valid;
};

const Register = () => {
  const [state, setState] = React.useState({
    fullName: null,
    email: null,
    password: null,
    errors: {
      fullName: "",
      email: "",
      password: ""
    }
  });

  const handleChange = (event) => {
    event.preventDefault();
    const { name, value } = event.target;
    let errors = { ...state.errors };

    validate(name, value, errors);
    setState({ errors, [name]: value });

    console.log(state);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (validateForm({ ...state.errors })) {
      console.info("Valid Form");
    } else {
      console.error("Invalid Form");
    }
  };

  const { errors } = state;

  console.log(state);

  return (
    <div className="wrapper">
      <div className="form-wrapper">
        <h2>Create Account</h2>
        <form onSubmit={handleSubmit} noValidate>
          <div className="fullName">
            <label htmlFor="fullName">Full Name</label>
            <input
              type="text"
              name="fullName"
              onChange={handleChange}
              noValidate
            />
            {errors.fullName.length > 0 && (
              <span className="error">{errors.fullName}</span>
            )}
          </div>
          <div className="email">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              onChange={handleChange}
              noValidate
            />
            {errors.email.length > 0 && (
              <span className="error">{errors.email}</span>
            )}
          </div>
          <div className="password">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              name="password"
              onChange={handleChange}
              noValidate
            />
            {errors.password.length > 0 && (
              <span className="error">{errors.password}</span>
            )}
          </div>
          <div className="info">
            <small>Password must be eight characters in length.</small>
          </div>
          <div className="submit">
            <button>Create</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
