
//........................................................................................Global variables............................................................................

var game;
var birdnumber;
var time;
var timeouts = [];
var speed;
var	checkIfLostSpeed;
var	removeBirdSpeed;
var fallSpeed;
var GameStop;
var checkIfLostTimeout;
var removeBirdTimeout = [];

//........................................................................................SpillTime............................................................................

var timer = 0;
var lastplayedTime;
var oneSec;

function spillTime(timeToPlay) {
	StopAndRemoveBirds = [];
	timer = timeToPlay;
	lastplayedTime	= timer;
	oneSec = 1;
	countdownOver = false;
	$(".points").html("0");
	game = 3;
	birdnumber = 0;
	killedWrongBird = false;


	counter = 0;
	setSpeedTimeGame();
	$(".exitTime, .retryTime").show();
	countDownTimeGame(timer);
	setSpeedTimeTimeGame();
	createBirdTimeGame();

	setTimeout(function() { 
		createBirdTimeGame();		
	},225);
	setTimeout(function() { 
		createBirdTimeGame();		
	},825);
}

//........................................................................................SpillTime2............................................................................

var numberOfBirdsToKill; 
var ms, min, sec, ms2;
function spillTime2(numbBirds) {
	numbBirds = numbBirds;
    StopAndRemoveBirds = [];
	birdnumber = 0;
	counter = 0;
	game = 4;
	oneSec = 1;
	numberOfBirdsToKill = numbBirds;
	killedWrongBird = false;
	countdownOver = false;
	GameStop = false;

	$('.points').show();
	$(".points").html("0/"+numberOfBirdsToKill);
	$(".exitTime, .retryTime").show();

	setSpeedTimeGame();
	setSpeedTimeTimeGame();
	startTimeTimeGame();
	createBirdTimeGame();

	setTimeout(function() { 
		createBirdTimeGame();		
	},225);
	setTimeout(function() { 
		createBirdTimeGame();		
	},825);
}

//........................................................................................Timer............................................................................


var countdownOver;
var countDownToEnd;
function countDownTimeGame(time) {
	$(".countDown").html(timer);
	if (timer !== 0) {
		countDownToEnd = setTimeout(function() {
			countDownTimeGame();
		}, 1000);

		timer--;
	}
	else {
		GameStop = true;
		countdownOver = true;
		$(".birdsContainer").empty();
		$('.spillHolder').hide();
		
		clearTimeoutsTimeGame();	
		checkIfSoundAndVibrationTimeGame("complete", 200);
		spillTimeDoneTimeGame();	
	}
}

//........................................................................................Countdown to start............................................................................

var gameOneOrTwo;
function countDownToStartTimeGame(numberOfBirdsOrTime, gameValg){

	$('.countDownToStart').show();
	$('.countDownToStart').html("3");
	var countdownToStart = new Timer();

	countdownToStart.start({countdown: true, precision: 'secondTenths', startValues: {secondTenths: 21}, callback: function (values) {
		if(values.seconds == 1 && values.secondTenths<=4) {
    		$('.countDownToStart').html("2");
		} else if(values.seconds == 0 && values.secondTenths<=7) {
			$('.countDownToStart').html("1");
		}
	}});

	countdownToStart.addEventListener('targetAchieved', function (e) {
		GameStop = false;
		$('.countDownToStart').hide();
		$('.spillHolder').show();
		$('.points').show();

		if(gameValg == 1) {
			spillTime(numberOfBirdsOrTime);
			startTimeTimeGame(numberOfBirdsOrTime);
			gameTimerTimeGame(numberOfBirdsOrTime, gameValg);
		}
		else if (gameValg == 2) {
			spillTime2(numberOfBirdsOrTime);
			startTimeTimeGame();
			gameTimerTimeGame();
		}	
	});
}
//........................................................................................gameTimer............................................................................

