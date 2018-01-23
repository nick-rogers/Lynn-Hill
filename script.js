$(document).ready(function(){

	var section = document.getElementById("main");
	section.scrollTop = section.scrollHeight;

	var isFirefox = typeof InstallTrigger !== 'undefined';
	var isSafari = /constructor/i.test(window.HTMLElement) || (function (p) { return p.toString() === "[object SafariRemoteNotification]"; })(!window['safari'] || (typeof safari !== 'undefined' && safari.pushNotification));

	console.log(isFirefox);
	console.log(isSafari);

	if(isFirefox){
		$('#sec5').css('margin-top', '1550vw');
		$('#sec5').css('height', '270vw');
		$('#sec5').css('background-size', '100% 130%');
		$('.b-circle').css('display','none');
	}
	else if(isSafari){
		$('#sec5').css('margin-top', '1550vw');
		$('#sec5').css('height', '270vw');
		$('#sec5').css('background-size', '100% 130%');
		$('.b-circle').css('display','none');
	}

	setTimeout(pointed, 2000);

	function pointed() {
		$('.scroll-up').fadeIn(400);
	}
	$('#main').scroll(function(){
		if($('#sp1').offset().top > -580){
			$('.c1').fadeIn(500);
			$('.c-1').css('width', '25vw');
			$('.c-1').css('height', '25vw');
			$('.c-1').css('margin-left', '37vw');
			$('.c-2').css('width', '20vw');
			$('.c-2').css('height', '20vw');
			$('.c-2').css('margin-left', '10vw');
			$('.c-3').css('width', '20vw');
			$('.c-3').css('height', '20vw');
			$('.c-3').css('margin-left', '69vw');
		}
		if($('#sp2').offset().top > -1500){
			$('.dots').css('background-image', 'url(dots.gif)');
			setTimeout(dotted, 2000);

			function dotted(){
				$('.c2').fadeIn(500);
				$('.c-4').css('width', '38vw');
				$('.c-4').css('height', '38vw');
				$('.c-4').css('margin-left', '60vw');
			}
		}
		if($('#sp3').offset().top > -500){
			setTimeout(rocked, 1000);

			function rocked(){
				$('.rock').css('margin-top', '280vw');
				$('.rock').css('transform', 'rotate(120deg)');
				$('.c-5').fadeIn(500);
				$('.c-5').css('width', '15vw');
				$('.c-5').css('height', '15vw');
				$('.c-5').css('margin-left', '28vw');
				setTimeout(goAway, 3000);
			}

			function goAway(){
				$('.rock').css('display', 'none');

			}
		}
		if($('#sp4').offset().top > 0){
			setTimeout(fadeOne, 800);
			$('#main').css('overflow-y', 'hidden');

			function fadeOne(){
				$('.t-first').fadeIn(500);
				setTimeout(fadeTwo, 800);
			}

			function fadeTwo(){
				$('.t-4days').fadeIn(500);
				setTimeout(fadeThree, 800);
			}

			function fadeThree(){
				$('.t-2900').fadeIn(500);
				setTimeout(final, 3000);
			}
			function final() {
				$('.white-ring').css('width', '100vw');
				$('.white-ring').css('height', '100vw');
				$('.white-ring').css('border-radius', '100vw');
				$('.white-ring').css('margin-left', '0vw');
				$('.white-ring').css('margin-top', '20vw');
				$('.white-ring').css('background-color', 'white');

				setTimeout(wait, 500);

			}

			function wait(){
				document.getElementById("click-white").click();

			}
		}

	});

	setTimeout(moveUp, 2000);

	function moveUp() {
		$('.bd1').css('margin-top', '0');
		$('.bd2').css('margin-top', '-10vw');
		$('.bd3').css('margin-top', '0');
		$('.bd4').css('margin-top', '-20vw');
	}

});