'use strict';

const burger = document.querySelector('.icon');
const menu = document.querySelector('.nav');
const close = document.querySelector('.icon--close');

burger.addEventListener('click', () => {
  menu.classList.add('nav--active');
});

close.addEventListener('click', () => {
  menu.classList.remove('nav--active');
});
