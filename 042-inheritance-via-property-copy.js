function extend(child /**, parents */) {
  'use strict';
  var args = Array.prototype.slice.apply(arguments);
  args.shift();
  var i = 0, parents = args || {};
  for(i = 0; i < parents.length; i++) {
    var parent = parents[i];
    for(var prop in parent) {
      if(parent.hasOwnProperty(prop)) {
        // shallow copy
        child[prop] = parent[prop];
      }
    }
  }
}

var ironMan = {
  fly: function() { return this.name + " is Flying"; },
  fight: function() { return this.name + " is Fighting"; },
  friends: ["Pepper", "Rhodey", "Obadiah"]
};

var agentOfShield = {
  callIn: function() { return this.name + ": Reporting for duty!"; }
};

var tonyStark = {
  name: "Tony Stark"
};

extend(tonyStark, ironMan, agentOfShield);
console.log(tonyStark.fly());
console.log(tonyStark.callIn());
// affects friends in ironMan
tonyStark.friends.pop();
console.log(ironMan.friends);
