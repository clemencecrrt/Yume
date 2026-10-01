console.log("behavior.js is running");


const title = document.querySelector(".page-title");
const shoutButton = document.querySelector(".shout-button");

function sayHello() {
  title.textContent = "WELCOME TO YUME";
}

shoutButton.addEventListener("click", sayHello);


const code = document.querySelector(".booking-code");
const copyButton = document.querySelector(".copy-code");

function copyCode() {
  navigator.clipboard.writeText(code.textContent);
  copyButton.textContent = "Copied!";

  setTimeout(function () {
    copyButton.textContent = "Copy booking code";
  }, 2000);
}

copyButton.addEventListener("click", copyCode);