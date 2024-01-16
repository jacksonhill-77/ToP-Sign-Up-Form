// need to troubleshoot this when I can actually test this in a proper browser

function checkPasswordsMatch() {
  const password = document.getElementById("password")
  const passwordConfirmed = document.getElementById("password-confirmed")
  if (password.value == passwordConfirmed.value) {
    return true
  } 
  return false
}

function displayError() {
  const passwordWarning = document.getElementById("password-warning") 
  passwordWarning.classList.remove("hidden")
}

const form = document.getElementById("personal-details");

form.addEventListener('submit', e => {
  if (!checkPasswordsMatch()) {
    e.preventDefault();
    displayError()
}
})
