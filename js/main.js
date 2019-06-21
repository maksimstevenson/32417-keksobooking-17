"use strict";

var ADS_NUMBER = 8;
var MIN_PRICE = 1000;
var MAX_PRICE = 1000000;
var MIN_ROOMS = 1;
var MAX_ROOMS = 5;
var MIN_GUESTS = 1;
var MAX_GUEST = 5;
var MAX_X = 1000;
var MIN_X = 250;
var MAX_Y = 630;
var MIN_Y = 130;
var HOUSE_TYPE = ['palace', 'flat', 'house', 'bungalo'];
var CHECKIN_TIME = ['12:00', '13:00', '14:00'];
var CHECKOUT_TIME = CHECKIN_TIME;
var FEATURES = ['wifi', 'dishwasher', 'parking', 'washer', 'elevator', 'conditioner'];
var HOUSE_TITLE = ['Большая уютная квартира', 'Маленькая неуютная квартира',
  'Огромный прекрасный дворец', 'Маленький ужасный дворец',
  'Красивый гостевой домик', 'Некрасивый негостеприимный домик',
  'Уютное бунгало далеко от моря',
  'Неуютное бунгало по колено в воде'];
var PHOTOS = ['http://o0.github.io/assets/images/tokyo/hotel1.jpg',
  'http://o0.github.io/assets/images/tokyo/hotel2.jpg',
  'http://o0.github.io/assets/images/tokyo/hotel3.jpg'];
var MAP = document.querySelector('.map');


// Function to get a random feature
function getRandomFutures(arr) {
  var features = [];
  var featuresAmount = Math.floor(Math.random() * (FEATURES.length + 1));
  for (var i = 0; i < featuresAmount; i++) {
    features.push(arr[i]);
  }
  return features;
}
// Function to get a random value in a specified range
var getRandomNum = function (min, max) {
  return Math.floor(Math.random() * max) + min;
};

// Function to get a random value from array
var getRandomValue = function (arr) {
  return arr[Math.floor(Math.random() * arr.length)];
};
// Function to get a random avatar picture
function getLinkAvatar(index) {
  return 'img/avatars/user' + 0 + (index + 1) + '.png';
}
// Function to get shuffled pictures
// Данную функцию я не понимаю и скопировал ее из видео.Я не понимаю как она работает и как к ней пришли вприниципе.
var getShuffledPhotos = function (a) {
  var j;
  var x;
  var i;
  for (i = a.length - 1; i > 0; i--) {
    j = Math.floor(Math.random() * (i + 1));
    x = a[i];
    a[i] = a[j];
    a[j] = [x];
  }
  return a;
};
// Function to create a single ad
// В данной функции мы будем генерировать объекты с помощью данных из наших переменных и массивов заданных выше.
// Параметром в данной функции служит кол-во реклам которых необходимо создать 'advCount'
var createAd = function (advCount) {
  var adverts = []; // Создаем пустой массив в котором будут храниться рекламы созданые функцией
  var similarAds = {}; // Создаем пустой объект который будет заполняться информацией

  var locationX = ''; // Содаем пустые переменные в которые будут заноситься координаты на карте
  var locationY = '';

  for (var i = 0; i < advCount; i++) { // Цикл который генерирует данные для пустого объекта similarAds
    locationX = getRandomNum(MIN_X, MAX_X);
    locationY = getRandomNum(MIN_Y, MAX_Y);
    similarAds = {
      author: {
        avatar: getLinkAvatar(i)
      },
      offer: {
        title: HOUSE_TITLE[i],
        adress: locationX + ', ' + locationY,
        price: getRandomNum(MIN_PRICE, MAX_PRICE),
        type: getRandomValue(HOUSE_TYPE),
        rooms: getRandomNum(MIN_ROOMS, MAX_ROOMS),
        guests: getRandomNum(MIN_GUESTS, MAX_GUEST),
        checkin: getRandomValue(CHECKIN_TIME),
        checkout: getRandomValue(CHECKOUT_TIME),
        features: getRandomFutures(FEATURES),
        description: '',
        photos: getShuffledPhotos(PHOTOS)
      },
      location: {
        x: locationX,
        y: locationY
      }
    };
    adverts.push(similarAds); // С помощью метода push мы отправляем наш созданный объект в пустой массив adverts
  }
  return adverts; // И в качестве результата
};

// Removing class faded
MAP.classList.remove('map--faded');
var ads = createAd(ADS_NUMBER); // Заношу фун-ию createAd в переменную для удобства использования

// В данной фун-ии мы создаем на карте пины с потенциальными объявлениями в рандомных местах.
// Параметром служит массив с рекламами
function renderPins(adverts) {
  var template = document.querySelector('.map__pins'); // Переменная содержащая элемент в который добавляется пин
  var mapPin = document.querySelector('#pin').content.querySelector('.map__pin'); // Переменная для обращения к шаблону пина
  var fragment = document.createDocumentFragment(); // Фрагмент в котором хранится новый пин

  adverts.forEach(function (item) { // Используем метод forEach для прочесывания каждого элмената массива и создания пина для каждого отдельного элемента
    var pinElement = mapPin.cloneNode(true); // Копируем содержимое шаблона .map__pin и заносим в переменную для удобства использования
    pinElement.querySelector('img').setAttribute('src', item.author.avatar); // обращаемся к содержимому и назначаем атрибут
    pinElement.setAttribute('style', 'left: ' + item.location.x + 'px; ' + 'top: ' + item.location.y + 'px');// Задаем позицию пина через атрибут
    fragment.appendChild(pinElement); // С помощью метода appendChild назначаю данные фрагменту
    template.appendChild(fragment); // Используя тот же метод назначаю фрагмент с заданными параметрами в template
  });
}

renderPins(ads); // Выполняем функцию
