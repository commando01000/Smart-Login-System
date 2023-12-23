var loginEmail = document.getElementById("sign-in-email");
var loginPassword = document.getElementById("sign-in-password");
var successLoginMessage = document.getElementById("welcome-message");

var emailErrorMessage = document.getElementById("email-error-message");
var passwordErrorMessage = document.getElementById("password-error-message");

var users = [];

if (localStorage.getItem("users") !== null) {
  users = JSON.parse(localStorage.getItem("users"));
  console.log(users);
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
    return Email;
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
    return Password;
  } else {
    loginPassword.classList.remove("is-valid");
    loginPassword.classList.add("is-invalid");
    passwordErrorMessage.style.display = "block";
    return false;
  }
}

function login() {
  if (validateLoginEmail() && validateLoginPassword()) {
    Email = validateLoginEmail();
    Password = validateLoginPassword();
    for (var i = 0; i < users.length; i++) {
      if (users[i].Email == Email && users[i].Password == Password) {
        // Add username parameter to the URL
        window.location.href =
          "./home.html?username=" + encodeURIComponent(users[i].username);
      }
    }
  }
}

function clearInput() {
  registerName.value = "";
  registerEmail.value = "";
  registerPassword.value = "";
}
