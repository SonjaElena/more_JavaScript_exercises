function showpw() {
  let inputBox = document.getElementById("inputBox");
  let button = document.getElementById("button");

  if (inputBox.type === "text") {
    inputBox.type = "password";
    button.innerText = "Show Password";
  } else {
    inputBox.type = "text";
    button.innerText = "Hide Password";
  }
}
