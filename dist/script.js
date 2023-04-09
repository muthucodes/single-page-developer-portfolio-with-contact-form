"use strict";

const selectElement = function (element) {
  return document.querySelector(element);
};

const obtainValue = function (element) {
  return element.value.trim();
};

const firstName = selectElement("#name-input-field");
const email = selectElement("#email-input-field");
const message = selectElement("#message-input-field");
const btnSubmit = selectElement(".btn-submit");

const iconHTML = `<i class="fa fa-solid fa-circle-exclamation error-icon"></i>`;

const validateInput = function (element) {
  if (obtainValue(element) === "") {
    let div = document.createElement("div");

    div.className = "error-msg";
    div.innerText = `Sorry, ${element.getAttribute(
      "placeholder"
    )} cannot be empty`;
    element.style.borderBottom = "1px solid red";
    element.parentElement.appendChild(div);
    element.insertAdjacentHTML("afterend", iconHTML);
  } else {
    element.style.borderBottom = "1px solid #4ee1a0";
  }
};

const validateEmail = function (element) {
  var emailRegex =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  if (obtainValue(element) !== "" && !obtainValue(element).match(emailRegex)) {
    let div = document.createElement("div");
    div.className = "error-msg";

    div.innerText = "Looks like this is not an email";

    element.style.borderBottom = "1px solid red";
    element.style.color = "red";

    element.parentElement.appendChild(div);
    element.insertAdjacentHTML("afterend", iconHTML);
  } else if (obtainValue(element).match(emailRegex)) {
    element.style.borderBottom = "1px solid #4ee1a0";
    element.style.color = "#4ee1a0";
  }
};

const resetErrors = function () {
  document.querySelectorAll(".error-msg").forEach((e) => {
    e.innerText = "";
    e.remove();
  });
  document.querySelectorAll("[id$=input-field]").forEach((e) => {
    // console.log(e.id);
    e.style.borderBottom = "1px solid white";
    e.style.color = "white";
  });
  document.querySelectorAll(".error-icon").forEach((e) => e.remove());
};

const init = function () {
  firstName.value = "";
  email.value = "";
  message.value = "";
};

window.onload = function () {
  init();
};

btnSubmit.addEventListener("click", function (e) {
  e.preventDefault();
  console.log("submit button clicked");
  resetErrors();
  validateInput(firstName);

  validateInput(email);
  validateEmail(email);
  validateInput(message);
});
