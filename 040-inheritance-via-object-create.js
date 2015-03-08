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

function SuperHero(name /**, age*/) {
  // super call - can pass args
  Person.call(this, name);
  // this.age = age;
}

SuperHero.prototype = Object.create(Person.prototype, {
  warCry: {
    value: function() {
      // super-call
      // console.log(Person.prototype.getName.apply(this));
      return ("My NAME is " + this.name + "!!!");
    }
  }
});

var captainAmerica = new SuperHero("Captain America");
var thor = new SuperHero("Thor");

console.log(captainAmerica.sayHello(thor));
console.log(captainAmerica.warCry());
