export function carouselHandler() {
  const carouselShell = document.querySelector('.carousel__container');
  const carouselContent = document.querySelector('.carousel__content');
  const carouselButtons = document.querySelectorAll('.carousel__button');
  const carouselButtonsInner = document.querySelectorAll('.carousel__button-inner');
  const carouselImage = document.querySelector('.carousel__image');
  const carouselImageWidth = carouselImage.getBoundingClientRect().width;
  const imageColumnGapPX = 25;
  const distancePXofOneCarouselMove = carouselImageWidth + imageColumnGapPX;
  const leftCarouselArrow = document.querySelector('.carousel__content-icon-left');
  const rightCarouselArrow = document.querySelector('.carousel__content-icon-right');

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

  function removeClassActiveFromEntireButtons() {
    carouselButtons.forEach(button => button.classList.remove('carousel__button_active'));
    carouselButtonsInner.forEach(inner => inner.classList.remove('carousel__button-inner_active'));
  }

  function addClassActiveToButton(clickedButton) {
    clickedButton.classList.add('carousel__button_active');

    const innerOfClickedButton = document.querySelector('.carousel__button_active > .carousel__button-inner');
    innerOfClickedButton.classList.add('carousel__button-inner_active');
  }

  function getClickedElemDatasetString(clickedButton, datasetRegExp) {
    return clickedButton.outerHTML.match(datasetRegExp).toString();
  }

  function moveCarousel(clickedButton) {
    // e.g. <div class="layout-one-column carousel__button" data-carousel-button="btn__2"> =>
    // ['btn__2'] => 'btn__2'
    const clickedButtonDataset = getClickedElemDatasetString(clickedButton, /btn__\d/gi);
    carouselContent.style.transform = `translateX(${objOfButtonDatasetAndNumberOfCarouselMoves[clickedButtonDataset]}px)`;
  }

  function disableOrEnableBoundaryCarouselArrows(carouselButtonNumber) {
    if (carouselButtonNumber === 0) {
      leftCarouselArrow.classList.add('carousel__content-icon_disabled');
    } else {
      leftCarouselArrow?.classList.remove('carousel__content-icon_disabled');
    }

    if (carouselButtonNumber === 4) {
      rightCarouselArrow.classList.add('carousel__content-icon_disabled');
    } else {
      rightCarouselArrow?.classList.remove('carousel__content-icon_disabled');
    }
  }

  function carouselFlicking(event) {
    if (event.target.closest('.carousel__button')) {
      const activeCarouselButton = event.target.closest('.carousel__button');
      let carouselButtonNumber = Number(getClickedElemDatasetString(activeCarouselButton, /btn__\d/gi).replace(/\D/gi, ''));

      disableOrEnableBoundaryCarouselArrows(carouselButtonNumber);
      
      removeClassActiveFromEntireButtons();
      
      addClassActiveToButton(activeCarouselButton);

      moveCarousel(activeCarouselButton);
    }

    if (event.target.closest('.carousel__content-icon')) {
      const activeCarouselButton = document.querySelector('.carousel__button_active');
      let carouselButtonNumber = Number(getClickedElemDatasetString(activeCarouselButton, /btn__\d/gi).replace(/\D/gi, ''));

      removeClassActiveFromEntireButtons();

      if (carouselButtonNumber >= 0 && carouselButtonNumber <= 4) {
        disableOrEnableBoundaryCarouselArrows(carouselButtonNumber);

        // logic for left arrow
        // carouselButtonNumber that case must be >=0
        if (event.target.closest('.carousel__content-icon-left')) {
          if (carouselButtonNumber - 1 >= 0) {
            let previousCarouselButton = document.querySelector(`[data-carousel-button="btn__${carouselButtonNumber - 1}"]`);

            addClassActiveToButton(previousCarouselButton);
            moveCarousel(previousCarouselButton);
            // we interract with the previous element! 
            // e.g. carouselButtonNumber = 1, but on click carouselButtonNumber => 1 - 1!
            disableOrEnableBoundaryCarouselArrows(carouselButtonNumber - 1);
          }
        }

        // logic for right arrow
        // carouselButtonNumber that case must be <= 4
        if (event.target.closest('.carousel__content-icon-right')) {
          if (carouselButtonNumber + 1 <= 4) {
            let nextCarouselButton = document.querySelector(`[data-carousel-button="btn__${carouselButtonNumber + 1}"]`);

            addClassActiveToButton(nextCarouselButton);
            moveCarousel(nextCarouselButton);
            // we interract with the next element! 
            // e.g. carouselButtonNumber = 3, but on click carouselButtonNumber => 3 + 1!
            disableOrEnableBoundaryCarouselArrows(carouselButtonNumber + 1);
          }
        }
      }
    }
  }

  carouselShell.addEventListener('click', carouselFlicking);
}