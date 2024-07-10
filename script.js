//reference
const PHOTOS_GALLERIES = document.querySelectorAll(".photo img");
const FULL_SCREEN_CONTAINER = document.getElementById("fullscreenContainer");
const FULL_SCREEN_IMAGE = document.getElementById("fullscreenImage");

//attende le chargement de la page
document.addEventListener("DOMContentLoaded", function () {
  //gestione fullscreen
  PHOTOS_GALLERIES.forEach((photo) => {
    photo.addEventListener("click", () => {
      // event.preventDefault();
      console.log("clicked");
      FULL_SCREEN_IMAGE.src = photo.src;
      FULL_SCREEN_CONTAINER.style.visibility = "visible";
      console.log(FULL_SCREEN_CONTAINER);
    });
  });

  FULL_SCREEN_CONTAINER.addEventListener("click", () => {
    FULL_SCREEN_CONTAINER.style.visibility = "hidden";
  });

  //animation waves
  VANTA.WAVES({
    el: "body",
    mouseControls: true,
    touchControls: true,
    gyroControls: false,
    minHeight: 200.0,
    minWidth: 200.0,
    scale: 1.0,
    scaleMobile: 1.0,
  });
});
