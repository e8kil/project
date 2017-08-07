
//global variables
var birdnumber;
var leftOrRight;
var	bird;
var timeouts = [];
var	checkIfLostSpeed;
var	removeBirdSpeed;
var fallSpeed;
var sideHoyde = $(window).height();
var birdSize = sideHoyde/9;
var val;
var container = $(window).height();
var removeBirdTimeout = [];

//........................................................................................SpillFree............................................................................

var counter;
function spillFree() {
	$(".poeng").html(0);
	$(".poeng").css("width",""+(sideBredde)+"px");
	birdnumber = 0;
	counter = 0;
	setSpeedFreeGame();
	createBirdFreeGame();
}

//........................................................................................SetSpeed............................................................................

function setSpeedFreeGame(){
	speed = 850;
	checkIfLostSpeed = speed + 1;
	removeBirdSpeed = speed + 50;
	fallSpeed = speed+300;
}

//........................................................................................CreateBird............................................................................

function createBirdFreeGame() {
	var calHeight = Math.floor((Math.random() * 92) + 1);
	var dir = Math.floor((Math.random() * 600) + 1);
    var random = Math.random();

	if(calHeight>=45) {
		dir = dir - (dir*2);
	}

    if (random>=0.5){
		leftOrRight = 2;
    } else {
		leftOrRight = 1;
    }

	bird = "<div id="+birdnumber+"  class = '"+leftOrRight+" kule freeGameBird'></div>";
	$(".kuleHolder").append(bird);	

	$("#"+birdnumber+"").css("width",""+birdSize+"px");
	$("#"+birdnumber+"").css("height",""+(birdSize*0.65)+"px");

    if (random>=0.5){
        $("#"+birdnumber+"").html("<div class='birdImageHolder' style='width:"+kuleBirdWidth+"%; position:relative; left:-20px; height:"+kuleBirdHeight+"%; margin-top:"+kuleBirdMarginTop+"%; float:left;'> <img style='height:100%; width:100%;' src='./pics/gameBird2.gif'> </div>");
    } else {
	    $("#"+birdnumber+"").html("<div class='birdImageHolder' style='width:"+kuleBirdWidth+"%; position:relative; left: 20px; height:"+kuleBirdHeight+"%; margin-top:"+kuleBirdMarginTop+"%; float:right;'> <img style='height:100%; width:100%;' src='./pics/gameBird.gif'> </div>");
    }	

    var birdWidth = $(".kule").width();
    var gameWidth = containerBredde;

    if(leftOrRight == 1) {
		$("#"+birdnumber+"").css({
			"left" : "-"+birdWidth+"px",
			"top" : ""+calHeight+"%",
			"z-index" : "1000",
		});
    } else {
		$("#"+birdnumber+"").css({
			"left" : ""+gameWidth+"px",
			"top" : ""+calHeight+"%",
			"z-index" : "1000",
		});
    }

	gameplayFreeGame(birdnumber, leftOrRight, dir);
	timeouts.push(window.setTimeout("checkIfLostFreeGame("+birdnumber+")", checkIfLostSpeed));	

	birdnumber++;
}

//........................................................................................gamePlay..............................................................................................

function gameplayFreeGame(nr, lr, dir){
	var birdWidth = $(".kule").width();
	var gameWidth = sideBredde + birdWidth;
	$(".birdImageHolder").css("z-index","-1");

	if(lr == 1){
		$("#"+nr+"").css("left","0%");
		$("#"+nr+"").css("-webkit-transition","all "+speed+"ms linear");
		$("#"+nr+"").css("-webkit-transform","translate("+((gameWidth-birdWidth)+20)+"px, "+dir+"%)");
	}
	else {
		$("#"+nr+"").css("-webkit-transition","all "+speed+"ms linear");
		$("#"+nr+"").css("-webkit-transform","translate(-"+(gameWidth+20)+"px, "+dir+"%)");
	}
}

//........................................................................................Check if Lost..........................................................................................

function checkIfLostFreeGame(nr){
	//Game Lost
	if(!$("#"+nr+"").hasClass("shot")) {
		//Sound and vibration
		checkIfSoundAndVibrationFreeGame("failed", 200);
		clearTimeoutsFreeGame();
		removeBirdFreeGame(nr);
		var score = counter;
		var highScore = amplifyStorage(score);
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

	$(".poeng").html(counter);
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

    removeBirdTimeout.push(window.setTimeout(function(){
		removeBirdFreeGame(id);
    }, fallSpeed));
}

//........................................................................................Remove Bird..............................................................................................

function removeBirdFreeGame(id){
	$("#"+id+"").remove();
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
		var audio = document.getElementById(wonLost);
		audio.play();
	}
	if(vibration == 1){
    	navigator.vibrate(vib);
	}
}

//................................................................................Game over animation..............................................................................................

function gameFlashFreeGame(highscore) {
	$('.freeGameTapt').html(counter);
	console.log(highscore);
	$('.hscore').html(highscore);
	$('.taptHolderFlash').show();
	$(".holder, #playAgain").css("font-size",""+(sideHoyde/24)+"px");

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
	var sideHoyde = $(window).height();
	var playWidth = $(".tapt").width();

	// $(".tapt, .playAgain").css({
	// 	"width":""+((sideHoyde/3.9)*2)+"px",
	// 	"left": ""+((sideBredde-playWidth)/2)+"px"
	// });

	$('.spillHolder').hide();
	$('.taptHolder').show();
	$(".kuleHolder").empty();
	$('.poeng').hide();
}

