import "./index.scss";

// Код для выпадающего списка формы
const selectSingle = document.querySelector(".select");
const selectSingleTitle = selectSingle.querySelector(".select__title");
const selectSingleLabels = selectSingle.querySelectorAll(".select__label");
// Код для слайдера, потом перенесу. Артем
const slidesContainer = document.getElementById("slides-container");
const slide = document.querySelector(".slide");
const prevButton = document.getElementById("slide-arrow-prev");
const nextButton = document.getElementById("slide-arrow-next");

// Toggle position-select menu
selectSingleTitle.addEventListener("click", () => {
  if ("active" === selectSingle.getAttribute("data-state")) {
    selectSingle.setAttribute("data-state", "");
  } else {
    selectSingle.setAttribute("data-state", "active");
  }
});

// Close when click to option
for (let i = 0; i < selectSingleLabels.length; i++) {
  selectSingleLabels[i].addEventListener("click", (evt) => {
    selectSingleTitle.textContent = evt.target.textContent;
    selectSingle.setAttribute("data-state", "");
  });
}

// const selectActivity = document.querySelector('.activity-select');
// const selectActivityTitle = selectSingle.querySelector('.activity-title');
// const selectActivityLabels = selectSingle.querySelectorAll('.activity-label');

// // Toggle position-select menu
// selectActivityTitle.addEventListener('click', () => {
//   if ('active' === selectActivity.getAttribute('activity-data-state')) {
//     selectActivity.setAttribute('activity-data-state', '');
//   } else {
//     selectActivity.setAttribute('activity-data-state', 'active');
//   }
// });

// // Close when click to option
// for (let i = 0; i < selectActivityLabels.length; i++) {
//   selectActivityLabels[i].addEventListener('click', (evt) => {
//     selectActivityTitle.textContent = evt.target.textContent;
//     selectActivity.setAttribute('activity-data-state', '');
//   });
// }


// Карусель

/* Устанавливаем стартовый индекс слайда по умолчанию: */
let slideIndex = 1;
/* Вызываем функцию, которая реализована ниже: */
showSlides(slideIndex);

/* Увеличиваем индекс на 1 — показываем следующий слайд: */
function nextSlide() {
    showSlides(slideIndex += 1);
}

/* Уменьшаем индекс на 1 — показываем предыдущий слайд: */
function previousSlide() {
    showSlides(slideIndex -= 1);
}

// /* Устанавливаем текущий слайд: */
// function currentSlide(n) {
//     showSlides(slideIndex = n);
// }

/* Функция перелистывания: */
function showSlides(n) {
    /* Обращаемся к элементам с названием класса "item", то есть к картинкам: */
    let slides = document.getElementsByClassName("item");
console.log(slides.length)
    /* Проверяем количество слайдов: */
    if (n > slides.length) {
      slideIndex = 1
    }
    if (n < 1) {
        slideIndex = slides.length
    }

    /* Проходим по каждому слайду в цикле for: */
    for (let slide of slides) {
        slide.style.display = "none";
    }
    /* Делаем элемент блочным: */
    slides[slideIndex - 1].style.display = "block";
}

const next = document.querySelector('.next');
const previous = document.querySelector('.previous');

next.addEventListener('click', () => {
  nextSlide()
})

previous.addEventListener('click', () => {
  previousSlide()
})

