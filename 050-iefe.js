'use strict';

// No args
;
(function() {
  'use strict';
  console.log("CHARGE!!!");
})();

// With args
;
(function(name, msg) {
  'use strict';
  console.log('Hello ' + name + '!. ' + msg);
})('Iron Man', 'You are so awesome!');

