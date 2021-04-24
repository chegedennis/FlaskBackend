let password = document.getElementById("password");
let confirmedPassword = document.getElementById("confirmedPassword");
let username = document.getElementById("username");
let email = document.getElementById("email");

let details = [];
details = (username, email);

const confirmPassword = function (e) {
  if (password.value != "" && details.value != "") {
    if (password.value === confirmedPassword.value) {
      document.querySelector(".success").style.display = "block";
      document.querySelector(".form").reset();
    } else {
      e.preventDefault();
      document.querySelector(".failure").style.display = "block";
    }
    setTimeout(function () {
      document.querySelector(".success").style.display = "none";
      document.querySelector(".failure").style.display = "none";
    }, 3000);
  } else {
    alert("Fill in all the fields");
  }
};
let submit = document
  .getElementById("submit")
  .addEventListener("click", confirmPassword);
