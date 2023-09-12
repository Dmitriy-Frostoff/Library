export function carouselHandler() {
  // classNames
  // ===========================
  // container of the entire carousel
  const carouselContainerClassName = 'carousel__container';
  // container for carousel images
  const carouselContentContainerClassName = 'carousel__content';
  // carousel image that lay in the carousel container
  const carouselImageClassName = 'carousel__image';

  const carouselRoundButtonCommonClassName = 'carousel__button';
  const carouseActivelRoundButtonsClassName = 'carousel__button_active';
  const carouseRoundButtonsInnerClassName = 'carousel__button-inner';
  const carouseActivelRoundButtonsInnerClassName = 'carousel__button-inner_active';
  
  const carouselArrowButtonCommonClassName = 'carousel__content-icon';
  const carouselArrowButtonDisabledClassName = 'carousel__content-icon_disabled';
  const carouselLeftArrowButtonClassName = 'carousel__content-icon-left';
  const carouselRightArrowButtonClassName = 'carousel__content-icon-right';

  // Abstract data
  // ===========================
  const regExpForGettingRoundButtonDataset = /btn__\d{1,}/gi;
  /** Generally for round buttons was used data- ... names like: 
   * 'btn__0' ... 'btn__4'
   */

  // ELements
  // ===========================
  const carouselShell = document.querySelector(`.${carouselContainerClassName}`);
  const carouselContent = document.querySelector(`.${carouselContentContainerClassName}`);
  const carouselButtons = document.querySelectorAll(`.${carouselRoundButtonCommonClassName}`);
  const carouselButtonsInner = document.querySelectorAll(`.${carouseRoundButtonsInnerClassName}`);
  const carouselImage = document.querySelector(`.${carouselImageClassName}`);
  const carouselImageWidth = carouselImage.getBoundingClientRect().width;
  const imageColumnGapPX = 25;
  const distancePXofOneCarouselMove = carouselImageWidth + imageColumnGapPX;
  const leftCarouselArrow = document.querySelector(`.${carouselLeftArrowButtonClassName}`);
  const rightCarouselArrow = document.querySelector(`.${carouselRightArrowButtonClassName}`);

  // btn__0 = distancePXofOneCarouselMove * 0 = e.g. 475px * 0
  // btn__4 = distancePXofOneCarouselMove * 0 = e.g. 475px * 4
  const objOfButtonDatasetAndNumberOfCarouselMoves = {
    // -distancePXofOneCarouselMove for moving carousel to the right
    'btn__0': -distancePXofOneCarouselMove * 0,
    'btn__1': -distancePXofOneCarouselMove * 1,
    'btn__2': -distancePXofOneCarouselMove * 2,
    'btn__3': -distancePXofOneCarouselMove * 3,
    'btn__4': -distancePXofOneCarouselMove * 4,
  }

  // Object keys objOfButtonDatasetAndNumberOfCarouselMoves ['btn__0', 'btn__1', 'btn__2', 'btn__3', 'btn__4' ... 'btn__NN']
  const firstCarouselRoundButtonNumber = Number(Object.keys(objOfButtonDatasetAndNumberOfCarouselMoves)[0].replace(/\D/gi, ''));

  const lastCarouselRoundButtonNumber = Number(Object.keys(objOfButtonDatasetAndNumberOfCarouselMoves)[(Object.keys(objOfButtonDatasetAndNumberOfCarouselMoves).length) - 1].replace(/\D/gi, ''));

  // utility functions
  function removeClassActiveFromEntireButtons() {
    carouselButtons.forEach(button => button.classList.remove(carouseActivelRoundButtonsClassName));
    carouselButtonsInner.forEach(inner => inner.classList.remove(carouseActivelRoundButtonsInnerClassName));
  }

  function addClassActiveToButton(clickedButton) {
    clickedButton.classList.add(carouseActivelRoundButtonsClassName);

    const innerOfClickedButton = document.querySelector(`.${carouseActivelRoundButtonsClassName} > .${carouseRoundButtonsInnerClassName}`);
    innerOfClickedButton.classList.add(carouseActivelRoundButtonsInnerClassName);
  }

  function getClickedElemDatasetString(clickedButton, datasetRegExp) {
    return clickedButton.outerHTML.match(datasetRegExp).toString();
  }

  function moveCarousel(clickedButton) {
    // e.g. <div class="layout-one-column carousel__button" data-carousel-button="btn__2"> =>
    // ['btn__2'] => 'btn__2'
    const clickedButtonDataset = getClickedElemDatasetString(clickedButton, regExpForGettingRoundButtonDataset);
    carouselContent.style.transform = `translateX(${objOfButtonDatasetAndNumberOfCarouselMoves[clickedButtonDataset]}px)`;
  }

  function disableOrEnableBoundaryCarouselArrows(carouselButtonNumber) {
    if (carouselButtonNumber === firstCarouselRoundButtonNumber) {
      leftCarouselArrow.classList.add(carouselArrowButtonDisabledClassName);
    } else {
      leftCarouselArrow?.classList.remove(carouselArrowButtonDisabledClassName);
    }

    if (carouselButtonNumber === lastCarouselRoundButtonNumber) {
      rightCarouselArrow.classList.add(carouselArrowButtonDisabledClassName);
    } else {
      rightCarouselArrow?.classList.remove(carouselArrowButtonDisabledClassName);
    }
  }

  function handleCarouselButtons(event) {
    if (event.target.closest(`.${carouselRoundButtonCommonClassName}`)) {
      const activeCarouselButton = event.target.closest(`.${carouselRoundButtonCommonClassName}`);
      let carouselButtonNumber = Number(getClickedElemDatasetString(activeCarouselButton, regExpForGettingRoundButtonDataset).replace(/\D/gi, ''));

      disableOrEnableBoundaryCarouselArrows(carouselButtonNumber);
      
      removeClassActiveFromEntireButtons();
      
      addClassActiveToButton(activeCarouselButton);

      moveCarousel(activeCarouselButton);
    }
  }

  function carouselArrowLeftLogic(event, carouselButtonNumber) {
    // logic for left arrow
    // carouselButtonNumber that case must be >=0
    if (event.target.closest(`.${carouselLeftArrowButtonClassName}`)) {
      if (carouselButtonNumber - 1 >= firstCarouselRoundButtonNumber) {
        let previousCarouselButton = document.querySelector(`[data-carousel-button="btn__${carouselButtonNumber - 1}"]`);

        addClassActiveToButton(previousCarouselButton);
        moveCarousel(previousCarouselButton);
        // we interract with the previous element! 
        // e.g. carouselButtonNumber = 1, but on click carouselButtonNumber => 1 - 1!
        disableOrEnableBoundaryCarouselArrows(carouselButtonNumber - 1);
      }
    }
  }
  
  function carouselArrowRightLogic(event, carouselButtonNumber) {
    // logic for right arrow
    // carouselButtonNumber that case must be <= lastCarouselRoundButtonNumber
    if (event.target.closest(`.${carouselRightArrowButtonClassName}`)) {
      if (carouselButtonNumber + 1 <= lastCarouselRoundButtonNumber) {
        let nextCarouselButton = document.querySelector(`[data-carousel-button="btn__${carouselButtonNumber + 1}"]`);

        addClassActiveToButton(nextCarouselButton);
        moveCarousel(nextCarouselButton);
        // we interract with the next element! 
        // e.g. carouselButtonNumber = 3, but on click carouselButtonNumber => 3 + 1!
        disableOrEnableBoundaryCarouselArrows(carouselButtonNumber + 1);
      }
    }
  }

  function carouselArrowsHandler(event) {
    if (event.target.closest(`.${carouselArrowButtonCommonClassName}`)) {
      const activeCarouselButton = document.querySelector(`.${carouseActivelRoundButtonsClassName}`);
      let carouselButtonNumber = Number(getClickedElemDatasetString(activeCarouselButton, regExpForGettingRoundButtonDataset).replace(/\D/gi, ''));

      removeClassActiveFromEntireButtons();

      if (carouselButtonNumber >= firstCarouselRoundButtonNumber && carouselButtonNumber <= lastCarouselRoundButtonNumber) {
        disableOrEnableBoundaryCarouselArrows(carouselButtonNumber);

        carouselArrowLeftLogic(event, carouselButtonNumber);

        carouselArrowRightLogic(event, carouselButtonNumber);
      }
    }
  }

  // final implementation
  function carouselFlicking(event) {
    handleCarouselButtons(event);

    carouselArrowsHandler(event);
  }

  carouselShell.addEventListener('click', carouselFlicking);
}