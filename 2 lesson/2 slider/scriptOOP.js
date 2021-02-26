'use strict';

const slider = new Slider({
  images : '.gallery .photos img',
  buttons: true,
  btnPrev : '.gallery .buttons .prev',
  btnNext : '.gallery .buttons .next',
});

// Второй экземпляр класса Slider
const slider2 = new Slider({
  images : '.gallery2 .photos img',
  auto: true,
  timeInterval: 2000,
});

function Slider(props) {
  this.images = document.querySelectorAll(props.images);
  this.btnPreview = document.querySelector(props.btnPrev);
  this.btnNext = document.querySelector(props.btnNext);
  this.buttons = props.buttons || false;
  this.count = 0;
  this.auto = props.auto || false;
  this.timeInterval = props.timeInterval || 4000;

  this.preview = function() {
    this.images[this.count].classList.remove('showed');
    this.count -= 1;
    if (this.count < 0) this.count = this.images.length - 1;
    this.images[this.count].classList.add('showed');
  };

  this.next = function() {
    this.images[this.count].classList.remove('showed');
    this.count++;
    if (this.count >= this.images.length) this.count = 0;
    this.images[this.count].classList.add('showed');
  };

  //
  if (this.buttons) {
    this.btnNext.onclick = () => {
      this.next();
    };

    this.btnPreview.onclick = () => {
      this.preview();
    };
  }

  //
  this.autoSlide = function() {
    setInterval(() => {
      this.next();
    }, this.timeInterval);
  };

  if (this.auto) this.autoSlide();
};