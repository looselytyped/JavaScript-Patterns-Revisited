var Mail = (function() {
  "use strict";
  var clazz = function(price) {
    this.price = price;
    this.decorators = [];
  };
  clazz.decorators = {
    airShipping: {
      cost: function(cost) { return cost + 2.00; }
    },
    priorityShipping: {
      cost: function(cost) { return cost * 2.00; }
    }
  };
  clazz.prototype.add = function(decorator) {
    this.decorators.push(decorator);
    return this;
  };
  clazz.prototype.cost = function() {
    var price = this.price, dec = this.decorators, i;
    for(i = 0; i < dec.length; i++) {
      price = clazz.decorators[dec[i]].cost(price);
    }
    return price;
  };
  return clazz;
})();

var m = new Mail(10);
console.log(m.add('airShipping').add('priorityShipping').cost());
