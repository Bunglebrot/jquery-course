'use strict';

let jqInputs = $('.form__input');

jqInputs.addClass('some').addClass('other-class').removeClass('form__input');


jqInputs.on('input', function() {
  console.log(this);
});