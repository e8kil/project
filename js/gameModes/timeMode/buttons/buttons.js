//........................................................................................Play agian..........................................................................................

$(document).on("click", "#playAgainTime", function() {
	vibrationclick();
	counter = 0;
	birdnumber = 0;
	killedWrongBird = "false";
	lost = "false";

	for (var i=0; i<timeouts.length; i++) {
		clearTimeout(timeouts[i]);
	}

	$(".poeng").html(""+counter+"");
	$('.TimeSelectorDone').hide();
	$('.countDownToStart').show();
	countdownToStartNumber	= 3;
	countDownToStartTimeGame(lastplayedTime, 1);
});

$(document).on("click", "#playAgainTime2", function() {
	vibrationclick();
	counter = 0;
	birdnumber = 0;
	killedWrongBird = "false";
	lost = "false";

	for (var i=0; i<timeouts.length; i++) {
		clearTimeout(timeouts[i]);
	}
	countdownToStartNumber	= 3;
	$('.TimeSelectorDone2').hide();

	window.setTimeout(function() {
		countDownToStartTimeGame(numberOfBirdsToKill, 2);
	}, 500);

});

//........................................................................................Retry..........................................................................................

$(document).on("click", ".retryTime", function() {
	vibrationclick();
	GameStop = "true";
	counter = 0;
	birdnumber = 0;

	clearTimeoutsTimeGame();

	$(".kuleHolder").empty();
	countdownToStartNumber = 3;

	$('.spillHolder').hide();
	$('.poeng').hide();
	$('.countDown').hide();

	if(game == 3) {
		$(".poeng").html(""+counter+"");
		$('.TimeSelectorDone').hide();
		countDownToStartTimeGame(lastplayedTime, 1);
	}
	else if(game == 4) {
		$(".poeng").html(""+counter+"/"+numberOfBirdsToKill+"");
		$('.TimeSelectorDone2').hide();
		countDownToStartTimeGame(numberOfBirdsToKill, 2);
	}
	$('.retryTime, .exitTime').hide();
	$('.countDownToStart').show();

});

//........................................................................................ExitTimePlay..........................................................................................

$(document).on("click", ".exitTime", function() {
	vibrationclick();
	GameStop = "true";
	counter = 0;
	birdnumber = 0;

	clearTimeoutsTimeGame();

	$(".kuleHolder").empty();

	if(game == 3) {
		var levelScore15 = checkLocalStorageTime15();
		var levelScore30 = checkLocalStorageTime30();
		var levelScore60 = checkLocalStorageTime60();
		$('.spillHolder, .countDown, .exitTime, .retryTime, .poeng, .TimeSelectorDone').hide();
		$('.TimeSelector').show();
	}
	else if(game == 4) {
		var levelScore10Birds = checkLocalStorageTime10Birds();
		var levelScore30Birds = checkLocalStorageTime30Birds();
		var levelScore50Birds = checkLocalStorageTime50Birds();
		$('.spillHolder, .countDown, .exitTime, .retryTime, .poeng, .TimeSelectorDone2').hide();
		$('.TimeSelector2').show();
	}
	
});

//........................................................................................Back..........................................................................................

$(document).on("click", ".backTimeSelector", function() {
	vibrationclick();
	counter = 0;
	$(".poeng").html(""+counter+"");
	$('.TimeSelector').hide();
	$('.gameTreeAndFour').show();
});
$(document).on("click", ".backTimeSelector2", function() {
	vibrationclick();
	counter = 0;
	$(".poeng").html(""+counter+"");
	$('.TimeSelector2').hide();
	$('.gameTreeAndFour').show();
});

$(document).on("click", ".backTimeSelectorDone", function() {
	vibrationclick();
	counter = 0;
	var levelScore15 = checkLocalStorageTime15();
	var levelScore30 = checkLocalStorageTime30();
	var levelScore60 = checkLocalStorageTime60();
	$(".poeng").html(""+counter+"");
	$('.TimeSelectorDone').hide();
	$('.TimeSelector').show();
});

$(document).on("click", ".backTimeSelectorDone2", function() {
	vibrationclick();
	counter = 0;
	var levelScore10Birds = checkLocalStorageTime10Birds();
	var levelScore30Birds = checkLocalStorageTime30Birds();
	var levelScore50Birds = checkLocalStorageTime50Birds();
	$(".poeng").html(""+counter+"");
	$('.TimeSelectorDone2').hide();
	$('.TimeSelector2').show();
});

