'use strict';

(function () {
  var KeyCodes = window.utils.KeyCodes;

  var getOfferFeatures = function (card, data) {
    var features = card.querySelector('.popup__features');
    var featureList = features.querySelectorAll('.popup__feature');

    featureList.forEach(function (feature) {
      feature.remove();
    });

    data.forEach(function (elem) {
      var feature = document.createElement('li');
      feature.classList.add('popup__feature', 'popup__feature--' + elem);
      features.appendChild(feature);
    });
  };

  var getRoomsText = function (rooms) {
    var roomsText = 'комнаты';
    if (rooms % 10 === 1) {
      roomsText = 'комната';
    }
    if (rooms % 10 === 0 || rooms % 10 >= 5) {
      roomsText = 'комнат';
    }
    return roomsText;
  };

  var getGuestsText = function (guests) {
    var guestsText = 'гостей';
    if (guests % 10 === 1) {
      guestsText = 'гостя';
    }
    return guestsText;
  };

  var getOfferPhotos = function (card, data) {
    var photos = card.querySelector('.popup__photos');

    data.forEach(function (element) {
      var photo = card.querySelector('.popup__photo').cloneNode(true);

      photo.src = element;
      photos.appendChild(photo);
    });
    photos.removeChild(photos.children[0]);
  };

  var createCard = function (data) {
    var offerCardElement = window.data.cardTemplate.cloneNode(true);
    var offerTitle = offerCardElement.querySelector('.popup__title');
    var offerAuthor = offerCardElement.querySelector('.popup__avatar');
    var offerTextAddress = offerCardElement.querySelector('.popup__text--address');
    var offerPrice = offerCardElement.querySelector('.popup__text--price');
    var offerType = offerCardElement.querySelector('.popup__type');
    var offerCapacity = offerCardElement.querySelector('.popup__text--capacity');
    var offerTime = offerCardElement.querySelector('.popup__text--time');
    var offerDescription = offerCardElement.querySelector('.popup__description');
    var closeCardButton = offerCardElement.querySelector('.popup__close');
    closeCardButton.addEventListener('click', closeCard);
    offerAuthor.src = data.author.avatar;
    offerTitle.textContent = data.offer.title;
    offerTextAddress.textContent = data.offer.address;
    offerPrice.textContent = data.offer.price + ' ₽/ночь';
    offerType.textContent = window.data.OffersType[data.offer.type];
    offerCapacity.textContent = data.offer.rooms + ' ' + getRoomsText(data.offer.rooms, 'комнат') + ' для ' + data.offer.guests + ' ' + getGuestsText(data.offer.guests);
    offerTime.textContent = 'Заезд после ' + data.offer.checkin + ', ' + 'Выезд до ' + data.offer.checkout;
    offerDescription.textContent = data.offer.description;
    getOfferPhotos(offerCardElement, data.offer.photos);
    getOfferFeatures(offerCardElement, data.offer.features);
    return offerCardElement;
  };

  var closeCard = function () {
    var card = document.querySelector('.map__card');
    if (card) {
      document.removeEventListener('keydown', onEscPressCard);
      card.querySelector('.popup__close').removeEventListener('click', closeCard);
      card.remove();
      var currentOffer = document.querySelector('.map__pin--active');
      currentOffer.classList.remove('map__pin--active');
    }
  };

  var onEscPressCard = function (evt) {
    if (evt.keyCode === KeyCodes.ESC) {
      closeCard();
    }
  };

  var showCard = function (data) {
    closeCard();
    window.data.map.insertBefore(createCard(data), window.data.cardsContainer);
    document.addEventListener('keydown', onEscPressCard);
  };

  window.card = {
    closeCard: closeCard,
    showCard: showCard
  };

})();
