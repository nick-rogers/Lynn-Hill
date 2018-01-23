$(document).ready(function(){

	setTimeout(moveUp, 800);

	$('.thing').css('opacity','1');
	$('.thing').css('margin-top','-8vw');

	function moveUp() {
		$('.bd1').css('margin-top', '0');
		$('.bd2').css('margin-top', '-10vw');
		$('.bd3').css('margin-top', '0');
		$('.bd4').css('margin-top', '-20vw');
	}

});