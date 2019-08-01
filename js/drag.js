'use strict';

(function () {
  window.data.mainPin.addEventListener('mousedown', function (evt) {
    evt.preventDefault();
    window.data.mainPin.setAttribute('draggable', true);
    window.utils.activateMap();
    window.utils.activatePage();

    var startCoords = {
      x: evt.clientX,
      y: evt.clientY
    };

    var isDragged = false;

    var onMouseMove = function (moveEvt) {
      moveEvt.preventDefault();
      isDragged = true;

      var shift = {
        x: startCoords.x - moveEvt.clientX,
        y: startCoords.y - moveEvt.clientY
      };

      startCoords = {
        x: moveEvt.clientX,
        y: moveEvt.clientY
      };

      var yCoordinate = window.data.mainPin.offsetTop - shift.y;
      var xCoordinate = window.data.mainPin.offsetLeft - shift.x;

      window.utils.setAdress(xCoordinate, yCoordinate);

      if (yCoordinate < window.data.MAX_Y && yCoordinate > window.data.MIN_Y) {
        window.data.mainPin.style.top = yCoordinate + 'px';
      }

      if (xCoordinate < window.data.MAX_X && xCoordinate > window.data.MIN_X) {
        window.data.mainPin.style.left = xCoordinate + 'px';
      }
    };

    var onMouseUp = function (upEvt) {
      upEvt.preventDefault();

      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseup', onMouseUp);

      if (isDragged) {
        var onClickPreventDefault = function (deleteEvt) {
          deleteEvt.preventDefault();
          window.data.mainPin.removeEventListener('click', onClickPreventDefault);
        };
        window.data.mainPin.addEventListener('click', onClickPreventDefault);
      }
    };
    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseup', onMouseUp);
  });
})();
