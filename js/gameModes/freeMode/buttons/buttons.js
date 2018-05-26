
//........................................................................................Play agian..........................................................................................

$(document).on("click", "#playAgain", function() {
	counter = 0;
	birdnumber = 0;
	lost = "false";
	$(".points").html(counter);
	$('.points').show();
	$('.taptHolder').hide();
	$('.spillHolder').show();
	createBirdFreeGame();
});

//........................................................................................Back..........................................................................................

$(document).on("click", ".back", function() {
	counter = 0;
	$(".points").html(counter);
	$('.taptHolder').hide();
	$('.info').show();
});

//.................................................................................Spill 2.................................................................................................


$("#spill2").click(function(){
	var game = 22;
	fremsideVenstreHoyere = 2;
	$('.info').hide();
	$('.spillHolder').show();

	try {
	   var a = amplify.store("score");

		if(a>=2){
			window.setTimeout("spillFree()", 500);
			$('.points').show();
		}
		else {
			introSpill(game);
		}

	} catch(e){
			introSpill(game);
	}
});
