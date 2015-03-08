// expose a certain interface on the return object
// use internal functions to modularize the code
var theBus = (function(xCoord, yCoord) {
  'use strict';
  var targetCoords,
      contactShieldHq = function() { return [25, 20]; },
      requestTargetCoords = function() {
        // make ajax call to S.H.I.E.L.D HG && cache
        return targetCoords ||
                  (targetCoords = contactShieldHq());
      };

  // expose only the interface you want to
  return {
      getCoordinates: function() { return [xCoord, yCoord]; },
      vtol: function() { return "Taking off!!"; },
      loadGuns: function() { console.log("Loading!!"); },
      aim: function() {
        console.log("Locking target ... " + requestTargetCoords());
      },
      fire: function() {
        this.loadGuns();
        this.aim();
        return "Fire!"; }
  };
})(10, 20);

console.log(theBus.getCoordinates());
console.log(theBus.fire());
delete theBus.loadGuns;
// console.log(theBus.fire()); // uh oh!
