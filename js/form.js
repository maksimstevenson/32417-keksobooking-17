'use strict';

(function () {

  window.data.mainPin.addEventListener('click', function (evt) {
    evt.preventDefault();
  });

  var housePrice = {
    'bungalo': {
      min: '0',
      placeholder: '0'
    },
    'flat': {
      min: '1000',
      placeholder: '1000'
    },
    'house': {
      min: '5000',
      placeholder: '5000'
    },
    'palace': {
      min: '10000',
      placeholder: '10000'
    },
  };

  var pricetoHouse = function () {
    switch (window.data.hometypeInput.value) {
      case 'bungalo':
        window.data.rentPrice.min = housePrice.bungalo.min;
        window.data.rentPrice.placeholder = housePrice.bungalo.placeholder;
        return;
      case 'flat':
        window.data.rentPrice.min = housePrice.flat.min;
        window.data.rentPrice.placeholder = housePrice.flat.placeholder;
        return;
      case 'house':
        window.data.rentPrice.min = housePrice.house.min;
        window.data.rentPrice.placeholder = housePrice.house.placeholder;
        return;
      case 'palace':
        window.data.rentPrice.min = housePrice.palace.min;
        window.data.rentPrice.placeholder = housePrice.palace.placeholder;
        return;

    }
  };

  window.data.hometypeInput.addEventListener('input', pricetoHouse);

  // Moving in moving out time relation
  var moveIn = document.getElementById('timein');
  var moveOut = document.getElementById('timeout');

  var timeIn = function () {
    moveOut.value = moveIn.value;

  };

  var timeOut = function () {
    moveIn.value = moveOut.value;

  };

  moveIn.addEventListener('input', timeIn);
  moveOut.addEventListener('input', timeOut);
})();

window.data.housingType.addEventListener('change', window.utils.updateOffers);
window.load.loadData(window.data.URL, window.utils.successHandler, window.utils.errorHandler);
