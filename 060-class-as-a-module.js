// Class as a module
var Person = (function() {
  'use strict';
  var clazz = function(name) {
    if(!(this instanceof Person)) {
      return new Person(name);
    }
    this.name = name;
  };

  clazz.prototype.getName = function () {
    return this.name;
  };

  clazz.prototype.sayHello = function(msg) {
    return msg + ". My name is " + this.name;
  };

  return clazz;
})();

var hulk = Person("Hulk");
console.log(hulk.getName());
