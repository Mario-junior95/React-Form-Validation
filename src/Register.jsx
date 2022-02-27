import React from "react";
import { validate } from "./validations";

const validEmailRegex = RegExp(
  /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
);

const validateForm = (errors) => {
  let valid = true;
  Object.values(errors).forEach(
    // if we have an error string set valid to false
    (val) => val.length > 0 && (valid = false)
  );
  return valid;
};

const Register = () => {
  const [values, setValues] = React.useState({
    fullName: null,
    email: null,
    password: null,
    errors: {
      fullName: "",
      email: "",
      password: ""
    }
  });

  const handleChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    // let errors = { ...values.errors };
    // switch (name) {
    //   case "fullName":
    //     errors.fullName =
    //       value.length < 5 ? "Full Name must be 5 character long!" : "";
    //     break;
    //   case "email":
    //     errors.email = validEmailRegex.test(value) ? "" : "Email is not valid";
    //     break;
    //   case "password":
    //     errors.password =
    //       value.length < 8 ? "Password must be 8 characters long!" : "";
    //     break;
    //   default:
    //     break;
    // }
    // setValues({ errors, [name]: value });
    setValues(validate(name, value));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // if (validateForm({ ...values.errors })) {
    //   console.info("Valid Form");
    // } else {
    //   console.error("Invalid Form");
    // }
    if (validateForm({ ...values })) {
      console.info("Valid Form");
    } else {
      console.error("Invalid Form");
    }
  };

  return (
    <div className="wrapper">
      <div className="form-wrapper">
        <h2>Register</h2>
        <form onSubmit={handleSubmit} noValidate>
          <div className="fullName">
            <label htmlFor="fullName">Full Name</label>
            <input
              type="text"
              name="fullName"
              onChange={handleChange}
              noValidate
            />
            <div>
              {/* {values.errors.fullName.length > 0 && (
                <span className="error">{values.fullName.email}</span>
              )} */}
              {values.fullName && values.fullName.length > 0 && (
                <span className="error">{values.fullName}</span>
              )}
            </div>
          </div>
          <div className="email">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              onChange={handleChange}
              noValidate
            />
            <div>
              {/* {values.errors.email.length > 0 && (
                <span className="error">{values.errors.email}</span>
              )} */}
              {values.email && values.email.length > 0 && (
                <span className="error">{values.email}</span>
              )}
            </div>
          </div>
          <div className="password">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              name="password"
              onChange={handleChange}
              noValidate
            />
            <div>
              {/* {values.errors.password.length > 0 && (
                <span className="error">{values.errors.password}</span>
              )} */}
              {values.password && values.password.length > 0 && (
                <span className="error">{values.password}</span>
              )}
            </div>
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
