// BURGER-MENU

let burger = document.querySelector('.burger');
let menu = document.querySelector('.navigation');
let menuLinks = menu.querySelectorAll('.navigation__link');

// когда JS есть, .js-active прячет бургер-меню
menu.classList.add('js-active');

burger.addEventListener('click', function () {

  menu.classList.toggle('navigation--active');
  burger.classList.toggle('burger--active');
});

menuLinks.forEach(function (el) {
  el.addEventListener('click', function (event) {

    menu.classList.remove('navigation--active');
    burger.classList.remove('burger--active');
  })
});
