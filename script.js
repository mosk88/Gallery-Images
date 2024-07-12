
//reference
const PHOTOS_GALLERIES = document.querySelectorAll(".photo img");
const FULL_SCREEN_CONTAINER = document.getElementById("fullscreenContainer");
const FULL_SCREEN_IMAGE = document.getElementById("fullscreenImage");
const IMAGES = document.querySelectorAll("#carousel figure");
const BUTTONS = document.querySelectorAll(".btn");
const CAROUSEL = document.getElementById("carousel");
const SCROLL = document.getElementById("scroll-down");
const NEXT_BUTTON = document.getElementById("next");
const PREV_BUTTON = document.getElementById("prev");
let increment = 40;
let cur = 0;
const FIGURES = document.getElementsByTagName("figure");
let index = 0;

//wait for the page to load
document.addEventListener("DOMContentLoaded", function () {
  //add click event listener to each photo
  PHOTOS_GALLERIES.forEach((photo) => {
    photo.addEventListener("click", () => {
      FULL_SCREEN_IMAGE.src = photo.src;
      FULL_SCREEN_CONTAINER.style.visibility = "visible";
    });
  });
  const KEY_FRAMES = [
    { transform: "scale(0.5)", opacity: 0.5 },
    { transform: "scale(1)", opacity: 1 },
    { transform: "scale(0.5)", opacity: 0.5 },
  ];
  const TIMING = {
    duration: 1000,
    iterations: Infinity,
    easing: "ease-in-out",
  };
  NEXT_BUTTON.animate(KEY_FRAMES, TIMING);
  PREV_BUTTON.animate(KEY_FRAMES.reverse(), TIMING);
  //add click event listener to close fullscreen
  FULL_SCREEN_CONTAINER.addEventListener("click", () => {
    FULL_SCREEN_CONTAINER.style.visibility = "hidden";
  });
  upDateImageCentral(index);
  //add click event listener to each button
  BUTTONS.forEach((BUTTONS) => {
    BUTTONS.addEventListener("click", function () {
      if (this.textContent === "prev") {
        cur += increment;
        upDateImageCentral(index);
      } else {
        cur -= increment;
        upDateImageCentral(index);
      }
      CAROUSEL.style.transform = `rotateY(${cur}deg)`;
    });
  });

  //add click event listener to each figure
  function upDateImageCentral(index) {
    FIGURES[index].classList.add("central");
  }

  AOS.init({
    duration: 1200,
    easing: "ease-in-sine",
    delay: 100,
  });

  //animation waves
    VANTA.WAVES({
      el: "nav",
      mouseControls: true,
      touchControls: true,
      gyroControls: false,
      minHeight: 100.0,
      minWidth: 200.0,
      scale: 1.0,
      scaleMobile: 1.0,
    });

  
});