var theBus = (function(xCoord, yCoord) {
  'use strict';
  var targetCoords,
      contactShieldHq = function() { return [25, 20]; },
      requestTargetCoords = function() {
        // make ajax call to S.H.I.E.L.D HQ && cache
        return targetCoords ||
                  (targetCoords = contactShieldHq());
      },
      getCoordinates = function() { return [xCoord, yCoord]; },
      loadGuns = function() { console.log("Loading!!"); },
      aim = function() {
        console.log("Locking target ... " + requestTargetCoords());
      },
      fire = function() {
        loadGuns(); aim(); return "Fire!";
      };

  return {
      getCoordinates: getCoordinates,
      loadGuns: loadGuns,
      aim: aim,
      fire: fire
  };
})(10, 20);

console.log(theBus.fire());
delete theBus.loadGuns;
console.log(theBus.fire()); // works!
