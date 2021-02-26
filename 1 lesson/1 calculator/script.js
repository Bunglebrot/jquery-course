'use strict';
// 1 Задание - Сумматор
const nums = document.querySelectorAll('.summator__input');
const num1 = document.querySelector('[name=num1]');
const num2 = document.querySelector('[name=num2]');
const btn = document.querySelector('input[type=button]');
const span = document.querySelector('.res');

btn.onclick = function() {
  if (!isNaN(Number(num1.value)) && !isNaN(Number(num2.value)) && (num1.value != '' && num2.value != '')) {
    span.innerHTML = Number(num1.value) + Number(num2.value);
    this.setAttribute('disabled', true);
  } else span.innerHTML = '';
};

nums.forEach(input => {
  input.addEventListener('input', () => {
    btn.removeAttribute('disabled');
  });
});

// 2 Задание - Калькулятор
const calcNums = document.querySelectorAll('.calculator__num');
const calcNum1 = document.querySelector('.calculator__num[name=num1]');
const calcNum2 = document.querySelector('.calculator__num[name=num2]');
const calcBtns = document.querySelectorAll('.calculator__btn');
const resSpan = document.querySelector('.calculator__res');

calcBtns.forEach(btn => {
  btn.addEventListener('click', function() {
    let valueBtn = this.getAttribute('value');
    // 
    let num1, num2;
    if (calcNum1.value === '' || calcNum2.value === '') {
      num1 = '';
      num2 = '';
    } else {
      num1 = Number(calcNum1.value);
      num2 = Number(calcNum2.value);
    }

    if ((num1 && num2)  || (num1 === 0 || num2 === 0)) {
      switch (valueBtn) {
        case '+' :
          resSpan.innerHTML = num1 + num2;
        break;
        case '-' :
          resSpan.innerHTML = num1 - num2;
        break;
        case '*' :
          resSpan.innerHTML = num1 * num2;
        break;
        case '/' :
          if (num1 > 0 && num2 > 0) {
            resSpan.innerHTML = (num1 / num2).toFixed(4);
          } else resSpan.innerHTML = 'одно из чисел 0 - ошибка!';
        break;
        default :
          resSpan.innerHTML = '';
        break;
      }
      this.setAttribute('disabled', true);
    } else {
      resSpan.innerHTML = '';
    }
  });
});

calcNums.forEach(input => {
  input.addEventListener('input', () => {
    for (let i = 0; i < calcBtns.length; i++) {
      calcBtns[i].removeAttribute('disabled');
    }
    resSpan.innerHTML = '';
  });
});