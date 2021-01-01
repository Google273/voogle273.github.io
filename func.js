$(function function_name(argument) {
	// body...
	$('#burger img').on('click', function click_buregr(argument) {
		if ($('#burger img').hasClass('close')) {
			$('#menu-mobile').slideToggle(500);
			$('#burger img').removeClass('close');
		}	
		else {
			$('#menu-mobile').slideToggle(500);
			$('#burger img').addClass('close');
		}
	})

		


})