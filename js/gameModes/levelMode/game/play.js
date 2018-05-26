// global variables
var totalBirds;
var level;
var lost;
var birdfrequency;	
var birdfrequency1;
var birdfrequency2;
var noneKill;
var doubleKill;
var killArray = [];
var dobbelTapArray = [];
var birdcount;
var won;
var killedWrongBird;
var birdnumber;
var timeouts = [];
var timeoutsCheckIfLost = [];
var speed;
var	checkIfLostSpeed;
var	removeBirdSpeed;
var fallSpeed;
var totalArray = [];
var smallBirdArray = [];
var smallBird;
var removeBirdTimeout = []

//.......................................................................................SpillLevelLevelGame............................................................................

function spillLevelLevelGame(data){

	levelTimeMode = data[6];
	level = currentLevel;

	if(!levelTimeMode[0]) {
		levelMode(data);
	}
	else {
		countDownToStartLevelTimeGame(levelTimeMode);
	}
}

function levelMode(data){
	
	totalBirds = parseInt(data[0][0]);
	speed = parseInt(data[1][0]);
	birdfrequency1 = parseInt(data[2][0]);
	birdfrequency2 = parseInt(data[2][1]);
	noneKill = parseInt(data[3][0]);
	doubleKill = parseInt(data[4][0]);
	smallBird = parseInt(data[5][0]);

	killArray        = [];
	dobbelTapArray   = [];
	smallBirdArray   = [];
	totalArray       = [];
	counter          = 0;
	birdnumber       = 0;
	speed            = speed-1;
	lost             = false;
	killedWrongBird  = false;
	won              = false;
	birdcount        = 0;
	totalBirds       = totalBirds + noneKill;
	checkIfLostSpeed = speed+10;
	fallSpeed        = 1200;
	removeBirdSpeed = speed + fallSpeed;
	birdfrequency    = birdfrequency2 - birdfrequency1;
	birdfrequency    = Math.floor((Math.random() * (birdfrequency2-birdfrequency1+1)) + birdfrequency1);

	$(".points").html("0/"+(totalBirds-noneKill)+"");
	$('.spillHolder').show();
	$('.points').show();

	for (var i = 0; i<noneKill; i++) {
		noKillLevelGame(i);
		totalArray.push(killArray[i]);
	}	

	for (var i = 0; i<doubleKill; i++) {
		doubleTapLevelGame(i);
		totalArray.push(dobbelTapArray[i]);
	}

	for (var i = 0; i<smallBird; i++) {
		smallBirdFunctionLevelGame(i);
		totalArray.push(smallBirdArray[i]);
	}

    timeouts.push(window.setTimeout(function(){
		createBirdLevelGame();
    }, 500));

}

//........................................................................................noKillLevelGame............................................................................

function noKillLevelGame(i){
	var randomKill = Math.floor((Math.random() * (totalBirds-1)) + 1);
	if (killArray.indexOf(randomKill) > -1) {
		noKillLevelGame(i);	
	}
	else {
		killArray[i] = randomKill;
	}
}

//........................................................................................smallBird............................................................................

function smallBirdFunctionLevelGame(i){
	var random3 = Math.floor((Math.random() * (totalBirds-1)) + 1);

	if (totalArray.indexOf(random3) > -1) {
		smallBirdFunctionLevelGame(i);	
	}
	else {
		if (smallBirdArray.indexOf(random3) > -1) {
			smallBirdFunctionLevelGame(i);	
		}
		else {
			if (smallBirdArray.indexOf(random3) > -1) {
				smallBirdFunctionLevelGame(i);	
			}
			else {
				smallBirdArray[i] = random3;	
			}
		}
	}	
}

//........................................................................................doubleKill............................................................................

function doubleTapLevelGame(i){
	var random2 = Math.floor((Math.random() * (totalBirds-1)) + 1);
	if (dobbelTapArray.indexOf(random2) > -1) {
		doubleTapLevelGame(i);	
	}
	else {
		if (killArray.indexOf(random2) > -1) {
			doubleTapLevelGame(i);	
		}
		else {
			if (dobbelTapArray.indexOf(random2) > -1) {
				doubleTapLevelGame(i);	
			}
			else {
				dobbelTapArray[i] = random2;	
			}
		}
	}
}

