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
var leftOrRight;
var	bird;
var kill;
var x2;
var timeouts = [];
var timeoutsCheckIfLost = [];
var speed;
var	checkIfLostSpeed;
var	removeBirdSpeed;
var fallSpeed;
var totalArray = [];
var smallBirdArray = [];
var smallBird;
var small;
var sideHoyde = $(window).height();
var birdSize = sideHoyde/9;
var checkIfLostTimeout;
var container = $(window).height();
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
	removeBirdSpeed  = speed;
	fallSpeed        = speed+501;
	birdfrequency    = birdfrequency2 - birdfrequency1;
	birdfrequency    = Math.floor((Math.random() * (birdfrequency2-birdfrequency1+1)) + birdfrequency1);

	$(".poeng").html("0/"+(totalBirds-noneKill)+"");
	$(".poeng").css("width",""+(sideBredde)+"px");
	$('.spillHolder').show();
	$('.poeng').show();

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

	if (killArray.indexOf(birdcount) > -1) {
		kill = false;
	} else {
		kill = true;
	}

	if (dobbelTapArray.indexOf(birdcount) > -1) {
		x2 = true;
	} else {
		x2 = false;
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

	var birdGif;
	var birdType;
    if(kill && !x2) {
    	birdGif = "gameBird"+birdLeftOrRightGif+"";
    	birdType = "";
    } else if(!kill && !x2) {
    	birdGif = "gameBirdSilver"+birdLeftOrRightGif+"";
    	birdType = "noKill"
    } else {
    	birdGif = "proBird"+birdLeftOrRightGif+"";
    	birdType = "killx2"
    }

	bird = "<div id="+birdnumber+"  class = '"+leftOrRight+" kule "+birdType+" levelBirdGame'></div>";	
	$(".kuleHolder").append(bird);	

    $("#"+birdnumber+"").html("<div class='birdImageHolder' style='width:"+kuleBirdWidth+"%; position:relative; left: "+marginLeft+"px; height:"+kuleBirdHeight+"%; margin-top:"+kuleBirdMarginTop+"%; float:right;'> <img style='height:100%; width:100%;' src='./pics/"+birdGif+".gif'> </div>");

    if (smallBirdArray.indexOf(birdcount) > -1) {
		$("#"+birdnumber+"").css("width",""+(birdSize*0.70)+"px");
	}
	else {
		$("#"+birdnumber+"").css("width",""+birdSize+"px");
	}

	var birdWidth = $("#"+birdnumber+"").width();
	$("#"+birdnumber+"").css("height",""+(birdWidth*0.65)+"px");


    var spillBredde = containerBredde;

    if(leftOrRight == 1) {
		$("#"+birdnumber+"").css({
			"left" : "-"+birdWidth+"px"
		});
    }
    else {
		$("#"+birdnumber+"").css({
			"left" : ""+spillBredde+"px"
		});
    }

	$("#"+birdnumber+"").css({
		"top" : ""+calHeight+"%",
		"z-index" : "1000"
	});

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

function checkIfLostLevelGame(nr){
	//Game Lost
	if(!killedWrongBird) {
		if(!$("#"+nr+"").hasClass("shot") && !$("#"+nr+"").hasClass("noKill")) {
			if(!lost) {
				lost = true;
				//Sound and vibration
				gameFlashLevelGame("Lost");
				checkIfSoundAndVibrationLevelGame("failed", 200);
				setTimeout(function() {
					clearTimeoutsLevelGame();
					removeBirdLevelGame(nr);
					timeouts = [];
					lostHtmlLevelGame();
				},850);	
			}
		}
	}
}

//........................................................................................Click bird..........................................................................................

$(document).on('touchstart', '.levelBirdGame', function(){
	if(!lost) {
		var id = $(this).attr("id");
		$(this).css("z-index","9");

		if ($("#"+id+"").hasClass('noKill')){
			if(!killedWrongBird) {
				if(!won) {

					var dir;
					if ($("#"+id+"").hasClass('1')) {
						dir = 1;
					}
					else {
						dir = 2;
					}

					$(this).attr('class', '2 kule levelBirdGame');
					fallLevelGame(id,dir, 2);
					checkIfLostLevelGame(id);
					window.setTimeout(function(){
						removeBirdLevelGame(id);
					}, 600);
					killedWrongBird = true;
				}
			}
		} else if ($(this).hasClass('killx2')) {
			if(!killedWrongBird) {
		        if ($(this).hasClass('1')){
		        	$(this).html("<div class='birdImageHolder' style='width:"+kuleBirdWidth+"%; position:relative; left:20px; height:"+kuleBirdHeight+"%; margin-top:"+kuleBirdMarginTop+"%; float:left;'> <img style='height:100%; width:100%;'  src='./pics/gameBird.gif'> </div> ");
			        $(this).attr('class', '1 kule levelBirdGame');
			    }
			    else {
				   $(this).html("<div class='birdImageHolder' style='width:"+kuleBirdWidth+"%; position:relative; left:-20px; height:"+kuleBirdHeight+"%; margin-top:"+kuleBirdMarginTop+"%; float:left;'> <img style='height:100%; width:100%;'  src='./pics/gameBird2.gif'> </div> ");
			       $(this).attr('class', '2 kule levelBirdGame');
			    }	
			}
		} else if($(this).hasClass('kule')){	
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
				$(".poeng").html(""+counter+"/"+(totalBirds-noneKill)+"");

				// LevelGame complete level
				if(counter == (totalBirds- noneKill)){
					won = true;
					level++;
					gameFlashLevelGame("Won");
					checkIfSoundAndVibrationLevelGame("complete", 200);
					setTimeout(function() {
						clearTimeoutsLevelGame();
						var checkIfRecord = amplifyStorageLevel(level);
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
    	if(bird == 1) {
    	    $("#"+id+"").html("<img style='height:100%; width:100%;' src='./pics/dead1.gif'>");
    	}
    	else {
    	    $("#"+id+"").html("<img style='height:100%; width:100%;' src='./pics/dead3.gif'>");
    	}
    	$("#"+id+"").css("-webkit-transform","translate3d(400px, 0px, 0px)");
	}
	else {
    	if(bird == 1) {
    	    $("#"+id+"").html("<img style='height:100%; width:100%;' src='./pics/dead2.gif'>");
    	}
    	else {
    	    $("#"+id+"").html("<img style='height:100%; width:100%;' src='./pics/dead4.gif'>");
    	}
    	$("#"+id+"").css("-webkit-transform","translate3d(-400px, 0px, 0px)");
	}

	if(bird == 1) {
	    removeBirdTimeout.push(window.setTimeout(function(){
			removeBirdLevelGame(id);
	    }, fallSpeed));

	}
}

//........................................................................................Remove Bird..............................................................................................

function removeBirdLevelGame(id){
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
		$(".levelFailedNumber").html((level-1));	
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

function lostHtmlLevelGame() {
	$(".kuleHolder").empty();
	$(".lostPoint").html(""+counter+"/" +(totalBirds-noneKill)+"");
	$(".levelFailedNumber").html(level);
	$(".lostPoint").css("width",""+(sideBredde)+"px");
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

function completeLevelHtml(){
	var sideHoyde = $(window).height();
	$(".levelNumber").html((level-1));
	$(".lostPoint").html(""+counter+"/" +(totalBirds-noneKill)+"");
	$(".lostPoint").css("width",""+(sideBredde)+"px");
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