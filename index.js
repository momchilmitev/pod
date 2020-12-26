const sendForm = document.querySelector(".send-form");
const $error = document.querySelector(".error");
const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

sendForm.addEventListener("submit", (e) => {
  e.preventDefault();
  let message = "";
  const email = e.target[0].value;
  if (!email) {
    message = "Oops! Please add your email";
    $error.style.display = "block";
    $error.textContent = message;
  } else if (!emailRegex.test(email)) {
    message = "Oops! Please check your email";
    $error.style.display = "block";
    $error.textContent = message;
  } else {
    $error.style.display = "none";
  }
});
