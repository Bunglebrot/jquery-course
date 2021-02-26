'use strict';
// 1 простое решение
// const overlay = document.querySelector('.popup__overlay');
// const popUp = document.querySelector('.popup');
// const popUpCloseBtn = popUp.querySelector('.popup__close-btn');

// overlay.onclick = () => {
//   overlay.classList.add('popup__overlay_close');
//   popUp.classList.add('popup_close');
// };

// popUpCloseBtn.onclick = () => {
//   overlay.classList.add('popup__overlay_close');
//   popUp.classList.add('popup_close');
// };

// 2 ООП решение
const workBlock = document.querySelectorAll('.work');
const mainBlock = document.querySelector('.main');
const navLinks = document.querySelectorAll('.nav__item');
const myPopup = new Popup();

workBlock.forEach(item => {
  item.addEventListener('click', function() {
    myPopup.open(`<h2>Hello</h2><span>Это просто текст!</span>`);
  });
});

navLinks.forEach(item => {
  item.addEventListener('click', function() {
    myPopup.open(`<h2>${item.innerText}</h2><span>Далее много чего интересного...</span><a href="#" class="nav__link">${item.innerText}</a>`);
    return false;
  });
});

function Popup() {
  this.overlay = document.querySelector('.popup__overlay');
  this.popUp = document.querySelector('.popup');
  this.popUpMessage = this.popUp.querySelector('.popup__content-text');
  this.popUpCloseBtn = this.popUp.querySelector('.popup__close-btn');

  this.open = function(content) {
    this.popUpMessage.innerHTML = content || 'This is just the text';
    this.popUp.classList.remove('popup_close');
    this.overlay.classList.remove('popup__overlay_close');
    mainBlock.classList.add('main_blur');
    return this;
  };

  this.close = function() {
    this.popUp.classList.add('popup_close');
    this.overlay.classList.add('popup__overlay_close');
    mainBlock.classList.remove('main_blur');
    return this;
  };

  this.popUpCloseBtn.onclick = () => {
    this.close();
  };

  this.overlay.onclick = () => {
    this.close();
  };
};

// 3 функция fade & show
const cardsBtns = document.querySelectorAll('.work__btn');

cardsBtns.forEach(btn => {
  btn.addEventListener('click', function(e) {
    e.stopPropagation();
    fade(btn.parentNode)
  });
});

function fade(element, speed, time) {
  let sentOpacity = 1;
  let exitOpacity = 0;

  let fps = speed || 50;
  var time = time || 2000;
  const timer = setInterval(function() {
    if (sentOpacity < exitOpacity) {
      clearInterval(timer);
      element.style.display = 'none';
    } else {
      element.style.opacity = sentOpacity;
      sentOpacity -= 0.1;
    }
  }, time / fps);
};