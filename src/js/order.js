'use strict';


$('.card__number-input').on('keypress', function(e) {
  var keyCode =e.originalEvent.keyCode;
  console.log(e.originalEvent);
  $('.card__number-input').removeClass('card__number-input--color-red');
  if(keyCode<=48 || keyCode>=57){
    $('.card__number-input').addClass('card__number-input--color-red');
    return false;
  }
});

$('.card__cvc-input').on('keypress', function(e) {
  var keyCode =e.originalEvent.keyCode;
  console.log(e.originalEvent);
  $('.card__cvc-input').removeClass('card__cvc-input--color-red');
  if(keyCode<=48 || keyCode>=57){
    $('.card__cvc-input').addClass('card__cvc-input--color-red');
    return false;
  }
});

$('.card__person').on('keypress', function(e) {
  var keyCode =e.originalEvent.keyCode;
  console.log(keyCode);
  $('.card__person').removeClass('card__person--color-red');
  if(keyCode!=32 && keyCode<97 || keyCode>122){
    $('.card__person').addClass('card__person--color-red');
    return false;
  };
});


$(document).ready(function(){
  var inputPerson = $('.card__person');
  var inputCVV = $('.card__cvc-input');

  $(document).on('change','.card__person',function(){
    if(inputPerson.val().length < 4) { // если < 4 символов
      $('.card__person').addClass('card__person--color-red');
      return false;
    }
    else {
      $('.card__person').removeClass('card__person--color-red');
      return true;
    }
  });

  $(document).on('change','.card__number-input',function(){
    // for (var i = 0; i < 4; i++) {
      // var inputNumber = $('.card__number-input--[i]');
      // if(inputNumber.val().length < 4) { // если < 4 символов
      //   $('.card__number-input--[i]').addClass('card__number-input--color-red');
      //   return false;
      // }
      // else {
      //   $('.card__number-input--[i]').removeClass('card__number-input--color-red');
      //   return true;
      // }
    }
  });


  $(document).on('change','.card__cvc-input',function(){
    if(inputCVV.val().length < 3) { // если < 3 символов
      $('.card__cvc-input').addClass('card__cvc-input--color-red');
      return false;
    }
    else {
      $('.card__cvc-input').removeClass('card__cvc-input--color-red');
      return true;
    }
  });

});
