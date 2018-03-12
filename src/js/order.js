'use strict';

var inputPerson = $('.card__person');
var inputCVV = $('.card__cvc-input');
var inputNumber = $('.card__number-input');

function validateField(key, start, end, backspace) {
  if(key>=start && key<=end){
    return true;
  }
  if(key===backspace){
    return true;
  }
  return false;
}

inputNumber.on('keypress', function(e) {
  var keyCode = e.originalEvent.keyCode;
  var isValid = validateField(keyCode, 48, 57);
  if(isValid){
    inputNumber.removeClass('error');
  } else {
    inputNumber.addClass('error');
    return false;
  }
});

inputCVV.on('keypress', function(e) {
  var keyCode = e.originalEvent.keyCode;
  var isValid = validateField(keyCode, 48, 57);
  if(isValid){
    inputCVV.removeClass('error');
  } else {
    inputCVV.addClass('error');
    return false;
  }
});

inputPerson.on('keypress', function(e) {
  var keyCode =e.originalEvent.keyCode;
  var isValid = validateField(keyCode, 97, 122, 32);
  if(isValid){
    inputPerson.removeClass('error');
  } else {
    inputPerson.addClass('error');
    return false;
  }
});

function validateLength(elem, length) {
  if(elem.val().length >= length) { // если < 3 символов
    return true;
  }
  return false;
}

$(document).ready(function(){

  $(document).on('change','.card__person',function(){
    var isLenght = validateLength(inputPerson, 4);
    if(isLenght) {
      inputPerson.removeClass('error');
      return true;
      }
    inputPerson.addClass('error');
    return false;
  });


  $(document).on('change','.card__number-input', function(){
    inputNumber.each(function() {
      var isLenght = validateLength($(this), 4);
      if(isLenght) {
        $(this).removeClass('error');
        return true;
        }
      $(this).addClass('error');
    });
  });

  $(document).on('change','.card__cvc-input',function(){
    var isLenght = validateLength(inputCVV, 3);
    if(isLenght) {
      inputCVV.removeClass('error');
      return true;
      }
    inputCVV.addClass('error');
    return false;
  });
});



function validateForm() {
  // ask your validation funcs
  var person = inputPerson.val();
  var cvc = inputCVV.val();
  for (var i = 0; i < inputNumber.length; i++) {
    var num = inputNumber[i].value;
    if(num.length<4) return false;
  }

  if(person.length<4) return false;
  if(cvc.length<3) return false;
  return true;
}


$('.order__submit').on('click', function(e) {
  e.preventDefault();
  var isValidForm = validateForm();
  if (isValidForm) {
    // $('.order__submit').submit();
    console.log("ok");
  } else{
    console.log("no ok");
  }
});
