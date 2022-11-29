import './index.scss';


const selectSingle = document.querySelector('.select');
const selectSingleTitle = selectSingle.querySelector('.select__title');
const selectSingleLabels = selectSingle.querySelectorAll('.select__label');

// Toggle position-select menu
selectSingleTitle.addEventListener('click', () => {
  if ('active' === selectSingle.getAttribute('data-state')) {
    selectSingle.setAttribute('data-state', '');
  } else {
    selectSingle.setAttribute('data-state', 'active');
  }
});

// Close when click to option
for (let i = 0; i < selectSingleLabels.length; i++) {
  selectSingleLabels[i].addEventListener('click', (evt) => {
    selectSingleTitle.textContent = evt.target.textContent;
    selectSingle.setAttribute('data-state', '');
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
