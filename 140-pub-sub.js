var PubSub = (function() {
  var clazz = function() {
    // topics -> list of subscribers
    this.subscribers = {};
  };

  clazz.prototype.subscribe = function(topic, fn) {
    if(!this.subscribers[topic]) this.subscribers[topic] = [];
    this.subscribers[topic].push(fn);
  };

  clazz.prototype.publish = function(topic, arg) {
    if(!this.subscribers[topic]) return false;
    for(var i = 0; i < this.subscribers[topic].length; i++) {
      this.subscribers[topic][i](arg);
    }
    return this;
  };

  return clazz;
})();

var publisher = new PubSub();
publisher.subscribe("eyesOnly", function(msg) {
  console.log("Burn after reading " + msg);
});
publisher.subscribe("eyesOnly", function(msg) {
  console.log("Nick Fury is OOO " + msg);
});

publisher.subscribe("hydra", function(msg) {
  console.log("Alex Pierce copies " + msg);
});

publisher.publish("eyesOnly", "We have the Winter Soldier");
publisher.publish("hydra", "It's time!");
