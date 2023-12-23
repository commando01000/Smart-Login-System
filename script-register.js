var registerName = document.getElementById("sign-up-name");
var registerEmail = document.getElementById("sign-up-email");
var registerPassword = document.getElementById("sign-up-password");

var successRegister = document.getElementById("valid-account");
successRegister.style.display = "none";

var emailErrorMessage = document.getElementById("email-error-message");
var nameErrorMessage = document.getElementById("name-error-message");
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

function validateRegisterEmail() {
  var validRegexEmail = /^[a-zA-Z0-9. _-]+@[a-zA-Z0-9. -]+\. [a-zA-Z]{2,4}$/;

  var Email = registerEmail.value;

  var validEmail = validRegexEmail.test(Email);

  if (validEmail) {
    registerEmail.classList.remove("is-invalid");
    registerEmail.classList.add("is-valid");
    emailErrorMessage.style.display = "none";
    return Email;
  } else {
    registerEmail.classList.remove("is-valid");
    registerEmail.classList.add("is-invalid");
    emailErrorMessage.style.display = "block";
    successRegister.style.display = "none";
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
    return Password;
  } else {
    registerPassword.classList.remove("is-valid");
    registerPassword.classList.add("is-invalid");
    passwordErrorMessage.style.display = "block";
    successRegister.style.display = "none";
    return false;
  }
}

function validateName() {
  const pattern = /^[a-zA-Z0-9\s]{3,}$/;

  var username = registerName.value;

  var validName = pattern.test(username);

  if (validName) {
    registerName.classList.remove("is-invalid");
    registerName.classList.add("is-valid");
    nameErrorMessage.style.display = "none";
    return username;
  } else {
    registerName.classList.remove("is-valid");
    registerName.classList.add("is-invalid");
    nameErrorMessage.style.display = "block";
    successRegister.style.display = "none";
    return false;
  }
}

function Register() {
  if (validateName() && validateRegisterEmail() && validateRegisterPassword()) {
    username = validateName();
    Email = validateRegisterEmail();
    Password = validateRegisterPassword();

    var check_availability = 0;

    var user = {
      username: username,
      Email: Email,
      Password: Password,
    };

    for (var i = 0; i < users.length; i++) {
      if (users[i].username != user.username && users[i].Email != user.Email) {
        check_availability++;
      }
    }
    if (check_availability == users.length) {
      users.push(user);
      localStorage.setItem("users", JSON.stringify(users));
      successRegister.style.display = "block";
      clearInput();
    } else {
      errorForm.className = errorForm.className.replace("d-none", "d-flex");
      successRegister.style.display = "none";
      clearInput();
    }
  }
}

function clearInput() {
  registerName.value = "";
  registerEmail.value = "";
  registerPassword.value = "";
}