$(document).on("click", ".Game3and4Back", function() {
	vibrationclick();
	fremsideKule();
	$('.gameTreeAndFour').hide();
	$('.info').show();
});

//.......................................................................................continue play..........................................................................................

$(document).on("click", "#continuePlay4", function() {
	vibrationclick();
	var game1 = 1;
	$('#information6').hide();
	$('.countDownToStart').show();
	countdownToStartNumber	= 3;
	countDownToStartTimeGame(time, game1);
});

$(document).on("click", "#continuePlay5", function() {
	vibrationclick();
	$('#information7').hide();

	var game2 = 2;
	$('.TimeSelector2').hide();
	$('.TimeSelectorDone2').hide();
	$('.countDownToStart').show();
	countdownToStartNumber	= 3;
	countDownToStartTimeGame(numbOfBirds, game2);

});

//...........................................................Spill 3 og 4.................................................................................................


$("#spill3").click(function(){
	vibrationclick();
	fremsideVenstreHoyere = 2;
	$(".fremsideKuleBilde").css("transform","scaleX(1)");
	$(".fremsideKule").attr('style','left: 0px', 'height: '+kuleFremsidebredde+'');
	clearTimeout(fremsideNedtelling);
	$('.info').hide();
    $('.gameTreeAndFour').show();
});


$(".game3").click(function(){
	vibrationclick();
	var levelScore15 = checkLocalStorageTime15();
	var levelScore30 = checkLocalStorageTime30();
	var levelScore60 = checkLocalStorageTime60();
    $('.gameTreeAndFour').hide();
	$('.TimeSelector').show();
});


$(".game4").click(function(){
	vibrationclick();
	fremsideVenstreHoyere = 2;
	$(".fremsideKuleBilde").css("transform","scaleX(1)");
	$(".fremsideKule").attr('style','left: 0px', 'height: '+kuleFremsidebredde+'');
	clearTimeout(fremsideNedtelling);
	var levelScore10Birds = checkLocalStorageTime10Birds();
	var levelScore30Birds = checkLocalStorageTime30Birds();
	var levelScore50Birds = checkLocalStorageTime50Birds();
	$('.gameTreeAndFour').hide();
	$('.TimeSelector2').show();	

});

var time;
$("#time1, #time2, #time3").click(function(){
	vibrationclick();
	$('.TimeSelector').hide();

	var id = $(this).attr("id");

	if (id == "time1")	{
		time = 15;
	}
	else if (id == "time2") {
		time = 30;
	}
	else if (id == "time3") {
		time = 60;
	}

	try {
	   var a = amplify.store("15");
	   var b = amplify.store("30");
	   var c = amplify.store("60");

		if(a >=1 || b >=1 || c >=1){
			var game1 = 1;
			$('.TimeSelector').hide();
			$('.TimeSelectorDone').hide();
			$('.countDownToStart').show();
			countdownToStartNumber	= 3;
			countDownToStartTimeGame(time, game1);
		}
		else {
			$('#information6').show();
		}

	} catch(e){
			$('#information6').show();
	}

});

var numbOfBirds;
$("#time4, #time5, #time6").click(function(){
	vibrationclick();
	var levelScore10Birds = checkLocalStorageTime10Birds();
	var levelScore30Birds = checkLocalStorageTime30Birds();
	var levelScore50Birds = checkLocalStorageTime50Birds();

    $('.TimeSelector2').hide();

	var id = $(this).attr("id");

	if (id == "time4")	{
		numbOfBirds = 10;
	}
	else if (id == "time5") {
		numbOfBirds = 30;
	}
	else if (id == "time6") {
		numbOfBirds = 50;
	}

	try {
	   var a = amplify.store("10Birds");
	   var b = amplify.store("30Birds");
	   var c = amplify.store("50Birds");

		if(a !=10000000000 || b !=10000000000 || c !=10000000000 ){
			var game2 = 2;
			$('.TimeSelector2').hide();
			$('.TimeSelectorDone2').hide();
			$('.countDownToStart').show();
			countdownToStartNumber	= 3;
			countDownToStartTimeGame(numbOfBirds, game2);
		}
		else {
			$('#information7').show();
		}

	} catch(e){
			$('#information7').show();
	}
});