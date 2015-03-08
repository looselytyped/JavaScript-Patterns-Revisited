// globals imported
// augmentation
// assumes jQuery has been imported
// alias jQuery to $
;(function($) {
  'use strict';
  // augment $
  $.fn.blueText = function() {
    this.each(function() {
      $(this).css("color", "blue");
    });
    return this;
  };
})(jQuery);
