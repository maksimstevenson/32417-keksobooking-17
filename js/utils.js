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
    renderAd: function (similarOffer) {
      var offerElement = window.data.similarAdPinTemplate.cloneNode(true);
      var offerElementImage = offerElement.querySelector('img');
      offerElement.style = 'left: ' + similarOffer.location.x + 'px; ' + 'top: ' + similarOffer.location.y + 'px';
      offerElementImage.src = similarOffer.author.avatar;
      return offerElement;
    },
    // A function to create pins
    renderPins: function (offers) {
      var fragment = document.createDocumentFragment();
      for (var i = 0; i < offers.length; i++) {
        fragment.appendChild(window.utils.renderAd(offers[i]));
      }
      window.data.similarAdsList.appendChild(fragment);
    },

    errorHandler: function () {
      var errorMessageTemplate = document.querySelector('#error').content.querySelector('.error');
      var errorMessage = errorMessageTemplate.cloneNode(true);
      document.body.insertBefore(errorMessage, document.body.children[2]);
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
      window.load.loadData(window.data.URL, window.utils.renderPins, window.utils.errorHandler );
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
