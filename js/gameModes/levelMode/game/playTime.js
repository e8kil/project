//........................................................................................Global variables............................................................................
var birdnumber;
var time;
var timeouts = [];
var speed;
var	checkIfLostSpeed;
var	removeBirdSpeed;
var fallSpeed;
var GameStop;
var removeBirdTimeout = [];
var numberOfBirds;

//........................................................................................SpillTime............................................................................

var timer = 0;
var lastplayedTime;

function spillLevelTime(timeToPlayData) {
	$('.birdsContainer').show();
	GameStop = false;
	StopAndRemoveBirds = [];
	numberOfBirds = timeToPlayData[1]
	timer = timeToPlayData[2];
	lastplayedTime	= timer;
	countdownOver = false;
	counter = 0;
	$(".points").html(counter+"/"+numberOfBirds);
	birdnumber = 0;
	killedWrongBird = false;
	setSpeedLevelTimeGame();
	$(".exitTimeLevel, .retryTimeLevel").show();
	gameTimerLevelTimeGame(timer);
	createBirdLevelTimeGame();

	setTimeout(function() { 
		createBirdLevelTimeGame();		
	},225);
	setTimeout(function() { 
		createBirdLevelTimeGame();		
	},825);
}

//........................................................................................SpillTime2............................................................................

var numberOfBirdsToKill; 
var ms, min, sec, ms2;

//........................................................................................Countdown to start............................................................................

var numberOfBirdsOrTimeValue;

function countDownToStartLevelTimeGame(data){
	$('.points').hide();
	$('.countDownToStart').show();
	$('.countDownToStart').html("3");
	$('.timer').css("color","white");
	var countdownToStart = new Timer();

	countdownToStart.start({countdown: true, precision: 'secondTenths', startValues: {secondTenths: 21}, callback: function (values) {
		if(values.seconds == 1 && values.secondTenths<=4) {
    		$('.countDownToStart').html("2");
		} else if(values.seconds == 0 && values.secondTenths<=7) {
			$('.countDownToStart').html("1");
		}
	}});

	countdownToStart.addEventListener('targetAchieved', function (e) {
		$('.countDownToStart').hide();
		$('.spillHolder').show();
		$('.points').show();
		spillLevelTime(data);
	});
}

//........................................................................................gameTimer............................................................................
var gameTimer;
function gameTimerLevelTimeGame(numberOfBirdsOrTime) {
	$(".timer").show();

	gameTimer = new Timer();

	gameTimer.start({countdown: true, precision: 'secondTenths', startValues: {seconds: numberOfBirdsOrTime}, callback: function (values) {
		$('.timer').html(values.toString(['seconds', 'secondTenths']));

		if(values.seconds<3){
			$('.timer').css("color","red");
		}
	}});

	gameTimer.addEventListener('targetAchieved', function (e) {
		$('.timer').empty();
		$('.timer').hide();
		$('.timer').css("color","white");
		GameStop = true;
		gameFlashLevelTimeGame("Lost");
		checkIfSoundAndVibrationLevelTimeGame("failed", 200);
		$(".retryTimeLevel, .exitTimeLevel").hide();
		$(".spillHolder").css("background-color", "rgba(0,0,0,0.2");
		setTimeout(function() {
			clearTimeoutsLevelTimeGame();	
		    lostHtmlLevelTimeGame();
		},850);		

	});
}

//........................................................................................SetSpeed............................................................................

function setSpeedLevelTimeGame(){
	speed = 1200;
	checkIfLostSpeed = speed + 1;
	fallSpeed = 1200;
	removeBirdSpeed = speed + fallSpeed;
}

//........................................................................................CreateBird............................................................................
var StopAndRemoveBirds = [];

