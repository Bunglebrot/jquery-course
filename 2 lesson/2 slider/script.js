'use strict';

const btnPrev = document.querySelector('.prev');
const btnNext = document.querySelector('.next');
const images = document.querySelectorAll('.gallery .photos img');

let count = 0;

btnPrev.onclick = function() {
  images[count].classList.remove('showed');
  --count;
  if (count < 0) count = images.length - 1;
  images[count].classList.add('showed');
};

btnNext.onclick = function() {
  images[count].classList.remove('showed');
  count++;
  if (count >= images.length) count = 0;
  images[count].classList.add('showed');
};