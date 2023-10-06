/**
 * Autor: Alejandro Santos
 * Github repository:
 */

const nameError = document.getElementById("name-error");
const emailError = document.getElementById("email-error");
const passwordError = document.getElementById("password-error");

// Validar que nombre no esté vacío
const validarNombre = (name) => {
  if (name === "") {
    nameError.classList.add("visible");
    return false;
  } else {
    nameError.classList.remove("visible");
    return true;
  }
};

// Validar que el correo electrónico no esté vacío
const validarEmail = (email) => {
  const validRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

  if (email.match(validRegex)) {
    emailError.classList.remove("visible");
    return true;
  } else {
    emailError.classList.add("visible");
    return false;
  }
};

// Validar que la contraseña tenga al menos 8 caracteres
const validarContrasena = (password) => {
  if (password.length < 8) {
    passwordError.classList.add("visible");
    return false;
  } else {
    passwordError.classList.remove("visible");
    return true;
  }
};

// Validar todos los campos del formulario
const validarFormulario = () => {
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  return (
    validarNombre(name) && validarEmail(email) && validarContrasena(password)
  );
};

// Adignar la función enviarFormulario al evento onsubmit del formulario
document.getElementById("register-form").onsubmit = () => {
  return validarFormulario();
};

// Enviar el formulario si todos los campos son válidos
const enviarFormulario = () => {
  if (validarFormulario()) {
    alert("Form sent correctly");
    return true;
  } else {
    return false;
  }
};