function gameTimerTimeGame(numberOfBirdsOrTime, gameValg) {
	$(".timer").show();

	var timer = new Timer();

	if(gameValg == 1) {
		
		timer.start({countdown: true, precision: 'secondTenths', startValues: {seconds: numberOfBirdsOrTime}, callback: function (values) {
			if(!GameStop) {
				$('.timer').html(values.toString(['seconds', 'secondTenths']));

			} else {
				timer.stop();
				$('.timer').empty();
				$('.timer').hide();
			}
			if(values.seconds<3){
				$('.timer').css("color","red");
			}
		}});

		timer.addEventListener('targetAchieved', function (e) {
			$('.timer').css("color","white");
		});

	} else {
		timer.start({precision: 'secondTenths', callback: function (values) {
			if(!GameStop) {
				if(values.minutes>=1) {
					$('.timer').html(values.toString(['minutes', 'seconds', 'secondTenths']));
				} else if(values.hours>=1) {
			    	$('.timer').html(values.toString(['hours','minutes', 'seconds', 'secondTenths']));
				} else {
					$('.timer').html(values.toString(['seconds', 'secondTenths']));
				}
			} else {
				timer.stop();
				$('.timer').empty();
				$('.timer').hide();
			}
		}});
	}
}

//........................................................................................Time............................................................................

function startTimeTimeGame(){
    var d = new Date();
    var n = d;
    time1 = n;
}

var time2;
var ScoreInMilliseconds;
function getTimeTimeGame(){
	var d = new Date();
    var n = d;
    time2 = n;
    ScoreInMilliseconds = time2 - time1;
}


//........................................................................................SetSpeed............................................................................

function setSpeedTimeGame(){
	speed = 1000;
	checkIfLostSpeed = speed + 1;
	fallSpeed = 1200;
	removeBirdSpeed = speed + fallSpeed;
}

function setSpeedTimeTimeGame(){
	speed = 1000;
	checkIfLostSpeed = speed + 1;
	fallSpeed = 1200;
	removeBirdSpeed = speed + fallSpeed;
}


//........................................................................................CreateBird............................................................................
var StopAndRemoveBirds = [];

function createBirdTimeGame() {
	var calHeight = Math.floor((Math.random() * 92) + 1);
	var dir = Math.floor((Math.random() * 600) + 1);
    var random = Math.random();
	var val;

	if(calHeight>=45) {
		dir = dir - (dir*2);
	}

	var leftOrRight;
	var leftRightString;
    if (random>=0.5){
		leftOrRight = 2;
		leftRightString = "right";

    } else {
		leftOrRight = 1;
		leftRightString = "left";
    }

	var bird =  "<div id="+birdnumber+" "+
			"class='"+leftOrRight+" bird timeGameBird normalBird'>"+
				"<div class='"+leftRightString+"Bird image'></div> "+
			"</div>";
	$(".birdsContainer").append(bird);	

	var birdWidth = $(".bird").width();

    if(leftOrRight == 1) {
		$("#"+birdnumber).css({
			"left" : "-"+birdWidth+"px",
			"top" : calHeight+"%"
		});
    }
    else {
		$("#"+birdnumber).css({
			"left": "" + $('.container').width()+"px",
			"top" : calHeight+"%"
		});
    }


	var temporaryBirdNumber = birdnumber;
	StopAndRemoveBirds.push(setTimeout(function(){
			checkIfLostTimeGame(temporaryBirdNumber);
		}, checkIfLostSpeed)
    );

	gameplayTimeGame(birdnumber, leftOrRight, dir);

	birdnumber++;
}

//........................................................................................gamePlay..............................................................................................

function gameplayTimeGame(nr, lr, dir){
	var transformWidth = $('.container').width() + $(".bird").width() + 20;

	if(lr == 1){
		document.getElementById(nr).style.transitionDuration = speed+"ms";
		document.getElementById(nr).style.transform = "translate(" + (transformWidth)+"px, "+dir+"%)";
	}
	else {
		document.getElementById(nr).style.transitionDuration = speed + "ms";
		document.getElementById(nr).style.transform = "translate(-" + (transformWidth)+"px, "+dir+"%)";
	}
}

//........................................................................................Check if Lost..........................................................................................

function checkIfLostTimeGame(nr){
	//Game Lost if nr dont have class shot
	if(!$("#"+nr).hasClass("shot")) {
		removeBirdTimeGame(nr);
		if(!GameStop) {
	        timeouts.push(window.setTimeout(function(){
				createBirdTimeGame();
	        }, 150));
		}
	}
}

//........................................................................................Click bird..........................................................................................

