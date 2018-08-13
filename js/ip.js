(function ($) {
	$(document).ready(function () {
		$('.ipv4').ipAddress();
		$('.ipv6').ipAddress({v:6});
	})
})(jQuery);