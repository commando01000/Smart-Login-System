var loginEmail = document.getElementById("sign-in-email");
var loginPassword = document.getElementById("sign-in-password");
var successLoginMessage = document.getElementById("welcome-message");

var emailErrorMessage = document.getElementById("email-error-message");
var passwordErrorMessage = document.getElementById("password-error-message");

var errorForm = document.getElementById("box");

var closeErrorForm = document.getElementById("closeBtn");

closeErrorForm.addEventListener("click", function () {
  errorForm.className = errorForm.className.replace("d-flex", "d-none");
});

var users = [];

if (localStorage.getItem("users") !== null) {
  users = JSON.parse(localStorage.getItem("users"));
  console.log(users);
}

function validateLoginEmail() {
  var validRegexEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

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
    passwordErrorMessage.classList.replace(
      "invalid-feedback",
      "valid-feedback"
    );
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
    emailErrorMessage.classList.replace("invalid-feedback", "valid-feedback");
    return false;
  }
}

function login() {
  check_login = 0;
  if (validateLoginEmail() && validateLoginPassword()) {
    Email = validateLoginEmail();
    Password = validateLoginPassword();
    for (var i = 0; i < users.length; i++) {
      if (users[i].Email == Email && users[i].Password == Password) {
        window.location.href =
          "./home.html?username=" + encodeURIComponent(users[i].username);
      } else {
        check_login++;
      }
    }
    if (check_login == users.length) {
      errorForm.className = errorForm.className.replace("d-none", "d-flex");
    }
  }
}

function clearInput() {
  registerName.value = "";
  registerEmail.value = "";
  registerPassword.value = "";
}
