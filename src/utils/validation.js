export const validateName = (name) => {
  let error = false;

  if (!name.length) {
    error = true;
  }
  const data = name.trim();
  const isAlpha = /^[a-zA-Z]*$/.test(data);
  if (!isAlpha) {
    error = true;
  }

  console.log(error);
  return error;
};

export const validateEmail = (email) => {
  const data = email.trim();
  const containAtSymbol = /@/.test(data);
  if (!containAtSymbol) {
    console.log("@");
    return "The email address must conatain @";
  }
  const isEmailValid = /\S+@\S+\.\S+/.test(data);
  return !isEmailValid ? "Email is invalis" : "";
};
