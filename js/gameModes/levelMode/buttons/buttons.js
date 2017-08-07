//...........................................................Spill 1.................................................................................................


var pushed = 0;
$("#spill").click(function(){
	vibrationclick();
	var levelScore = checkLocalStorageLevel();
	clearTimeout(fremsideNedtelling);
	fremsideVenstreHoyere = 2;
	$(".fremsideKule").attr('style','left: 0px', 'height: '+kuleFremsidebredde+'');
	$('.info').hide();
	$('.levelHolder').show();
	createLevelHolder();	
	if(levelScore == 1) {
		$(".1").get(0).scrollIntoView();
	}
	else {
		if(levelScore != levels.length) {
			$("."+(levelScore+1)+"").get(0).scrollIntoView();			
		}
		else {
			$("."+levelScore+"").get(0).scrollIntoView();
		}
	}

});
//........................................................................................Retry in game..........................................................................................


$(document).on("click", ".retryTimeLevel", function() {
	vibrationclick();
	gameTimer.stop();
	GameStop = "true";
	counter = 0;
	birdnumber = 0;
	$(".exitTimeLevel, .retryTimeLevel, .poeng, .timer").hide();
	$('.timer').empty();
	clearTimeoutsLevelTimeGame();
	$(".kuleHolder").empty();
	$(".container").css("overflow","hidden");
	$('.taptHolderLevel').hide();
	$('.spillHolder').show();
	spillLevelLevelGame(levels[(currentLevel-1)]);
});
//........................................................................................Retry..........................................................................................


$(document).on("click", ".retry", function() {
	vibrationclick();
	$(".kuleHolder").empty();
	$(".container").css("overflow","hidden");
	$('.taptHolderLevel').hide();
	$('.spillHolder').show();
	spillLevelLevelGame(levels[(currentLevel-1)]);
});

//........................................................................................Back in game..........................................................................................

$(document).on("click", ".exitTimeLevel", function() {
	vibrationclick();
	gameTimer.stop();
	GameStop = "true";
	counter = 0;
	birdnumber = 0;
	$(".exitTimeLevel, .retryTimeLevel, .poeng, .timer").hide();
	$('.timer').empty();
	clearTimeoutsLevelTimeGame();
	$(".kuleHolder").empty();
	$('.kuleHolder').hide();
	$('.levelHolder').show();
	createLevelHolder();	
	if(currentLevel == 1) {
		$(".1").get(0).scrollIntoView();
	}
	else {
		var scrollTo = parseInt(currentLevel);
		if(currentLevel != levels.length) {
			$("."+(scrollTo+1)+"").get(0).scrollIntoView();				
		}
		else {
			$("."+scrollTo+"").get(0).scrollIntoView();
		}

	}
});


//........................................................................................Back..........................................................................................

$(document).on("click", ".backLevel", function() {
	vibrationclick();
	counter = 0;
	$(".poeng").html(""+counter+"");
	$('.taptHolderLevel').hide();
	$('.levelHolder').show();
	createLevelHolder();
	console.log(currentLevel);	
	if(currentLevel == 1) {
		$(".1").get(0).scrollIntoView();
	}
	else {
		var scrollTo = parseInt(currentLevel);
		if(currentLevel != levels.length) {
			$("."+(scrollTo+1)+"").get(0).scrollIntoView();				
		}
		else {
			$("."+(scrollTo)+"").get(0).scrollIntoView();
		}

	}
});

$(document).on("click", ".backLevel2", function() {
	vibrationclick();
	counter = 0;
	var levelScore = checkLocalStorageLevel();
	var levelValue = parseInt(level);
	$(".poeng").html(""+counter+"");
	$('.completeLevel').hide();
	$('.levelHolder').show();
	createLevelHolder();	
	if(currentLevel == 1) {
		$(".1").get(0).scrollIntoView();
	}
	else {
		var scrollTo = parseInt(currentLevel);
		if(currentLevel != levels.length) {
			$("."+(scrollTo+1)+"").get(0).scrollIntoView();				
		}
		else {
			$("."+(scrollTo)+"").get(0).scrollIntoView();
		}
	}

	counter = 0;
	$(".poeng").html(""+counter+"");
	fremsideKule();
	$('.completeLevel').hide();
	$('.levelHolder').show();
});

$(document).on("click", ".backLevel3", function() {
	vibrationclick();
	$(".container").css("overflow-y","hidden");
	fremsideKule();
	$(".levels").empty();
	$('.levelHolder').hide();
	$('.info').show();
});

//........................................................................................play next level..........................................................................................

$(document).on("click", ".nxt", function() {
	currentLevel++;
	vibrationclick();
	if(currentLevel == noneKillNumber) {
		$('.completeLevel').hide();
		$('#information3').show();
	}
	else if(currentLevel == doubleKillNumber) {
		$('.completeLevel').hide();
		$('#information4').show();
	}
	else if(currentLevel == startTimeGame) { //first time mode level
		$('.completeLevel').hide();
		$('#information8').show();		
	}
	else if(levels[(currentLevel-1)][6][0] === true) { //timemode level
		$('.completeLevel').hide();
		timeLevelTimeGame = levels[currentLevel-1][6];
		$(".numberOfBirdsToKill").html(timeLevelTimeGame[1]);
		$(".timeToKillTheBirds").html(timeLevelTimeGame[2]);
		$("#information9").show();
	}
	else {
		$(".kuleHolder").empty();
		$(".container").css("overflow","hidden");
		$('.completeLevel').hide();
		$('.spillHolder').show();
		spillLevelLevelGame(levels[(currentLevel-1)]);
	}

});

//.......................................................................................continue play..........................................................................................

$(document).on("click", "#continuePlay", function() {
	vibrationclick();
	$(".container").css("overflow","hidden");
	$('#information3').hide();
	spillLevelLevelGame(levels[(noneKillNumber-1)]);
});


$(document).on("click", "#continuePlay2", function() {
	vibrationclick();
	$(".container").css("overflow","hidden");
	$('#information4').hide();
	spillLevelLevelGame(levels[(doubleKillNumber-1)]);
});

$(document).on("click", "#continuePlay3", function() {
	vibrationclick();
	$(".container").css("overflow","hidden");
	$('#information5').hide();
	spillLevelLevelGame(levels[(smallBirdNumber-1)]);
});

$(document).on("click", "#continuePlay6", function() {
	console.log("click");
	$("#information8").hide();
	timeLevelTimeGame = levels[startTimeGame-1][6];
	$(".numberOfBirdsToKill").html(timeLevelTimeGame[1]);
	$(".timeToKillTheBirds").html(timeLevelTimeGame[2]);
	$("#information9").show();
});

$(document).on("click", "#continuePlay7", function() {

	vibrationclick();
	$(".container").css("overflow","hidden");
	$('#information9').hide();
	spillLevelLevelGame(levels[(currentLevel-1)]);

});