git remote add origin https://github.com/commando01000/Smart-Login-System.gitvar loginEmail = document.getElementById("sign-in-email");
var loginPassword = document.getElementById("sign-in-password");
var registerName = document.getElementById("sign-up-name");
var registerEmail = document.getElementById("sign-up-email");
var registerPassword = document.getElementById("sign-up-password");
var emailErrorMessage = document.getElementById("email-error-message");
var nameErrorMessage = document.getElementById("name-error-message");
var passwordErrorMessage = document.getElementById("password-error-message");

if (localStorage.getItem("users") !== null) {
  users = JSON.parse(localStorage.getItem("users"));
}

function validateLoginEmail() {
  var validRegexEmail =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

  var Email = loginEmail.value;

  var validEmail = validRegexEmail.test(Email);

  if (validEmail) {
    loginEmail.classList.remove("is-invalid");
    loginEmail.classList.add("is-valid");
    emailErrorMessage.style.display = "none";
    return true;
  } else {
    loginEmail.classList.remove("is-valid");
    loginEmail.classList.add("is-invalid");
    emailErrorMessage.style.display = "block";
    return false;
  }
}

function validateLoginPassword() {
  var validRegexPassword =
    /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,}$/;

  var Password = loginPassword.value;

  var validPassword = validRegexPassword.test(Password);

  if (validPassword) {
    loginPassword.classList.remove("is-invalid");
    loginPassword.classList.add("is-valid");
    passwordErrorMessage.style.display = "none";
    return true;
  } else {
    loginPassword.classList.remove("is-valid");
    loginPassword.classList.add("is-invalid");
    passwordErrorMessage.style.display = "block";
    return false;
  }
}

function validateRegisterEmail() {
  var validRegexEmail =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

  var Email = registerEmail.value;

  var validEmail = validRegexEmail.test(Email);

  if (validEmail) {
    registerEmail.classList.remove("is-invalid");
    registerEmail.classList.add("is-valid");
    emailErrorMessage.style.display = "none";
    return true;
  } else {
    registerEmail.classList.remove("is-valid");
    registerEmail.classList.add("is-invalid");
    emailErrorMessage.style.display = "block";
    return false;
  }
}

function validateRegisterPassword() {
  var validRegexPassword =
    /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,}$/;

  var Password = registerPassword.value;

  var validPassword = validRegexPassword.test(Password);

  if (validPassword) {
    registerPassword.classList.remove("is-invalid");
    registerPassword.classList.add("is-valid");
    passwordErrorMessage.style.display = "none";
    return true;
  } else {
    registerPassword.classList.remove("is-valid");
    registerPassword.classList.add("is-invalid");
    passwordErrorMessage.style.display = "block";
    return false;
  }
}

function validName() {
  const pattern = /^[a-zA-Z0-9\s]{3,}$/;

  var validName = pattern.test(registerName.value);

  if (validName) {
    registerName.classList.remove("is-invalid");
    registerName.classList.add("is-valid");
    nameErrorMessage.style.display = "none";
    return true;
  } else {
    registerName.classList.remove("is-valid");
    registerName.classList.add("is-invalid");
    nameErrorMessage.style.display = "block";
    return false;
  }
}

function login() {}

function Register() {}
