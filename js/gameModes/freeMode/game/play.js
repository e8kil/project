//global variables
var birdnumber;
var timeouts = [];
var removeBirdTimeout = [];
var	checkIfLostSpeed;
var	removeBirdSpeed;
var fallSpeed;

//........................................................................................SpillFree............................................................................

var counter;
function spillFree() {
	$(".points").html(0);
	birdnumber = 0;
	counter = 0;
	setSpeedFreeGame();
	createBirdFreeGame();
}

//........................................................................................SetSpeed............................................................................

function setSpeedFreeGame(){
	speed = 850;
	checkIfLostSpeed = speed + 1;
	fallSpeed = 1200;
	removeBirdSpeed = speed + fallSpeed;
}

//........................................................................................CreateBird............................................................................

function createBirdFreeGame() {
	var calHeight = Math.floor((Math.random() * 92) + 1);
	var dir = Math.floor((Math.random() * 600) + 1);
    var random = Math.random();

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
			"class='"+leftOrRight+" bird freeGameBird normalBird'>"+
				"<div class='"+leftRightString+"Bird image'></div> "+
			"</div>";


	$(".birdsContainer").append(bird);	

	var birdWidth = $(".bird").width();

    if(leftOrRight == 1) {
		$("#"+birdnumber).css({
			"left" : "-"+birdWidth+"px",
			"top" : calHeight+"%",
			"z-index" : "1000",
		});
    } else {
		$("#"+birdnumber).css({
			"left": "" +$('.container').width()+"px",
			"top" : calHeight+"%",
			"z-index" : "1000",
		});
    }

	gameplayFreeGame(birdnumber, leftOrRight, dir);
	timeouts.push(window.setTimeout("checkIfLostFreeGame("+birdnumber+")", checkIfLostSpeed));	

	birdnumber++;
}

//........................................................................................gamePlay..............................................................................................

function gameplayFreeGame(nr, lr, dir){
	var birdWidth = $(".bird").width();
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

function checkIfLostFreeGame(nr){
	//Game Lost
	if(!$("#"+nr).hasClass("shot")) {
		//Sound and vibration
		checkIfSoundAndVibrationFreeGame("failed", 200);
		clearTimeoutsFreeGame();
		removeBirdFreeGame(nr);
		var score = counter;
		var highScore = freeModeLocalStorage(score);
		$('.points').hide();
		gameFlashFreeGame(highScore);
		//timeout before showing lost html
		setTimeout(function() {
			lostHtml();
		},830);	
	}
	// Game not lost
	else {
		createBirdFreeGame();
	}
}

//........................................................................................Click bird..........................................................................................

//using mousedown on pc to test. On mobile it should use touchstart
$(document).on('touchstart', '.freeGameBird', function(){
	checkIfSoundAndVibrationFreeGame("success", 50);
	counter++;
	var id = $(this).attr("id");

	$(this).css("z-index","9");
	// Freeplay Points
	$(".points").html(counter);
	if($(this).hasClass("1")){
		leftright = 1;
		$(this).attr('class', 'shot');
	}
	else if ($(this).hasClass("2")){
		leftright = 2;
		$(this).attr('class', 'shot');
	}
	fallFreeGame(id,leftright);

});

//........................................................................................Bird fall..........................................................................................

function fallFreeGame(id, leftright){

	var birdDistanceToTop = $("#" + id + "").offset().top;
	var birdFall = $(window).height() - birdDistanceToTop;
	var percentScreenFall = 1 - birdDistanceToTop / $(window).height();
	var birdDistanceFromLeft = $("#" + id + "").offset().left + 20;
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
		$("#" + id).css("-webkit-transform", "translate3d(" + birdDistanceFromLeft + 100 +"px, 0px, 0px)");
	}
	else {
		$("#" + id).html("<div class='spinRight deadBirdRight'></div>");
		$("#" + id).css("-webkit-transform", "translate3d(-400px, 0px, 0px)");
	}

    removeBirdTimeout.push(window.setTimeout(function(){
		removeBirdFreeGame(id);
	}, fallSpeed));
}

//........................................................................................Remove Bird..............................................................................................

function removeBirdFreeGame(id){
	$("#"+id).remove();
}

function clearTimeoutsFreeGame() {
	for (var i=0; i<timeouts.length; i++) {
		var stopTimeout = timeouts[i];
		window.clearTimeout(stopTimeout);
	}

	for (var i=0; i<removeBirdTimeout.length; i++) {
		var stopTimeout = removeBirdTimeout[i];
		window.clearTimeout(stopTimeout);
	}	

}

//................................................................................check If Sound And Vibration..............................................................................................

function checkIfSoundAndVibrationFreeGame(wonLost, vib){
	if(sound == 1){
		if(wonLost == "success") {
			lowLag.play("bird");
		} else {
			lowLag.play("gameOver");
		}
	}
	if(vibration == 1){
    	navigator.vibrate(vib);
	}
}

//................................................................................Game over animation..............................................................................................

function gameFlashFreeGame(highscore) {
	$('.freeGamelost').html(counter);
	$('.hscore').html(highscore);
	$('.taptHolderFlash').show();
	setTimeout(function() {
		$(".taptFlash").css("top","25%");
		$(".playAgainFlash").css("top","50%");
	}, 30);

	setTimeout(function() {
		$(".taptFlash").css("top","-25%");
		$(".playAgainFlash").css("top","120%");	
		$('.taptHolderFlash').hide();	
		lostHtml();
	}, 830);
}

//........................................................................................lost html.............................................................................................

function lostHtml() {
	var playWidth = $(".tapt").width();
	$('.spillHolder').hide();
	$('.taptHolder').show();
	$(".birdsContainer").empty();
	$('.points').hide();
}

