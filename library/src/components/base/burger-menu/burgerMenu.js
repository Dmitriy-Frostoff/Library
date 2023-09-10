export function burgerMenu() {
  const bodyElement = document.querySelector('body');
  const header__container = document.querySelector('.header__container');
  const burgerMenuIcon = document.querySelector('.burger-menu');
  const navElement = document.querySelector('nav');

  bodyElement.addEventListener('click', burgerMenuHandler);

  function burgerMenuHandler(event) {
    if (event.target.closest('.burger-menu') || event.target.closest('.nav__item')) {
      if (navElement.classList.contains('nav_active') || burgerMenuIcon.classList.contains('burger-menu_active') ) {
        bodyElement.classList.remove('_overflow-hidden');
        navElement.classList.remove('nav_active');
        burgerMenuIcon.classList.remove('burger-menu_active');

        //700 ms === animation duration of nav menu
        setTimeout(() => header__container.classList.add('_overflow-hidden'), 700);
      } else {
        header__container.classList.remove('_overflow-hidden');
  
        bodyElement.classList.add('_overflow-hidden');
        navElement.classList.add('nav_active');
        burgerMenuIcon.classList.add('burger-menu_active');
      }
    }

    if (!event.target.closest('.nav__container') && navElement.classList.contains('nav_active') && burgerMenuIcon.classList.contains('burger-menu_active')) {
      bodyElement.classList.remove('_overflow-hidden');
      navElement.classList.remove('nav_active');
      burgerMenuIcon.classList.remove('burger-menu_active');
      
      setTimeout(() => header__container.classList.add('_overflow-hidden'), 700);
    }
  }
}