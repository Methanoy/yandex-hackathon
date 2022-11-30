import './index.scss';


// Код для слайдера, потом перенесу. Артем
const slidesContainer = document.getElementById("slides-container");
const slide = document.querySelector(".slide");
const prevButton = document.getElementById("slide-arrow-prev");
const nextButton = document.getElementById("slide-arrow-next");

nextButton.addEventListener("click", () => {
  const slideWidth = slide.clientWidth;
  const part = slideWidth/4
  slidesContainer.scrollLeft += part;
});

prevButton.addEventListener("click", () => {
  const slideWidth = slide.clientWidth;
  const part = slideWidth/4
  slidesContainer.scrollLeft -= part;
});
