'use strict';

const questions = $('.faq__question');
// Моё решение
// questions.on('click', function() {
//     if (!$(this).next().attr('data-visible')) {
//       questions.not($(this)).next().removeAttr('data-visible').hide('slow');
//       $(this).next().attr('data-visible', true).show('slow');
//     } else {
//       $(this).next().removeAttr('data-visible').hide('slow');
//     }
// });

// Более лучшее решение
questions.on('click', function() {
  let answer = $(this).next();
  $('.faq__answer:visible').not(answer).slideUp();
  answer.slideToggle(400);
});