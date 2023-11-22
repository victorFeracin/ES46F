/*POPUP*/
const popUpContainer = document.getElementById('card-delete-popup-container');
const btnDeleteConfirm = document.getElementById('btn-delete-confirm');

const openPopUp = (cardId) => {
  btnDeleteConfirm.setAttribute('class', cardId);
  popUpContainer.style.display = 'block';
}

const closePopUp = () => {
  btnDeleteConfirm.removeAttribute('class');
  popUpContainer.style.display = 'none';
}