//........................................................................................CreateBirdLevelGame............................................................................

function createBirdLevelGame() {
	var calHeight = Math.floor((Math.random() * 92) + 1);
	var dir = Math.floor((Math.random() * 600) + 1);
    var random = Math.random();
	var val;

	if(calHeight>=45) {
		dir = dir - (dir*2);
	}

	birdcount++;
    birdfrequency = Math.floor((Math.random() * (birdfrequency2-birdfrequency1+1)) + birdfrequency1);

	var kill;
	if (killArray.indexOf(birdcount) > -1) {
		kill = false;
	} else {
		kill = true;
	}

	var x2;
	if (dobbelTapArray.indexOf(birdcount) > -1) {
		x2 = true;
	} else {
		x2 = false;
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

	var birdType;
    if(kill && !x2) {
		birdType = "normalBird";
    } else if(!kill && !x2) {
    	birdType = "noKillBird"
    } else {
    	birdType = "killx2Bird"
    }

	var bird = "<div id=" + birdnumber + " " +
		"class='"+leftOrRight+" bird levelBirdGame "+birdType+"'>" +
		"<div class='"+leftRightString+"Bird image'></div> " +
		"</div>";
	$(".birdsContainer").append(bird);


	if (smallBirdArray.indexOf(birdcount) > -1) {
		$("#" + birdnumber + "").css("width", "" + ($(window).height()/9 * 0.70) + "px");
		$("#" + birdnumber + "").addClass("smallBird");
	}

	var birdWidth = $(".bird").width();

	if (leftOrRight == 1) {
		$("#"+birdnumber).css({
			"left": "-"+birdWidth+"px",
			"top": calHeight+"%"
		});
	}
	else {
		$("#"+birdnumber).css({
			"left": $('.container').width() + "px",
			"top": calHeight + "%"
		});
	}

    var temporaryBirdNumber = birdnumber;

	if((birdnumber+1) != (totalBirds)){
        timeouts.push(window.setTimeout(function(){
			createBirdLevelGame();
        }, birdfrequency));
	}

	timeoutsCheckIfLost.push(window.setTimeout(function(){
		checkIfLostLevelGame(temporaryBirdNumber);
	}, checkIfLostSpeed)); 

	gameplayLevelGame(birdnumber, leftOrRight, dir);

	birdnumber++;
}

//........................................................................................Move bird..........................................................................................

function gameplayLevelGame(nr, lr, dir){
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

function checkIfLostLevelGame(nr){
	//Game Lost
	if(!killedWrongBird) {
		if(!$("#"+nr+"").hasClass("shot") && !$("#"+nr+"").hasClass("noKillBird")) {
			if(!lost) {
				lost = true;
				//Sound and vibration
				gameFlashLevelGame("Lost");
				checkIfSoundAndVibrationLevelGame("failed", 200);
				$(".spillHolder").css("background-color","rgba(0,0,0,0.2");
				$(".birdsContainer").hide();
				setTimeout(function() {
					clearTimeoutsLevelGame();
					removeBirdLevelGame(nr);
					timeouts = [];
					lostHtmlLevelGame();

				},850);	
			}
		} else {
			setTimeout(function () {
				removeBirdLevelGame(nr);
			}, fallSpeed);			
			
		}
	}
}

//........................................................................................Click bird..........................................................................................

$(document).on('touchstart', '.levelBirdGame', function(){
	if(!lost) {
		var id = $(this).attr("id");
		$(this).css("z-index","9");
		if ($("#"+id+"").hasClass('noKillBird')){
			if(!killedWrongBird) {
				if(!won) {

					var dir;
					if ($("#"+id+"").hasClass('1')) {
						dir = 1;
					}
					else {
						dir = 2;
					}

					$(this).attr('class', '2 bird levelBirdGame');
					fallLevelGame(id,dir, 2);
					checkIfLostLevelGame(id);
					window.setTimeout(function(){
						removeBirdLevelGame(id);
					}, 600);
					killedWrongBird = true;
				}
			}
		} else if ($(this).hasClass('killx2Bird')) {
			if(!killedWrongBird) {
				$(this).removeClass("killx2Bird");
				$(this).addClass("normalBird");	
			}
		} else if($(this).hasClass('bird')){	
			if(!killedWrongBird) {

				if($(this).hasClass('1')){
					val = 1;
					$(this).attr('class', 'shot');
				}
				else if ($(this).hasClass('2')){
					val = 2;
					$(this).attr('class', 'shot');
				}

				checkIfSoundAndVibrationLevelGame("success", 50);
				counter++;
				$(".points").html(counter+"/"+(totalBirds-noneKill)+"");

				// LevelGame complete level
				if(counter == (totalBirds- noneKill)){
					won = true;
					level++;
					gameFlashLevelGame("Won");
					checkIfSoundAndVibrationLevelGame("complete", 200);
					$(".spillHolder").css("background-color", "rgba(0,0,0,0.2");
					setTimeout(function() {
						clearTimeoutsLevelGame();
						var checkIfRecord = levelModeLocalStorage(level);
						completeLevelHtml();
					}, 800);	
				}
				fallLevelGame(id,val, 1); 	
			}
		}
	}		
});

//........................................................................................Bird fall..........................................................................................

function fallLevelGame(id, leftright, bird){

	var birdDistanceToTop = $("#"+id+"").offset().top;
	var birdFall = $(window).height() - birdDistanceToTop;
	var percentScreenFall = 1 - birdDistanceToTop / $(window).height();

	$("#"+id).css({
		"-webkit-transition": "all 0ms linear",
		"-webkit-transform": "translate3d(0px, 0px, 0px)",
		"-webkit-transition": "all " + fallSpeed*percentScreenFall +"ms linear",
		"height": $("#"+id).width()*0.7 + "px",
		"width": $("#"+id).height()*0.7 + "px",
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

}

//........................................................................................Remove Bird..............................................................................................

function removeBirdLevelGame(id){
	console.log("remove");
	$("#"+id+"").remove();
}

//........................................................................................Clear timeouts..............................................................................................

function clearTimeoutsLevelGame() {
	for (var i=0; i<timeouts.length; i++) {
		var stopTimeout = timeouts[i];
		window.clearTimeout(stopTimeout);
	}

	for (var i=0; i<timeoutsCheckIfLost.length; i++) {
		var stopTimeout = timeoutsCheckIfLost[i];
		window.clearTimeout(stopTimeout);
	}	

	for (var i=0; i<removeBirdTimeout.length; i++) {
		var stopTimeout = removeBirdTimeout[i];
		window.clearTimeout(stopTimeout);
	}
}

//................................................................................check If Sound And Vibration..............................................................................................

function checkIfSoundAndVibrationLevelGame(wonLost, vib){
	if(sound == 1){
		var audio = document.getElementById(wonLost);
		audio.play();
	}
	if(vibration == 1){
    	navigator.vibrate(vib);
	}
}

//........................................................................................Lost html..............................................................................................


function gameFlashLevelGame(data) {
	if(data === "Won") {

		$(".levelNumber").html((level-1));
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

function lostHtmlLevelGame() {
	$(".spillHolder").css("background-color", "rgba(0,0,0,0");	
	$(".birdsContainer").show();
	$(".lostPoint").html(counter+"/" +(totalBirds-noneKill)+"");
	$(".levelFailedNumber").html(level);
	$('.spillHolder').hide();
	$(".birdsContainer").empty();
	$('.taptHolderLevel').show();
}

function completeLevelHtml(){
	$(".spillHolder").css("background-color", "rgba(0,0,0,0");	
	$(".levelNumber").html((level-1));
	$(".lostPoint").html(counter+"/" +(totalBirds-noneKill)+"");
	if(levels.length >= level) {		
		$(".nxt").html("Next Level");
	}
	else {
		$(".nxt").html("More to come!");
	}

	$('.spillHolder').hide();
	$(".birdsContainer").empty();
	$('.completeLevel').show();	
}