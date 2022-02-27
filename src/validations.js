const validEmailRegex = RegExp(
  /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
);

const validate = (name, values) => {
  const errors = {};

  switch (name) {
    case "fullName":
      errors.fullName =
        values.length < 5 ? "Full Name must be 5 character long!" : "";
      break;
    case "email":
      errors.email = validEmailRegex.test(values) ? "" : "Email is not valid";
      break;
    case "password":
      errors.password =
        values.length < 8 ? "Password must be 8 characters long!" : "";
      break;
    default:
      break;
  }
  return errors;
};

export { validate };
