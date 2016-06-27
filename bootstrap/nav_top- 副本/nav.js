(function($, exports) {
	$("ul[class*=nav]>li").click(function(e){
		$("ul[class*=nav]").find(".active").removeClass("active");
		$(e.target).parent("li").addClass("active");
	});
})(jQuery, window);
