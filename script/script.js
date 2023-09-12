const feedbackButton = document.querySelector('.feedback-button');
const modal = document.querySelector('.modal-container');
const modalCloseButton = document.querySelector('.modal-close-button');

if (feedbackButton) {
  feedbackButton.addEventListener('click', (evt) => {
    evt.preventDefault();
    modal.classList.remove('modal-container-close');
  });

  modalCloseButton.addEventListener('click', (evt) => {
    evt.preventDefault();
    modal.classList.add('modal-container-close');
  });
}
