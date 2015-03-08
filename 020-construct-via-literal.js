var hulk = {
  _name: "Hulk",
  get name() { return this._name; },
  sayHello: function(to) {
    return "Hello! " + to.name + ". My name is " + this.name;
  }
};

var wasp = {
  _name: "Wasp",
  get name() { return this._name; }
};

console.log(hulk.name);
// Hulk
console.log(hulk.sayHello(wasp));
// Hello! wasp. My name is Hulk
