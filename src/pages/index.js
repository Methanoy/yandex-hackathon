import './index.scss';
import '../scripts/carousel.js';

import {
  // selectSingle,
  // selectSingleTitle,
  // selectSingleLabels,
  slidesContainer,
  slide,
  prevButton,
  nextButton,
  popupSuccessSubmit,
  popupRespondToVacancy,
  popupOfferYourself,
  existVacancyForm,
  noExistVacancyForm,
  successBtn,
  existVacancyBtn,
  noExistVacancyBtn,
  popups,
  mentorBtn,
  reviewerBtn,
  rolesDisabledBtn,
  rolesEnabledBtn,
  roleHidden,
  imgBoy,
  imgGirl,
  dutiesListMentor,
  dutiesListReviewer,
} from "../scripts/utils/constants";

// // Переключение выпадающего списка
// selectSingleTitle.addEventListener("click", () => {
//   if ("active" === selectSingle.getAttribute("data-state")) {
//     selectSingle.setAttribute("data-state", "");
//   } else {
//     selectSingle.setAttribute("data-state", "active");
//   }
// });

// // Сворачивание списка по клику на флажок
// for (let i = 0; i < selectSingleLabels.length; i++) {
//   selectSingleLabels[i].addEventListener("click", (evt) => {
//     selectSingleTitle.textContent = evt.target.textContent;
//     selectSingle.setAttribute("data-state", "");
//   });
// }

/*--------------------------------------Открытие попапов-------------------------------------------------*/

function openPopup(element) {
  element.classList.add("popup_opened");
  document.addEventListener("keyup", handleEscKey);
}

// Открытие попапа с существующей вакансией
function openExistVacancyPopup() {
  openPopup(popupRespondToVacancy);
}

// Открытие попапа с отсутствующей вакансией
function openNoExistVacancyPopup() {
  openPopup(popupOfferYourself);
}

// Сабмит попапа с имеющейся вакансией
function handleExistVacancyFormSubmit(event) {
  event.preventDefault();
  closePopup(popupRespondToVacancy);
  openPopup(popupSuccessSubmit);
}

existVacancyForm.addEventListener("submit", handleExistVacancyFormSubmit);

// Сабмит попапа с отсутствующей вакансией
function handleNoExistVacancyFormSubmit(event) {
  event.preventDefault();
  closePopup(popupOfferYourself);
  openPopup(popupSuccessSubmit);
}

noExistVacancyForm.addEventListener("submit", handleNoExistVacancyFormSubmit);

// Слушатели на кнопки "Подробнее" в плашках вакансий
existVacancyBtn.forEach((item) =>
  item.addEventListener("click", openExistVacancyPopup)
);
noExistVacancyBtn.forEach((item) =>
  item.addEventListener("click", openNoExistVacancyPopup)
);

/*--------------------------------------Закрытие попапов-------------------------------------------------*/

function closePopup(element) {
  element.classList.remove("popup_opened");
  document.removeEventListener("keyup", handleEscKey);
}

// Закрывает по кнопке "Вернуться на главную" в попапе успешного сабмита
function handleSuccessPopupClose() {
  closePopup(popupSuccessSubmit);
}

successBtn.addEventListener("click", handleSuccessPopupClose);

//Закрытие попапа при нажатии ESC:
function handleEscKey(evt) {
  if (evt.code === "Escape") {
    const openedPopup = document.querySelector(".popup_opened");
    closePopup(openedPopup);
  }
}

//Закрытие попапов при нажатии на overlay и кнопки закрытия:
popups.forEach((popup) => {
  popup.addEventListener("mousedown", (evt) => {
    if (evt.target.classList.contains("popup_opened")) {
      closePopup(popup);
    }
    if (evt.target.classList.contains("popup__container-btn")) {
      closePopup(popup);
    }
  });
});

/*--------------------------------------Переключатель наставник / ревьювер-------------------------------------------------*/

function onClickMentorBtn() {
  mentorBtn.classList.remove(rolesDisabledBtn);
  mentorBtn.classList.add(rolesEnabledBtn);
  reviewerBtn.classList.add(rolesDisabledBtn);
  reviewerBtn.classList.remove(rolesEnabledBtn);
  imgGirl.classList.remove(roleHidden);
  imgBoy.classList.add(roleHidden);
  dutiesListMentor.classList.add(roleHidden);
  dutiesListReviewer.classList.remove(roleHidden);
  dutiesListReviewer.style.display = "none";
  dutiesListMentor.style.display = "grid";
}

function onClickReviewerBtn() {
  reviewerBtn.classList.remove(rolesDisabledBtn);
  reviewerBtn.classList.add(rolesEnabledBtn);
  mentorBtn.classList.add(rolesDisabledBtn);
  mentorBtn.classList.remove(rolesEnabledBtn);
  imgBoy.classList.remove(roleHidden);
  imgGirl.classList.add(roleHidden);
  dutiesListMentor.classList.remove(roleHidden);
  dutiesListReviewer.classList.add(roleHidden);
  dutiesListReviewer.style.display = "grid";
  dutiesListMentor.style.display = "none";
}

mentorBtn.addEventListener("click", onClickMentorBtn);
reviewerBtn.addEventListener("click", onClickReviewerBtn);

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

