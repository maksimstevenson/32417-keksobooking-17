'use strict';

(function () {
  window.utils = {
    // Function to get a random value in a specified range
    getRandomNum: function (min, max) {
      return Math.floor(Math.random() * (max - min) + min);
    },
    // Function to get a random value from an array
    getRandomValue: function (arr) {
      return arr[Math.floor(Math.random() * arr.length)];
    },
    // Function to get a random avatar picture
    getLinkAvatar: function (index) {
      return 'img/avatars/user' + 0 + (index + 1) + '.png';
    },
    // Function to get shuffled pictures
    getShuffledPhotos: function (a) {
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
    },
    // Function to set address to input
    setAdress: function (x, y) {
      window.data.inputAdress.value = x + ',' + y;
    },
    // Function to create pins
    renderPins: function (adverts) {
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
    },
    // A function to disable all fields
    disableField: function () {
      window.data.fieldset.forEach(function (item) {
        item.disabled = true;
      });
      window.utils.setAdress(window.data.MAP_WIDTH / 2, window.data.MAP_HEIGHT / 2);
    },
    // A function to activate map
    activateMap: function () {
      window.data.map.classList.remove('map--faded');
      window.load.loadData(window.data.URL, window.card.renderPins, window.card.errorHandler );
    },
    // A function to activate all fields
    activatePage: function () {
      window.utils.disableField();
      var advertForm = document.querySelector('.ad-form');
      advertForm.classList.remove('ad-form--disabled');

      window.data.fieldset.forEach(function (item) {
        item.disabled = false;
      });
    },
    checkMapStatus: function () {
      return window.data.map.classList.contains('map--faded');
    },
  };
})();
