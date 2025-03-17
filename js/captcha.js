const form = document.getElementById("contact-form");
const errorMsg = document.getElementById("captcha-error");
form.addEventListener("submit", function (e) {
  errorMsg.style.display = "none";
  const hCaptcha = form.querySelector(
    "textarea[name=h-captcha-response]"
  ).value;

  if (!hCaptcha) {
    e.preventDefault();
    errorMsg.style.display = "block";
    return;
  }
});
