var Person = (function() {
  'use strict';
  var clazz = function(name) {
    this.name = name;
  };
  clazz.prototype.changeActivity = function(activity) {
    this.activity = activity;
  };
  clazz.prototype.move = function() {
    this.activity.execute(this, this.name + " is ");
  };
  return clazz;
})();

var Activity = (function() {
  var clazz = function(act) {
    this.act = act;
  };
  clazz.prototype.execute = function(ctx, msg) { this.act(msg); };
  return clazz;
})();

var run = new Activity(function(msg) { console.log(msg + "Running!"); });
var blastOff = new Activity(function(msg) { console.log(msg + "in flight baby!"); });

var ironMan = new Person("Iron Man");
ironMan.changeActivity(run); //ironMan is Walking
ironMan.move();
ironMan.changeActivity(blastOff);
ironMan.move();