$(document).on('touchstart ', '.timeGameBird', function(){

	var id = $(this).attr("id");
	$(this).css("z-index","9");

	if(game == 3) {
		checkIfSoundAndVibrationTimeGame("success", 50);
		counter++;

		if(!GameStop) {
	        timeouts.push(window.setTimeout(function(){
				createBirdTimeGame();
	        }, 150));	

			$(".points").html(counter);
			if($(this).hasClass("1")) {
				val = 1;
				$(this).attr('class', '1 shot timeGameBird');
			}
			else if($(this).hasClass("2")) {
				val = 2;
				$(this).attr('class', '2 shot timeGameBird');
			}
		}

		fallTimeGame(id,val, 1);
	} 
	else if(game == 4) {
		checkIfSoundAndVibrationTimeGame("success", 50);
		counter++;
		$(".points").html(counter+"/"+numberOfBirdsToKill);

		if($(this).hasClass("1")) {
			val = 1;
			$(this).attr('class', '1 shot timeGameBird');
		}
		else if($(this).hasClass("2")) {
			val = 2;
			$(this).attr('class', '2 shot timeGameBird');
		}

		if(counter == numberOfBirdsToKill) {
			$(".spillHolder, .exitTime, .retryTime").hide();
			fallTimeGame(id,val, 1);
			getTimeTimeGame();
			gameFourDoneTimeGame();
			checkIfSoundAndVibrationTimeGame("complete", 200);
		}
		else {
			fallTimeGame(id,val, 1);
	        timeouts.push(window.setTimeout(function(){
				createBirdTimeGame();
	        }, 150));	
		}
	}
});

//........................................................................................Bird fall..........................................................................................

function fallTimeGame(id, leftright, bird){

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

	if(bird == 1) {
        removeBirdTimeout.push(window.setTimeout(function(){
			removeBirdLevelGame(id);
		}, fallSpeed));
	}
}

//........................................................................................Game done............................................................................

function spillTimeDoneTimeGame() {
	GameStop = true;
	clearTimeoutsTimeGame();
	var score = counter;
	$(".timer").hide();
	var killedBirds = timeModeLocalStorage(score, lastplayedTime);
	score = [counter, killedBirds];
	 gameFlashTimeGame("", score);
	$(".birdsContainer").hide();
	setTimeout(function(){
		gameDoneHtmlTimeGame("");
	},830);
}

function gameFourDoneTimeGame() {
	GameStop = true;
	clearTimeoutsTimeGame();
	var score = ScoreInMilliseconds;
	var doneTime = timeModeLocalStorage2(score, numberOfBirdsToKill);
 	gameFlashTimeGame("2", doneTime);
	$(".birdsContainer").hide();
	setTimeout(function(){
		gameDoneHtmlTimeGame("2");
	},830);	
}

//........................................................................................Remove Bird..............................................................................................

function removeBirdTimeGame(id){
	$("#"+id).remove();
}

//........................................................................................checkIfSoundAndVibrationTimeGame..............................................................................................

function checkIfSoundAndVibrationTimeGame(winLose, vib){
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

function clearTimeoutsTimeGame() {
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


function gameFlashTimeGame(data, score) {
	$('.TimeSelectorDone'+data+'Flash').show();
	$(".timer").hide();

	if(data != 2) {
		$('.timeScore').html(score[0]);
		$(".numbOfKilledBirds").html(score[1]);
	} else {
		$('.min').html(score[0][0]+".");
		$('.sec').html(score[0][1]+".");
		$('.msec').html(score[0][2]);	
		$('.minR').html(score[1][0]+".");
		$('.secR').html(score[1][1]+".");
		$('.msecR').html(score[1][2]);

		if(score[0][0] == 0) {
			$('.min').hide();
		} else {
			$('.min').show();
		}

		if(score[1][0] == 0) {
			$('.minR').hide();
		} else {
			$('.minR').show();
		}
	}
	setTimeout(function() {
		$(".TimesUp"+data+"Flash").css("top","25%");
		$(".playAgainTime"+data+"Flash").css("top","50%");
	}, 30);

	setTimeout(function() {
		$(".TimesUp"+data+"Flash").css("top","-25%");
		$(".playAgainTime"+data+"Flash").css("top","120%");		
		$('.TimeSelectorDone'+data+'Flash').hide();	
	}, 830);
	
}


//........................................................................................gameDoneHtmlTimeGame.............................................................................................

function gameDoneHtmlTimeGame(g) {
	$(".birdsContainer").show();
	$(".birdsContainer").empty();
	$('.spillHolder').hide();
	$(".Spillholder").hide();
	$(".countDown, .exitTime, .retryTime").hide();
	$(".TimeSelectorDone"+g).show();
}