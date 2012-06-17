/*
 * jQuery Expander
 * Copyright 2012 Peter Pensold
 * 
 * https://github.com/petpen/jQuery-Expander
 *  */
(function($){
	$.fn.expander = function(options) {
		var defaults = {
			element: '.expandable',
			expander: '.expander',
			reducer: '.reducer',
			reduced: '.reduced',
			expanded: '.expanded'
		};
		
		var settings = $.extend({}, defaults, options);

		var methods = {
			init: function(element) {
				return element.each(function(index) {
					$(this).find(settings.element).each(function(index) {
						var $reduced = $(this).find(settings.reduced),
							$expanded = $(this).find(settings.expanded),
							$expander = $(this).find(settings.expander),
							$reducer = $(this).find(settings.reducer);
		
						$expander.click(function(e) {
							$expander.hide();
							$reducer.show();
							$reduced.hide();
							$expanded.show();
							e.stopPropagation();
							return false;
						});
		
						$reducer.click(function(e) {
							$reducer.hide();
							$expander.show();
							$reduced.show();
							$expanded.hide();
							e.stopPropagation();
							return false;
						});
		
						$reducer.hide();
						$expanded.hide();
						$expander.show();
						$reduced.show();
					});
				});
			}
		};

		return methods.init(this);
	};
})(jQuery);