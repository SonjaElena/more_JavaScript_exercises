document.addEventListener("DOMContentLoaded", function () {
  const body = document.body;
  const toggleButton = document.getElementById("toggleButton");
  const siteTitle = document.getElementById("siteTitle");

  let isLightOn = true;

  //  Wird auf den Button geklickt, ändert sich das Licht von true zu false
  toggleButton.addEventListener("click", function () {
    isLightOn = !isLightOn;

    // Ändern der Hintergrundfarbe mit Animation
    body.style.backgroundColor = isLightOn ? "white" : "black";

    // Ändern des Seitentitels basierend auf dem Zustand des Lichts
    siteTitle.textContent = isLightOn ? "Good Morning" : "Good Night";

    // Ändern der Schriftfarbe des Seitentitels basierend auf dem Zustand des Lichts
    siteTitle.style.color = isLightOn ? "black" : "white";
  });
});
