const email = document.getElementById("mail");

email.addEventListener("input", (event) => {
    email.setCustomValidity("");
  if (!email.validity.valid)
  {
    return
  }
  if(!email.value.endsWith("@email.com")){
    email.setCustomValidity('Please dont use this email')

  }
});