'use strict';

var inputPerson = $('.card__person');
var inputCVV = $('.card__cvc-input');
var inputNumber = $('.card__number-input');

// функция проверяет длину введенного текста
function validateLength(elem, length) {
  if(elem.val().length >= length) {
    return true;
  }
  return false;
}

// проверка на ввод чисел (ошибка, если вводим не число)
inputNumber.on('keypress', function(e) {
  var valNum = e.originalEvent.key;
  if ( parseInt(valNum) !== parseInt(valNum)) {
    inputNumber.addClass('error');
    return false;
    } else {
    inputNumber.removeClass('error');
    return true;
  }
});

// проверка на ввод чисел (ошибка, если вводим не число)
inputCVV.on('keypress', function(e) {
  var valNum = e.originalEvent.key;
  if ( parseInt(valNum) !== parseInt(valNum)) {
    inputCVV.addClass('error');
    return false;
    } else {
    inputCVV.removeClass('error');
    return true;
  }
});

// проверка на ввод латиницы и пробела
inputPerson.on('keypress', function(e) {
  var key =e.originalEvent.key;
  var regexp= /^[a-zA-Z\s]+$/;
  var res = key.search(regexp);
  console.log(res);
 if(res === 0){
    inputPerson.removeClass('error');
  } else {
    inputPerson.addClass('error');
    return false;
  }
});

// проверка длину содержимого в input
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

// функция валидации формы - проверяет, чтобы все поля были введены
function validateForm() {
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

// отправка формы, если все корректно введено
$('#submit').on('click', function(e) {
  var isValidForm = validateForm();
  if (isValidForm) {
    $('#form').on('submit', function (e) {
      console.log('ok');
    });
  } else{
    e.preventDefault();
    console.log('no ok');
  }
});
