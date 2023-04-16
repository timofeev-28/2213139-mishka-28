// BURGER-MENU

let burger = document.querySelector('.burger');
let menu = document.querySelector('.navigation');
let menuLinks = menu.querySelectorAll('.navigation__link');
let body = document.querySelector('.page-body');

menu.classList.add('js-active');

burger.addEventListener('click', function () {

  menu.classList.toggle('navigation--active');
  burger.classList.toggle('burger--active');
  body.classList.toggle('disable-scroll');
})

menuLinks.forEach(function (el) {
  el.addEventListener('click', function (event) {

    menu.classList.remove('navigation--active');
    burger.classList.remove('burger--active');
  })
})
