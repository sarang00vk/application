const psb = document.getElementById("previousSlide");
const nsb = document.getElementById("nextSlide");
const chv = document.querySelector(".presentation .chapter:first-child");
const positionIndicator = document.querySelector(".titles .position");
let currentSlideIndex = 0;

function updateSlide() {
  psb.innerHTML = currentSlideIndex + 1;
  chv.style.transform = `translateX(${-100 * currentSlideIndex}vw)`;
}

nsb.addEventListener("click", () => {
  if (currentSlideIndex < chv.childElementCount - 1) {
    currentSlideIndex++;
    updateSlide();
  }
});

psb.addEventListener("click", () => {
  if (currentSlideIndex > 0) {
    currentSlideIndex--;
    updateSlide();
  }
});
