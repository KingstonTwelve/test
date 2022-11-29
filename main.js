'use strict';

const header = document.querySelector('.site-header');
const calculator = document.querySelector('.calculator');
const display = document.querySelector('.calculator__display');
const navigation = document.querySelector('.navigation');
const burger = document.querySelector('.burger');

const handleClick = event => {
  const value = event.target.value;
  event.preventDefault();
  event.stopPropagation();

  if (value.match(/[\/\*\-\+\=]/) !== null) {
    if (display.value.length === 0) {
      return;
    }
    if (display.value[display.value.length - 1].match(/[\/\*\-\+]/) !== null) {
      if (value === '=') {
        return;
      } else {
        display.value = display.value.replace(display.value[display.value.length - 1], value);
        return;
      }
    }
    if (value === '=') {
      display.value = eval(display.value);
      return;
    }
  }
  display.value += value;
};

calculator.addEventListener('click', handleClick);

window.onscroll = () => {
  if (scrollY > 1) {
    header.classList.add("header_scrolled");
  } else {
    header.classList.remove("header_scrolled");
  }
}

burger.addEventListener('click', e => {
  e.stopPropagation();
  navigation.classList.toggle('navigation_open');
  navigation.classList.contains('navigation_open') ?
    burger.innerHTML = 'Закрыть меню' :
    burger.innerHTML = 'Открыть меню';
});