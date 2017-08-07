
//........................................................................................Global variables............................................................................

var birdnumber;
var leftOrRight;
var	bird;
var time;
var timeouts = [];
var speed;
var	checkIfLostSpeed;
var	removeBirdSpeed;
var fallSpeed;
var GameStop;
var sideHoyde = $(window).height();
var birdSize = sideHoyde/9;
var checkIfLostTimeout;
var container = $(window).height();
var removeBirdTimeout = [];
var numberOfBirds;

//........................................................................................SpillTime............................................................................

var timer = 0;
var lastplayedTime;

function spillLevelTime(timeToPlayData) {
		console.log(timeToPlayData);
	$('.kuleHolder').show();
	GameStop = false;
	StopAndRemoveBirds = [];
	numberOfBirds = timeToPlayData[1]
	timer = timeToPlayData[2];
	lastplayedTime	= timer;
	countdownOver = false;
	counter = 0;
	$(".poeng").html(counter+"/"+numberOfBirds);
	$(".poeng").css("width",""+(sideBredde)+"px");
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
		$('.poeng').show();
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
		setTimeout(function() {
			clearTimeoutsLevelTimeGame();	
		    lostHtmlLevelTimeGame();
		},850);		

	});

}


//........................................................................................SetSpeed............................................................................

function setSpeedLevelTimeGame(){
	speed = 850;
	checkIfLostSpeed = speed + 1;
	removeBirdSpeed = speed + 50;
	fallSpeed = speed+300;
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

	var birdLeftOrRightGif;
	var marginLeft;
    if (random>=0.5){
    	leftOrRight = 2;
    	birdLeftOrRightGif = "2";
    	marginLeft = -20;
	} else {
		leftOrRight = 1;
    	birdLeftOrRightGif = "";
    	marginLeft = 20;
	}


	bird = "<div id="+birdnumber+"  class = '"+leftOrRight+" kule levelTimeGameBird'></div>";
	$(".kuleHolder").append(bird);	

	$("#"+birdnumber+"").css("width",""+birdSize+"px");
	$("#"+birdnumber+"").css("height",""+(birdSize*0.65)+"px");
    $("#"+birdnumber+"").html("<div class='birdImageHolder' style='width:"+kuleBirdWidth+"%; position:relative; left: "+marginLeft+"px; height:"+kuleBirdHeight+"%; margin-top:"+kuleBirdMarginTop+"%; float:right;'> <img style='height:100%; width:100%;' src='./pics/gameBird"+birdLeftOrRightGif+".gif'> </div>");

    var kuleB = $(".kule").width();
    var spillBredde = containerBredde;

    if(leftOrRight == 1) {
		$("#"+birdnumber+"").css({
			"left" : "-"+kuleB+"px",
			"top" : ""+calHeight+"%",
			"z-index" : "1000",
		});
    }
    else {
		$("#"+birdnumber+"").css({
			"left" : ""+spillBredde+"px",
			"top" : ""+calHeight+"%",
			"z-index" : "1000",
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
	var birdWidth = $(".kule").width();
	var spillBredde = sideBredde + birdWidth;
	$(".birdImageHolder").css("z-index","-1");

	if(lr == 1){
		$("#"+nr+"").css("left","0%");
		$("#"+nr+"").css("-webkit-transition","all "+speed+"ms linear");
		$("#"+nr+"").css("-webkit-transform","translate("+((spillBredde-birdWidth)+20)+"px, "+dir+"%)");
	}
	else {
		$("#"+nr+"").css("-webkit-transition","all "+speed+"ms linear");
		$("#"+nr+"").css("-webkit-transform","translate(-"+(spillBredde+20)+"px, "+dir+"%)");
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

		$(".poeng").html(counter+"/"+numberOfBirds);
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
			setTimeout(function() {
				clearTimeoutsLevelTimeGame();
				var checkIfRecord = amplifyStorageLevel(level);
				completeLevelTimeHtml();
			}, 800);	
		}
	}

	fallLevelTimeGame(id,val, 1);
});

//........................................................................................Bird fall..........................................................................................

function fallLevelTimeGame(id, leftright, bird){
	$("#"+id+"").className = "dead";
	var birdDistanceToTop = $("#"+id+"").offset().top;
	var birdFall = container - birdDistanceToTop;
	var lengthin = $("#"+id+"").position();

	$("#"+id+"").css({
		"-webkit-transition": "all 0ms linear",
		"-webkit-transform": "translate3d(0px, 0px, 0px)",
		"-webkit-transition": "all "+(removeBirdSpeed*0.8)+"ms linear",
		"height": "0%",
		"width": "0%",
		"top":""+container+"px"
	});

	if(leftright === 1){
    	$("#"+id+"").html("<img style='height:100%; width:100%;' src='./pics/dead1.gif'>");
    	$("#"+id+"").css("-webkit-transform","translate3d(400px, 0px, 0px)");
	}
	else {
    	$("#"+id+"").html("<img style='height:100%; width:100%;' src='./pics/dead2.gif'>");
    	$("#"+id+"").css("-webkit-transform","translate3d(-400px, 0px, 0px)");
	}

	if(bird == 1) {
        removeBirdTimeout.push(window.setTimeout(function(){
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
		var audio = document.getElementById(winLose);
    	audio.play();
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
	if(data === "Won") {
		$(".levelCompleteFlash").css("font-size",""+(sideHoyde/24)+"px");
		$(".levelNumber").html((level-1));
		$(".completeFlash, .nextLevelFlash").css("width",""+((sideHoyde/3.9)*2)+"px");
		var playWidth = $(".completeFlash").width();
		$(".levelCompleteFlash").css("font-size",""+(sideHoyde/24)+"px");
		$(".completeFlash, .nextLevelFlash").css("left",""+((sideBredde-playWidth)/2)+"px");

		if(levels.length >= level) {		
			$(".nxt").html("Next Level");
			$(".nxt").css("font-size",""+(sideHoyde/19)+"px");
		}
		else {
			$(".nxt").html("More to come!");
			$(".nxt").css("font-size",""+(sideHoyde/22)+"px");
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
		$(".levelFailedHolder").css("font-size",""+(sideHoyde/24)+"px");
		$(".levelFailedNumber").html((level));	
		$(".taptFlash, .playAgainFlash").css("width",""+((sideHoyde/3.9)*2)+"px");
		var playWidth = $(".taptFlash").width();
		$(".levelFailedHolder").css("font-size",""+(sideHoyde/24)+"px");
		$(".retry").css("font-size",""+(sideHoyde/19)+"px");
		$(".taptFlash, .playAgainFlash").css("left",""+((sideBredde-playWidth)/2)+"px");

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
	$(".exitTimeLevel, .retryTimeLevel").hide();
	$(".kuleHolder").empty();
	$(".lostPoint").html(counter+"/" +numberOfBirds);
	$(".taptLevel").html("<img style='width:96%; position:absolute; left:2%;' src='./pics/banner.gif'>"+
							"<div class='levelFailedHolder'> Level "+level+"<br> Failed! </div>");
	$(".taptLevel, .playAgainLevel, .lostPoint").css("width",""+(sideBredde)+"px");
	$(".levelFailedHolder").css("font-size",""+playFont+"px");
	$(".tapt, .playAgain").css("width",""+(sideBredde)+"px");
	var sideHoyde = $(window).height();
	$(".taptLevel, .playAgainLevel").css("width",""+((sideHoyde/3.9)*2)+"px");
	var playWidth = $(".taptLevel").width();
	$(".levelFailedHolder").css("font-size",""+(sideHoyde/24)+"px");
	$(".retry").css("font-size",""+(sideHoyde/19)+"px");
	$(".taptLevel, .playAgainLevel").css("left",""+((sideBredde-playWidth)/2)+"px");
	$('.spillHolder').hide();
	$('.taptHolderLevel').show();
}

function completeLevelTimeHtml(){
	$(".exitTimeLevel, .retryTimeLevel").hide();
	$(".lostPoint").html(counter+"/"+numberOfBirds);
	$(".lostPoint").css("width",""+(sideBredde)+"px");
	var sideHoyde = $(window).height();
	$(".complete").html("<img style='width:96%; margin-left:2%; margin-right:2%; position:absolute; top:0%; left:0%;' src='./pics/banner.gif'>"+
	"<div class='levelCompleteHolder'> Level "+(level-1)+"<br> complete! </div>");	
	$(".complete, .nextLevel").css("width",""+((sideHoyde/3.9)*2)+"px");
	var playWidth = $(".complete").width();
	$(".levelCompleteHolder").css("font-size",""+(sideHoyde/24)+"px");
	if(levels.length >= level) {		
		$(".nxt").html("Next Level");
		$(".nxt").css("font-size",""+(sideHoyde/19)+"px");
	}
	else {
		$(".nxt").html("More to come!");
		$(".nxt").css("font-size",""+(sideHoyde/22)+"px");
	}
	$(".complete, .nextLevel").css("left",""+((sideBredde-playWidth)/2)+"px");
	$('.spillHolder').hide();
	$(".kuleHolder").empty();
	$('.completeLevel').show();	
}