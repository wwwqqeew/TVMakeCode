(function($, exports) {
	$(".wilCng").click(function(e){
		$(".fo").focus();
		$(".wilCng").removeClass("active");
		$(e.target).addClass("active");
	});
})(jQuery, window);
