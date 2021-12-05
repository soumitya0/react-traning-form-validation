import { useState } from "react";
import "./App.css";

import { validateEmail, validateName } from "./utils/validation";

const InitialState = {
  firstName: "",
  lastName: "",
  email: "",
  firstNameError: "",
  lastNameError: "",
  emailError: "",
};
function App() {
  const [formData, setFormData] = useState(InitialState);

  const onFormInput = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validateinput = (e) => {
    const { name, value } = e.target;

    let errorField = `${name}Error`;
    let validation;
    switch (name) {
      case "firstName":
      case "lastName":
        validation = validateName(value);
        break;

      case "email":
        validation = validateEmail(value);
    }

    setFormData({ ...formData, [errorField]: validation });
  };
  console.log(formData);
  return (
    <div>
      <input
        name="firstName"
        value={formData.firstName}
        onChange={onFormInput}
        className={formData.firstNameError ? "error" : ""}
        onBlur={validateinput}
      />
      <input
        name="lastName"
        value={formData.lastName}
        onChange={onFormInput}
        onBlur={validateinput}
        className={formData.lastNameError ? "error" : ""}
      />
      <input
        name="email"
        value={formData.email}
        onChange={onFormInput}
        onBlur={validateinput}
      />
      <small>{formData.emailError}</small>
    </div>
  );
}

export default App;
