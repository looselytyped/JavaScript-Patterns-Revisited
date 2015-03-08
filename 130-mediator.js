var Member = (function() {
  clazz = function(name) {
    this.name = name;
    this.muted = false;
  };
  clazz.prototype.sendMsg = function(msg, /** optional */ to) {
    this.room.sendMsg(msg, this, to);
  };
  clazz.prototype.receiveMsg = function(msg, from) {
    console.log(this.name + ": Received '" + msg + "' from " + from.getName());
  };
  clazz.prototype.getName = function() {
    return this.name;
  };
  return clazz;
})();

var Room = (function() {
  clazz = function(name) {
    this.name = name;
    this.members = [];
  };
  clazz.prototype.register = function(member) {
    member.room = this;
    this.members.push(member);
  };
  clazz.prototype.sendMsg = function(msg, from, to) {
    if (to) {
      if(!to.muted) to.receiveMsg(msg, from);
    }
    else this.members.map(function(m) {
      if (m != from && !m.muted) m.receiveMsg(msg, from);
    });
  };
  return clazz;
})();

var thor = new Member("Thor");
var ironMan = new Member("Iron Man");
var blackWidow = new Member("Black Widow");

var shieldHQ = new Room("Shield");
shieldHQ.register(thor);
shieldHQ.register(ironMan);
shieldHQ.register(blackWidow);

thor.sendMsg("We need Backup!!", ironMan);
blackWidow.sendMsg("On my way!");
ironMan.muted = true;
blackWidow.sendMsg("Iron Man ... U there?", ironMan);

