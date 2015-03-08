var props = {
  "name": {
    get: function() { return this._name; },
    set: function(name) { this._name = name; }
  },
  "sayHello": {
    value: function (to) {
      return "Hello! " + to.name + ". My name is " + this.name;
    },
    enumerable: true,
    writable: false,
    configurable: true
  }
};

var hulk = { _name: "Hulk" };
var wasp = { _name: "Wasp" };
Object.defineProperties(hulk, props);
Object.defineProperties(wasp, props);

console.log(hulk.name);
// Hulk
delete hulk.sayHello
console.log(hulk.sayHello(wasp));
// Hello! wasp. My name is Hulk
