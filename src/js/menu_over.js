'use strict';

// появление и пропадание вертикального меню
$('.burger').on('click', function () {
  $('.menu-over').toggleClass('menu-over--active');
  $('.menu-over__item').on('click', function () {
    $('.menu-over').removeClass('menu-over--active');
  })
})