function createBirdLevelTimeGame() {
	var calHeight = Math.floor((Math.random() * 92) + 1);
	var dir = Math.floor((Math.random() * 600) + 1);
    var random = Math.random();
	var val;

	if(calHeight>=45) {
		dir = dir - (dir*2);
	}

	var leftOrRight;
	var leftRightString;
	if (random >= 0.5) {
		leftOrRight = 2;
		leftRightString = "right";

	} else {
		leftOrRight = 1;
		leftRightString = "left";
	}

	var bird = "<div id=" + birdnumber + " " +
		"class='" + leftOrRight + " bird levelTimeGameBird normalBird'>" +
		"<div class='" + leftRightString + "Bird image'></div> " +
		"</div>";
	$(".birdsContainer").append(bird);

	var birdWidth = $(".bird").width();

	if (leftOrRight == 1) {
		$("#" + birdnumber).css({
			"left": "-" + birdWidth + "px",
			"top": "" + calHeight + "%"
		});
	}
	else {
		$("#" + birdnumber).css({
			"left": "" + $('.container').width() + "px",
			"top": "" + calHeight + "%"
		});
	}

	var temporaryBirdNumber = birdnumber;
	StopAndRemoveBirds.push(setTimeout(function(){
			checkIfLostLevelTimeGame(temporaryBirdNumber);
		}, checkIfLostSpeed)
    );

	gameplayLevelTimeGame(birdnumber, leftOrRight, dir);

	birdnumber++;
}

//........................................................................................gamePlay..............................................................................................

function gameplayLevelTimeGame(nr, lr, dir){
	var birdWidth = $(".bird").width();
	var transformWidth = $('.container').width() + $(".bird").width() + 20;

	if (lr == 1) {
		document.getElementById(nr).style.transitionDuration = speed + "ms";
		document.getElementById(nr).style.transform = "translate(" + (transformWidth) + "px, " + dir + "%)";
	}
	else {
		document.getElementById(nr).style.transitionDuration = speed + "ms";
		document.getElementById(nr).style.transform = "translate(-" + (transformWidth) + "px, " + dir + "%)";
	}
}

//........................................................................................Check if Lost..........................................................................................

function checkIfLostLevelTimeGame(nr){
	//Game Lost if nr dont have class shot
	if(!$("#"+nr+"").hasClass("shot")) {
		removeBirdLevelTimeGame(nr);
		if(!GameStop) {
	        timeouts.push(window.setTimeout(function(){
				createBirdLevelTimeGame();
	        }, 150));
		}
	}
}

//........................................................................................Click bird..........................................................................................

$(document).on('touchstart ', '.levelTimeGameBird', function(){

	var id = $(this).attr("id");

	$(this).css("z-index","9");

	checkIfSoundAndVibrationLevelTimeGame("success", 50);
	counter++;

	if(!GameStop) {
        timeouts.push(window.setTimeout(function(){
			createBirdLevelTimeGame();
        }, 150));	

		$(".points").html(counter+"/"+numberOfBirds);
		if($(this).hasClass("1")) {
			val = 1;
			$(this).attr('class', '1 shot timeGameBird');
		}
		else if($(this).hasClass("2")) {
			val = 2;
			$(this).attr('class', '2 shot timeGameBird');
		}

		if(counter === numberOfBirds) {
			gameTimer.stop();
			GameStop = true;
			level++;
			gameFlashLevelTimeGame("Won");
			checkIfSoundAndVibrationLevelTimeGame("complete", 200);
			$(".retryTimeLevel, .exitTimeLevel").hide();
			$(".spillHolder").css("background-color", "rgba(0,0,0,0.2");
			setTimeout(function() {
				clearTimeoutsLevelTimeGame();
				var checkIfRecord = levelModeLocalStorage(level);
				completeLevelTimeHtml();
			}, 800);	
		}
	}

	fallLevelTimeGame(id,val, 1);
});

//........................................................................................Bird fall..........................................................................................

function fallLevelTimeGame(id, leftright, bird){

	var birdDistanceToTop = $("#" + id + "").offset().top;
	var birdFall = $(window).height() - birdDistanceToTop;
	var percentScreenFall = 1 - birdDistanceToTop / $(window).height();

	$("#" + id).css({
		"-webkit-transition": "all 0ms linear",
		"-webkit-transform": "translate3d(0px, 0px, 0px)",
		"-webkit-transition": "all " + fallSpeed * percentScreenFall + "ms linear",
		"height": $("#" + id).width() * 0.7 + "px",
		"width": $("#" + id).height() * 0.7 + "px",
		"top": "100%"
	});

	if (leftright === 1) {
		$("#" + id).html("<div class='spinLeft deadBirdLeft'></div>");
		$("#" + id).css("-webkit-transform", "translate3d(400px, 0px, 0px)");
	}
	else {
		$("#" + id).html("<div class='spinRight deadBirdRight'></div>");
		$("#" + id).css("-webkit-transform", "translate3d(-400px, 0px, 0px)");
	}

	if (bird == 1) {
		removeBirdTimeout.push(window.setTimeout(function () {
			removeBirdLevelGame(id);
		}, fallSpeed));
	}
}

