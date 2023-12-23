var welcomeMessage = document.getElementById("welcome-message");

function getParameterByName(name, url) {
  url = window.location.href;
  name = name.replace(/[\[\]]/g, "\\$&");
  var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
    results = regex.exec(url);
  if (!results) return null;
  if (!results[2]) return "";
  return decodeURIComponent(results[2].replace(/\+/g, " "));
}

var username = getParameterByName("username");

if (username) {
  welcomeMessage.innerHTML = "Welcome, " + username;
}
