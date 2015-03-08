var Singleton;

(function() {
  var instance;
  Singleton = function(name) {
    if (instance) {
      return instance;
    }
    this.name = name;
    instance = this;
  };
  Singleton.prototype.getName = function() {
    return name;
  };
})();

var thor = new Singleton("Thor");
var evilThor = new Singleton("Thor");

console.log(thor === evilThor);
