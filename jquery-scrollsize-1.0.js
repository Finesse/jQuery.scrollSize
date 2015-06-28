/**
	jQuery microplugin that gets size of inner content of scrollable elements

	https://github.com/FinesseRus/jQuery.scrollSize

	v1.0
*/


(function($, doc) {

	/**
		Gets scrollable content width
	*/
	$.fn.scrollWidth = function() {
		return (this[0] === doc ? doc.documentElement : this[0]).scrollWidth;
	};

	/**
		Gets scrollable content height
	*/
	$.fn.scrollHeight = function() {
		return (this[0] === doc ? doc.documentElement : this[0]).scrollHeight;
	};

})(jQuery, document);