//........................................................................................Remove Bird..............................................................................................

function removeBirdLevelTimeGame(id){
	$("#"+id+"").remove();
}

//........................................................................................checkIfSoundAndVibrationTimeGame..............................................................................................

function checkIfSoundAndVibrationLevelTimeGame(winLose, vib){
	if(sound == 1){
		if (winLose == "success") {
			lowLag.play("bird");
		} else {
			lowLag.play("gameOver");
		}
	}
	if(vibration == 1){
    	navigator.vibrate(vib);
	}
}

//........................................................................................Clear timeouts..............................................................................................

function clearTimeoutsLevelTimeGame() {
	for (var i=0; i<timeouts.length; i++) {
		var stopTimeout = timeouts[i];
		window.clearTimeout(stopTimeout);
	}

    for (var i=0; i<StopAndRemoveBirds.length; i++) {
		clearTimeout(StopAndRemoveBirds[i]);
	}

    for (var i=0; i<removeBirdTimeout.length; i++) {
		clearTimeout(removeBirdTimeout[i]);
	}

	clearTimeout(countDownToEnd);

}

function gameFlashLevelTimeGame(data) {
	$(".exitTimeLevel, .retryTimeLevel").hide();
	$('.timer').empty();
	$('.timer').hide();
	$(".birdsContainer").hide();
	if(data === "Won") {
		$(".levelNumber").html((level-1));
		var playWidth = $(".completeFlash").width();
		if(levels.length >= level) {		
			$(".nxt").html("Next Level");
		}
		else {
			$(".nxt").html("More to come!");
		}
		if(data === "Won") {
			$(".gameWonFlash").show();
			
			setTimeout(function() {
				
				$(".completeFlash").css({
					"top": "25%"
				});
				$(".nextLevelFlash").css({
					"top": "50%"
				});
			}, 0);

			setTimeout(function() {
				
				$(".completeFlash").css({
					"top": "-20%"
				});
				$(".nextLevelFlash").css({
					"top": "100%"
				});
			}, 800);

			setTimeout(function() {
				$(".gameWonFlash").hide();
			}, 800);	
		} 
	} else {
		$(".levelFailedNumber").html((level));	
		var playWidth = $(".taptFlash").width();
		$(".gameLostFlash").show();
		setTimeout(function() {
			$(".taptFlash").css({
				"top": "25%"
			});
			$(".playAgainFlash").css({
				"top": "50%"
			});
		}, 50);

		setTimeout(function() {
			
			$(".taptFlash").css({
				"top": "-20%"
			});
			$(".playAgainFlash").css({
				"top": "100%"
			});
		}, 850);

		setTimeout(function() {
			$(".gameLostFlash").hide();
		}, 850);		
	}
}

function lostHtmlLevelTimeGame() {
	$(".spillHolder").css("background-color", "rgba(0,0,0,0");
	$(".birdsContainer").show();
	$(".exitTimeLevel, .retryTimeLevel").hide();
	$(".birdsContainer").empty();
	$(".lostPoint").html(counter+"/" +numberOfBirds);
	$('.spillHolder').hide();
	$('.taptHolderLevel').show();
}

function completeLevelTimeHtml(){
	$(".spillHolder").css("background-color", "rgba(0,0,0,0");
	$(".exitTimeLevel, .retryTimeLevel").hide();
	$(".lostPoint").html(counter+"/"+numberOfBirds);
	if(levels.length >= level) {		
		$(".nxt").html("Next Level");
	}
	else {
		$(".nxt").html("More to come!");
	}
	$('.spillHolder').hide();
	$(".birdsContainer").empty();
	$(".birdsContainer").show();
	$('.completeLevel').show();	
}