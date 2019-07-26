'use strict';

(function () {
  window.data = {
    ADS_NUMBER: 8,
    MIN_PRICE: 1000,
    MAX_PRICE: 1000000,
    MIN_ROOMS: 1,
    MAX_ROOM: 5,
    MIN_GUESTS: 1,
    MAX_GUEST: 5,
    MAX_X: 1000,
    MIN_X: 250,
    MAX_Y: 630,
    MIN_Y: 130,
    MAP_WIDTH: 1140,
    MAP_HEIGHT: 750,
    HOUSE_TYPE: ['palace', 'flat', 'house', 'bungalo'],
    CHECKIN_TIME: ['12:00', '13:00', '14:00'],
    CHECKOUT_TIME: ['12:00', '13:00', '14:00'],
    FEATURES: ['wifi', 'dishwasher', 'parking', 'washer', 'elevator', 'conditioner'],
    HOUSE_TITLE: ['Большая уютная квартира', 'Маленькая неуютная квартира',
      'Огромный прекрасный дворец', 'Маленький ужасный дворец',
      'Красивый гостевой домик', 'Некрасивый негостеприимный домик',
      'Уютное бунгало далеко от моря',
      'Неуютное бунгало по колено в воде'],
    PHOTOS: ['http://o0.github.io/assets/images/tokyo/hotel1.jpg',
      'http://o0.github.io/assets/images/tokyo/hotel2.jpg',
      'http://o0.github.io/assets/images/tokyo/hotel3.jpg'],
    // DOM elements
    map: document.querySelector('.map'),
    inputAdress: document.querySelector('#address'),
    mainPin: document.querySelector('.map__pin--main'),
    fieldset: document.querySelectorAll('fieldset'),
    hometypeInput: document.getElementById('type'),
    rentPrice: document.getElementById('price'),
  };
})();
