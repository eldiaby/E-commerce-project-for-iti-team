"use strict";
let form = document.getElementById("form");
let useName = document.getElementById("userName");
let email = document.getElementById("email");
let password = document.getElementById("password");

// Show input error message and add error class if input is empaty

function showErrormsg(userInput, messege) {
  let divInput = userInput.parentElement;
  divInput.className = "input error";
  let msg = divInput.querySelector("small");
  msg.innerText = messege;
}

function showSuccess(userInput) {
  let divInput = userInput.parentElement;
  divInput.className = "input success";
}

// inpets validation

function emailValidation(email) {
  return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
}

function passwordValidation(password) {
  // Assert a string has at least one special character.
  return String(password).match(/(?=.*[!@#$%^&*])/);
}

function useNamevalidation (userName) {
/^[A-Za-z][A-Za-z0-9_]{7,29}$/;


  return String(userName).match(/^[A-Za-z][A-Za-z0-9_]{7,29}$/);
}


// form validation
form.addEventListener("submit", function (elemant) {
  elemant.preventDefault();
  if (useName.value === ""){
    showErrormsg(useName, "user name is empaty")
  } else if (!useNamevalidation(useName.value)){
    showErrormsg(useName, "user name must have at least 8 chars")
  } else {
    showSuccess(useName)
  }
    if (email.value === "") {
      showErrormsg(email, "email is empaty ");
    } else if (!emailValidation(email.value)) {
      showErrormsg(email, "email is n't correct");
    } else {
      showSuccess(email);
    }
  if (password.value === "") {
    showErrormsg(password, "password is empaty ");
  } else if (!passwordValidation(password.value)) {
    showErrormsg(
      password,
      "password is not valid it has to have at least one special character "
    );
  } else {
    showSuccess(password);
  }
});