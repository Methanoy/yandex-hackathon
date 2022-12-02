// // Переменные выпадающего списка формы
// const selectSingle = document.querySelector(".select");
// const selectSingleTitle = selectSingle.querySelector(".select__title");
// const selectSingleLabels = selectSingle.querySelectorAll(".select__label");

// Переменные для слайдера
const slidesContainer = document.getElementById("slides-container");
const slide = document.querySelector(".slide");
const prevButton = document.getElementById("slide-arrow-prev");
const nextButton = document.getElementById("slide-arrow-next");

// Кнопка "Вернуться на главную" попапа успеха
const successBtn = document.querySelector(".success-popup__btn");
// Кнопки "Подробнее" для имеющихся и отсутствующих вакансий
const existVacancyBtn = document.querySelectorAll(
  ".current-offers__exist-vacancy-btn"
);
const noExistVacancyBtn = document.querySelectorAll(
  ".current-offers__no-exist-vacancy-btn"
);

// Переключатели наставник / ревьюер
const mentorBtn = document.querySelector(".team-roles__btn-mentor");
const reviewerBtn = document.querySelector(".team-roles__btn-reviewer");
const rolesDisabledBtn = "team-roles__btn_disabled";
const rolesEnabledBtn = "team-roles__btn_enabled";
const roleHidden = "team-roles_hidden";
const imgBoy = document.querySelector(".team-roles__img-boy");
const imgGirl = document.querySelector(".team-roles__img-girl");
const dutiesListMentor = document.querySelector(
  ".team-roles__duties-list-mentor"
);
const dutiesListReviewer = document.querySelector(
  ".team-roles__duties-list-reviewer"
);

// Все попапы (ответ на вакансию, предложение резюме, успех после сабмита формы)
const popups = document.querySelectorAll(".popup");
const popupRespondToVacancy = document.querySelector(".popup-details");
const popupOfferYourself = document.querySelector(".popup-no-vacancy");
const popupSuccessSubmit = document.querySelector(".popup-success");
// Формы в попапах (ответ на вакансию, предложение резюме)
const existVacancyForm = document.querySelector(".exist-form");
const noExistVacancyForm = document.querySelector(".no-exist-form");

export {
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
};
