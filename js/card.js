'use strict';

// (function () {
//   window.card = {
//     createAd: function (advCount) {
//       var adverts = []; // Создаем пустой массив в котором будут храниться рекламы созданые функцией
//       var similarAds = {}; // Создаем пустой объект который будет заполняться информацией

//       var locationX = ''; // Содаем пустые переменные в которые будут заноситься координаты на карте
//       var locationY = '';

//       for (var i = 0; i < advCount; i++) { // Цикл который генерирует данные для пустого объекта similarAds
//         locationX = window.utils.getRandomNum(window.data.MIN_X, window.data.MAX_X);
//         locationY = window.utils.getRandomNum(window.data.MIN_Y, window.data.MAX_Y);
//         similarAds = {
//           author: {
//             avatar: window.utils.getLinkAvatar(i)
//           },
//           offer: {
//             title: window.data.HOUSE_TITLE[i],
//             adress: locationX + ', ' + locationY,
//             price: window.utils.getRandomNum(window.data.MIN_PRICE, window.data.MAX_PRICE),
//             type: window.utils.getRandomValue(window.data.HOUSE_TYPE),
//             rooms: window.utils.getRandomNum(window.data.MIN_ROOMS, window.data.MAX_ROOMS),
//             guests: window.utils.getRandomNum(window.data.MIN_GUESTS, window.data.MAX_GUEST),
//             checkin: window.utils. getRandomValue(window.data.CHECKIN_TIME),
//             checkout: window.utils.getRandomValue(window.data.CHECKOUT_TIME),
//             features: window.utils.getRandomValue(window.data.FEATURES),
//             description: '',
//             photos: window.utils.getShuffledPhotos(window.data.PHOTOS)
//           },
//           location: {
//             x: locationX,
//             y: locationY
//           }
//         };
//         adverts.push(similarAds); // С помощью метода push мы отправляем наш созданный объект в пустой массив adverts
//       }
//       return adverts; // И в качестве результата
//     },
//   };
// })();
(function () {

  var renderAd = function (similarOffer) {
    var offerElement = window.data.similarAdPinTemplate.cloneNode(true);
    var offerElementImage = offerElement.querySelector('img');
    offerElement.style = 'left: ' + similarOffer.location.x + 'px; ' + 'top: ' + similarOffer.location.y + 'px';
    offerElementImage.src = similarOffer.author.avatar;
    return offerElement;
  };

  var renderPins = function (offers) {
    var fragment = document.createDocumentFragment();
    for (var i = 0; i < offers.length; i++) {
      fragment.appendChild(renderAd(offers[i]));
    }
    window.data.similarAdsList.appendChild(fragment);
  };

  var errorHandler = function () {
    var errorMessageTemplate = document.querySelector('#error').content.querySelector('.error');
    var errorMessage = errorMessageTemplate.cloneNode(true);
    document.body.insertBefore(errorMessage, document.body.children[2]);
  };

  window.map = {
    renderPins: renderPins,
    errorHandler: errorHandler
  };
})();
