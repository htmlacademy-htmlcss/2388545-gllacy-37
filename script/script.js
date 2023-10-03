const feedbackButton = document.querySelector('.feedback-button');
const modal = document.querySelector('.modal-container');
const modalCloseButton = document.querySelector('.modal-close-button');

const prevButtom = document.querySelector('.button-prev');
const nextButton = document.querySelector('.button-next');
const bulletsList = document.querySelector('.carousel-pagination');
const bullits = document.querySelectorAll('.carousel-pagination-button');
const screens = document.querySelectorAll('.carousel-images-item');
const carouselItemsText = document.querySelectorAll('.carousel-item');

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


if (screens) {
  const bulletsArray = Array.from(bullits);
  const screensArray = Array.from(screens);
  const textsArray = Array.from(carouselItemsText);

  const model = [true, false, false];


  const getCurrentElement = () => model.findIndex((index) => index);

  const updateModel = (index) => {
    model.forEach((item, i) => {
      model[i] = i === index;
    });
  }

  const setActiveClass = (activeClass, elementsArray, activeIndex) => {
    document.querySelector(`.${activeClass}`).classList.remove(activeClass);
    elementsArray[activeIndex].classList.add(activeClass);
  }

  const renderActiveBullit = () => {
    const currentIndex = getCurrentElement();
    setActiveClass('carousel-pagination-current', bulletsArray, currentIndex);
  };


  const renderActiveScreen = () => {
    const currentIndex = getCurrentElement();
    setActiveClass('carousel-image-current', screensArray, currentIndex)
    setActiveClass('carousel-current', textsArray, currentIndex);

    screensArray.slice(currentIndex).forEach((item, i) => {
      item.style.order = i
    });

    screensArray.slice(0, currentIndex).forEach((item, i) => {
      item.style.order = screensArray.length - currentIndex + i
    });

    document.body.classList = [];
    document.body.classList.add(`carousel-product-${currentIndex + 1}`)
  }

  const getPrevIndex = () => {
    let current = getCurrentElement();
    return current - 1 >= 0 ? current - 1 : model.length - 1;
  }

  const getNextIndex = () => {
    let current = getCurrentElement();
    return current + 1 <= model.length - 1 ? current + 1 : 0;
  }


  prevButtom.addEventListener('click', () => {
    let index = getPrevIndex();
    updateModel(index);
    renderActiveScreen();
    renderActiveBullit();
  });

  nextButton.addEventListener('click', () => {
    let index = getNextIndex();
    updateModel(index);
    renderActiveScreen();
    renderActiveBullit();
  });

  bulletsList.addEventListener('click', (e) => {
    if (e.target.classList.contains('carousel-pagination-button')) {
      let clickedButtonIndex = bulletsArray.indexOf(e.target);
      updateModel(clickedButtonIndex);
      renderActiveScreen();
      renderActiveBullit();
    }
  });

}
