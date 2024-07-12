//reference
const PHOTOS_GALLERIES = document.querySelectorAll(".photo img");
const FULL_SCREEN_CONTAINER = document.getElementById("fullscreenContainer");
const FULL_SCREEN_IMAGE = document.getElementById("fullscreenImage");
const IMAGES = document.querySelectorAll(".carousel-image");
const BUTTON_NEXT = document.getElementById("next");
const BUTTON_PREVIOUS = document.getElementById("prev");
 
let currentIndex = 0;

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
 

  function showImage(index) {
    IMAGES.forEach((img, i) => {
      img.classList.toggle("active", i === index);
    });
  }

  BUTTON_PREVIOUS.addEventListener("click", function () {
    currentIndex = currentIndex > 0 ? currentIndex - 1 : IMAGES.length - 1;
    showImage(currentIndex);
  });

  BUTTON_NEXT.addEventListener("click", function () {
    currentIndex = currentIndex < IMAGES.length - 1 ? currentIndex + 1 : 0;
    showImage(currentIndex);
  });

  // Initialize the carousel by showing the first image
  showImage(currentIndex);

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
