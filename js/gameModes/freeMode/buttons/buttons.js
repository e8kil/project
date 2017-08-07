
//........................................................................................Play agian..........................................................................................

$(document).on("click", "#playAgain", function() {
	vibrationclick();
	counter = 0;
	birdnumber = 0;
	lost = "false";
	$(".poeng").html(""+counter+"");
	$('.poeng').show();
	$('.taptHolder').hide();
	$('.spillHolder').show();
	createBirdFreeGame();
});

//........................................................................................Back..........................................................................................

$(document).on("click", ".back", function() {
	vibrationclick();
	counter = 0;
	$(".poeng").html(""+counter+"");
	fremsideKule();
	$('.taptHolder').hide();
	$('.info').show();
});

//.................................................................................Spill 2.................................................................................................


$("#spill2").click(function(){
	vibrationclick();
	var game = 22;
	fremsideVenstreHoyere = 2;
	$(".fremsideKuleBilde").css("transform","scaleX(1)");
	$(".fremsideKule").attr('style','left: 0px', 'height: '+kuleFremsidebredde+'');
	$('.info').hide();
	$('.spillHolder').show();
	$('.poeng').show();
	clearTimeout(fremsideNedtelling);

	try {
	   var a = amplify.store("score");

		if(a>=2){
			window.setTimeout("spillFree()", 500);
		}
		else {
			introSpill(game);
		}

	} catch(e){
			introSpill(game);
	}
});

$(window).resize(function() {
 	htmlAndCss();
});