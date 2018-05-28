//........................................................................................Play agian..........................................................................................

$(document).on("click", "#playAgainTime", function() {
	
	counter = 0;
	birdnumber = 0;
	killedWrongBird = "false";
	lost = "false";

	for (var i=0; i<timeouts.length; i++) {
		clearTimeout(timeouts[i]);
	}

	$(".points").html(counter);
	$('.TimeSelectorDone').hide();
	$('.countDownToStart').show();
	countdownToStartNumber	= 3;
	countDownToStartTimeGame(lastplayedTime, 1);
});

$(document).on("click", "#playAgainTime2", function() {
	
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
	
	GameStop = "true";
	counter = 0;
	birdnumber = 0;

	clearTimeoutsTimeGame();

	$(".birdsContainer").empty();
	countdownToStartNumber = 3;

	$('.spillHolder').hide();
	$('.points').hide();
	$('.countDown').hide();

	if(game == 3) {
		$(".points").html(counter);
		$('.TimeSelectorDone').hide();
		countDownToStartTimeGame(lastplayedTime, 1);
	}
	else if(game == 4) {
		$(".points").html(counter+"/"+numberOfBirdsToKill);
		$('.TimeSelectorDone2').hide();
		countDownToStartTimeGame(numberOfBirdsToKill, 2);
	}
	$('.retryTime, .exitTime').hide();
	$('.countDownToStart').show();

});

//........................................................................................ExitTimePlay..........................................................................................

$(document).on("click", ".exitTime", function() {
	
	GameStop = "true";
	counter = 0;
	birdnumber = 0;

	clearTimeoutsTimeGame();

	$(".birdsContainer").empty();

	if(game == 3) {
		var levelScore15 = checkLocalStorageTime15();
		var levelScore30 = checkLocalStorageTime30();
		var levelScore60 = checkLocalStorageTime60();
		$('.spillHolder, .countDown, .exitTime, .retryTime, .points, .TimeSelectorDone').hide();
		$('.TimeSelector').show();
	}
	else if(game == 4) {
		var levelScore10Birds = checkLocalStorageTime10Birds();
		var levelScore30Birds = checkLocalStorageTime30Birds();
		var levelScore50Birds = checkLocalStorageTime50Birds();
		$('.spillHolder, .countDown, .exitTime, .retryTime, .points, .TimeSelectorDone2').hide();
		$('.TimeSelector2').show();
	}
	
});

//........................................................................................Back..........................................................................................

$(document).on("click", ".backTimeSelector", function() {
	
	counter = 0;
	$(".points").html(counter);
	$('.TimeSelector').hide();
	$('.gameTreeAndFour').show();
});
$(document).on("click", ".backTimeSelector2", function() {
	
	counter = 0;
	$(".points").html(counter);
	$('.TimeSelector2').hide();
	$('.gameTreeAndFour').show();
});

$(document).on("click", ".backTimeSelectorDone", function() {
	
	counter = 0;
	var levelScore15 = checkLocalStorageTime15();
	var levelScore30 = checkLocalStorageTime30();
	var levelScore60 = checkLocalStorageTime60();
	$(".points").html(counter);
	$('.TimeSelectorDone').hide();
	$('.TimeSelector').show();
});

$(document).on("click", ".backTimeSelectorDone2", function() {
	
	counter = 0;
	var levelScore10Birds = checkLocalStorageTime10Birds();
	var levelScore30Birds = checkLocalStorageTime30Birds();
	var levelScore50Birds = checkLocalStorageTime50Birds();
	$(".points").html(counter);
	$('.TimeSelectorDone2').hide();
	$('.TimeSelector2').show();
});

$(document).on("click", ".Game3and4Back", function() {
	
	$('.gameTreeAndFour').hide();
	$('.info').show();
});

//.......................................................................................continue play..........................................................................................

$(document).on("click", "#continuePlay4", function() {
	
	var game1 = 1;
	$('#information6').hide();
	$('.countDownToStart').show();
	countdownToStartNumber	= 3;
	countDownToStartTimeGame(time, game1);
});

$(document).on("click", "#continuePlay5", function() {
	
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
	
	fremsideVenstreHoyere = 2;
	$('.info').hide();
    $('.gameTreeAndFour').show();
});


$(".game3").click(function(){
	
	var levelScore15 = checkLocalStorageTime15();
	var levelScore30 = checkLocalStorageTime30();
	var levelScore60 = checkLocalStorageTime60();
    $('.gameTreeAndFour').hide();
	$('.TimeSelector').show();
});


$(".game4").click(function(){
	
	fremsideVenstreHoyere = 2;
	var levelScore10Birds = checkLocalStorageTime10Birds();
	var levelScore30Birds = checkLocalStorageTime30Birds();
	var levelScore50Birds = checkLocalStorageTime50Birds();
	$('.gameTreeAndFour').hide();
	$('.TimeSelector2').show();	

});

var time;
$("#time1, #time2, #time3").click(function(){
	
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