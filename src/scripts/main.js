'use strict';

const burger = document.querySelector('.icon');
const menu = document.querySelector('.nav');
const close = document.querySelector('.icon--close');
const main = document.querySelector('.main');

main.addEventListener('click', () => {
  menu.classList.remove('nav--active');
});

burger.addEventListener('click', () => {
  menu.classList.add('nav--active');
});

close.addEventListener('click', () => {
  menu.classList.remove('nav--active');
});

const links = document.querySelectorAll('.nav__link');

links.forEach((item) =>
  item.addEventListener('click', () => {
    if (menu.classList.contains('nav--active')) {
      menu.classList.toggle('nav--active');
    }
  })
);

const form = document.querySelector('.form');
const inputs = document.querySelectorAll('.form-fieldsize');

form.addEventListener('submit', (event) => {
  event.preventDefault();

  inputs.forEach((input) => {
    input.value = '';
  });
});
