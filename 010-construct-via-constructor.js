function Person(name) {
  if(!(this instanceof Person)) {
    return new Person(name);
  }
  this.name = name;
}

Person.prototype.getName = function () {
  return this.name;
};

Person.prototype.sayHello = function (to) {
  return "Hello! " + to.getName() + ". My name is " + this.name;
};

var hulk = new Person("Hulk");
console.log(hulk.getName());
var wasp = new Person("Wasp");
console.log(hulk.sayHello(wasp));
