//...........................................................Spill 1.................................................................................................


var pushed = 0;
$("#spill").click(function(){
	
	var levelScore = checkLocalStorageLevel();
	fremsideVenstreHoyere = 2;
	$('.info').hide();
	$('.levelHolder').show();
	createLevelHolder();	
	if(levelScore == 1) {
		$(".1").get(0).scrollIntoView();
	}
	else {
		if(levelScore != levels.length) {
			$("."+(levelScore+1)).get(0).scrollIntoView();			
		}
		else {
			$("."+levelScore).get(0).scrollIntoView();
		}
	}

});
//........................................................................................Retry in game..........................................................................................


$(document).on("click", ".retryTimeLevel", function() {
	
	gameTimer.stop();
	GameStop = "true";
	counter = 0;
	birdnumber = 0;
	$(".exitTimeLevel, .retryTimeLevel, .points, .timer").hide();
	$('.timer').empty();
	clearTimeoutsLevelTimeGame();
	$(".birdsContainer").empty();
	$(".container").css("overflow","hidden");
	$('.taptHolderLevel').hide();
	$('.spillHolder').show();
	spillLevelLevelGame(levels[(currentLevel-1)]);
});
//........................................................................................Retry..........................................................................................


$(document).on("click", ".retry", function() {
	
	$(".birdsContainer").empty();
	$(".container").css("overflow","hidden");
	$('.taptHolderLevel').hide();
	$('.spillHolder').show();
	spillLevelLevelGame(levels[(currentLevel-1)]);
});

//........................................................................................Back in game..........................................................................................

$(document).on("click", ".exitTimeLevel", function() {
	
	gameTimer.stop();
	GameStop = "true";
	counter = 0;
	birdnumber = 0;
	$(".exitTimeLevel, .retryTimeLevel, .points, .timer").hide();
	$('.timer').empty();
	clearTimeoutsLevelTimeGame();
	$(".birdsContainer").empty();
	$('.birdsContainer').hide();
	$('.levelHolder').show();
	createLevelHolder();	
	if(currentLevel == 1) {
		$(".1").get(0).scrollIntoView();
	}
	else {
		var scrollTo = parseInt(currentLevel);
		if(currentLevel != levels.length) {
			$("."+(scrollTo+1)).get(0).scrollIntoView();				
		}
		else {
			$("."+scrollTo).get(0).scrollIntoView();
		}

	}
});

//........................................................................................Back..........................................................................................

$(document).on("click", ".backLevel", function() {
	
	counter = 0;
	$(".points").hide();
	$('.taptHolderLevel').hide();
	$('.levelHolder').show();
	createLevelHolder();	
	if(currentLevel == 1) {
		$(".1").get(0).scrollIntoView();
	}
	else {
		var scrollTo = parseInt(currentLevel);
		if(currentLevel != levels.length) {
			$("."+(scrollTo+1)).get(0).scrollIntoView();				
		}
		else {
			$("."+(scrollTo)).get(0).scrollIntoView();
		}

	}
});

$(document).on("click", ".backLevel2", function() {
	
	$(".points").hide();
	counter = 0;
	var levelScore = checkLocalStorageLevel();
	var levelValue = parseInt(level);
	$(".points").html(counter);
	$('.completeLevel').hide();
	$('.levelHolder').show();
	createLevelHolder();	
	if(currentLevel == 1) {
		$(".1").get(0).scrollIntoView();
	}
	else {
		var scrollTo = parseInt(currentLevel);
		if(currentLevel != levels.length) {
			$("."+(scrollTo+1)).get(0).scrollIntoView();				
		}
		else {
			$("."+(scrollTo)).get(0).scrollIntoView();
		}
	}

	counter = 0;
	$(".points").html(counter);
	$('.completeLevel').hide();
	$('.levelHolder').show();
});

$(document).on("click", ".backLevel3", function() {
	
	$(".container").css("overflow-y","hidden");
	$(".levels").empty();
	$('.levelHolder').hide();
	$('.info').show();
});

//........................................................................................play next level..........................................................................................

$(document).on("click", ".nxt", function() {
	currentLevel++;
	
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
		$(".birdsContainer").empty();
		$(".container").css("overflow","hidden");
		$('.completeLevel').hide();
		$('.spillHolder').show();
		spillLevelLevelGame(levels[(currentLevel-1)]);
	}
});

//.......................................................................................continue play..........................................................................................

$(document).on("click", "#continuePlay", function() {
	$(".container").css("overflow","hidden");
	$('#information3').hide();
	spillLevelLevelGame(levels[(noneKillNumber-1)]);
});


$(document).on("click", "#continuePlay2", function() {
	$(".container").css("overflow","hidden");
	$('#information4').hide();
	spillLevelLevelGame(levels[(doubleKillNumber-1)]);
});

$(document).on("click", "#continuePlay3", function() {
	$(".container").css("overflow","hidden");
	$('#information5').hide();
	spillLevelLevelGame(levels[(smallBirdNumber-1)]);
});

$(document).on("click", "#continuePlay6", function() {
	$("#information8").hide();
	timeLevelTimeGame = levels[startTimeGame-1][6];
	$(".numberOfBirdsToKill").html(timeLevelTimeGame[1]);
	$(".timeToKillTheBirds").html(timeLevelTimeGame[2]);
	$("#information9").show();
});

$(document).on("click", "#continuePlay7", function() {	
	$(".container").css("overflow","hidden");
	$('#information9').hide();
	spillLevelLevelGame(levels[(currentLevel-1)]);
});