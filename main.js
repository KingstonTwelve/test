'use strict';

const header = document.querySelector('.site-header');
const calculator = document.querySelector('.calculator');
const display = document.querySelector('.calculator__display');

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