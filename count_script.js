let btnclick = document.getElementById("resetid");
let counternr = document.getElementById("counternr");
let counter = 0;
let main = document.querySelector("main");

// button reset
function btnreset() {
  btnclick.addEventListener("click", function () {
    counter = 0;
    counternr.innerText = counter;
    main.style.setProperty("--width", counter);
  });
}

// when to count up
main.addEventListener("click", counterup);
document.addEventListener("keydown", counterup);

function counterup(event) {
  if (event.key === "Enter" || event.key === " " || event.type === "click") {
    counter++;
    counternr.innerText = counter;
    main.style.setProperty("--width", counter);
  }
}
