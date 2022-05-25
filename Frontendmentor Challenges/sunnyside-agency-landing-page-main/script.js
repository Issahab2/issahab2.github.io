const canvas = document.querySelector(".canvas");
const hambuger = document.querySelector(".hamburger");
const triangle = document.querySelector(".triangle");
const closeCanvas = document.querySelector(".close-canvas");


hambuger.addEventListener("click", () => {
    canvas.classList.toggle("none");
    triangle.classList.toggle("none");
    closeCanvas.classList.toggle("none");
});



closeCanvas.addEventListener("click", () => {
    canvas.classList.toggle("none");
    triangle.classList.toggle("none");
    closeCanvas.classList.toggle("none");
});