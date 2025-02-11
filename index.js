function validateForm() {
  let isValid = true;

  let name = document.getElementById("fullName").value.trim();
  let email = document.getElementById("email").value.trim();
  let message = document.getElementById("message").value.trim();

  let nameError = document.getElementById("nameError");
  let emailError = document.getElementById("emailError");
  let messageError = document.getElementById("messageError");

  if (name === "") {
    nameError.classList.remove("d-none");
    isValid = false;
  } else {
    nameError.classList.add("d-none");
  }

  if (email === "" || !email.includes("@")) {
    emailError.classList.remove("d-none");
    isValid = false;
  } else {
    emailError.classList.add("d-none");
  }

  if (message === "") {
    messageError.classList.remove("d-none");
    isValid = false;
  } else {
    messageError.classList.add("d-none");
  }

  if (isValid) {
    document.getElementById("successPopup").classList.remove("d-none");
  }
}

function closePopup() {
  document.getElementById("successPopup").classList.add("d-none");
}