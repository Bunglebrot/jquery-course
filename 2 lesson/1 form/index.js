'use strict';

const form = document.querySelector('.form');
const inputs = form.querySelectorAll('.form__input');
const formBtn = form.querySelector('.form__btn');

inputs.forEach(input => {
  input.addEventListener('input', function() {
    if (input.value.length < 5) {
      input.classList.add('form__input_error');
      input.setAttribute('data-valid', false);
    } else {
      input.classList.remove('form__input_error');
      input.removeAttribute('data-valid');
    }
  })
});

const validateForm = function(e) {
  for (let input of inputs) {
    if (input.getAttribute('data-valid') == 'false' || input.value === '') e.preventDefault();
  }
};

form.onsubmit = validateForm;