var levels = [];

// these numbers are required to get the info about the birds in the game. And they need to match when the special birds and timemode are used in the levels object. 
var noneKillNumber = 29;
var smallBirdNumber = 39;
var doubleKillNumber = 49;
var startTimeGame = 10;

// remember that the number of bird to kill can't be more than the first number in each level
// [[numer of birds],[Bird speed],[[speed between],[speed between]],[none kill birds],[double kill birds],[small birds],[time mode, number of birds, time]]
levels = [ 
	[[1],[2500],[[1100],[1100]],[0],[0],[0],[false]],
	[[6],[1500],[[1100],[1100]],[0],[0],[0],[false]],
	[[6],[1500],[[1000],[1000]],[0],[0],[0],[false]],
	[[8],[1500],[[1000],[1000]],[0],[0],[0],[false]],
	[[10],[1400],[[800],[800]],[0],[0],[0],[false]],
	[[12],[1400],[[800],[800]],[0],[0],[0],[false]],
	[[15],[1300],[[800],[800]],[0],[0],[0],[false]],
	[[18],[1300],[[800],[800]],[0],[0],[0],[false]],
	[[20],[1200],[[600],[600]],[0],[0],[0],[false]],
	[[25],[1150],[[600],[600]],[0],[0],[0],[true, 5, 10]],

	[[10],[840],[[600],[3000]],[0],[0],[0],[false]],
	[[12],[840],[[600],[3000]],[0],[0],[0],[false]],
	[[10],[820],[[500],[2000]],[0],[0],[0],[false]],
	[[12],[820],[[500],[2000]],[0],[0],[0],[false]],
	[[10],[810],[[600],[650]],[0],[0],[0],[false]],
	[[12],[810],[[600],[650]],[0],[0],[0],[false]],
	[[14],[800],[[600],[650]],[0],[0],[0],[false]],
	[[25],[1000],[[600],[600]],[0],[0],[0],[false]],
	[[30],[900],[[570],[570]],[0],[0],[0],[false]],
	[[30],[1150],[[480],[480]],[15],[0],[0],[false]], 
	[[35],[1100],[[500],[500]],[18],[0],[0],[false]],

	[[30],[1100],[[450],[480]],[22],[0],[0],[false]],
	[[35],[1100],[[450],[480]],[25],[0],[0],[false]],
	[[40],[1200],[[430],[430]],[30],[0],[0],[false]],
	[[45],[1200],[[420],[420]],[30],[0],[0],[false]],
	[[40],[1160],[[420],[420]],[30],[0],[0],[false]],
	[[45],[1160],[[420],[420]],[30],[0],[0],[false]],
	[[40],[1130],[[420],[420]],[30],[0],[0],[false]],
	[[50],[1130],[[410],[410]],[30],[0],[0],[false]],
	[[20],[3000],[[350],[350]],[10],[0],[10],[false]], 
	[[20],[2800],[[350],[350]],[10],[0],[12],[false]],

	[[20],[2600],[[350],[350]],[10],[0],[10],[false]],
	[[20],[2400],[[350],[350]],[10],[0],[12],[false]],
	[[20],[2400],[[350],[350]],[10],[0],[14],[false]],
	[[25],[2400],[[350],[350]],[10],[0],[18],[false]],
	[[15],[840],[[600],[3000]],[0],[0],[5],[false]],
	[[20],[840],[[600],[3000]],[0],[0],[7],[false]],
	[[15],[820],[[500],[2000]],[0],[0],[7],[false]],
	[[20],[820],[[500],[2000]],[0],[0],[10],[false]],
	[[20],[1450],[[440],[640]],[10],[4],[4],[false]], 
	[[25],[1450],[[440],[640]],[10],[5],[5],[false]],

	[[2],[1450],[[430],[630]],[0],[0],[0],[false]],
	[[25],[1450],[[420],[620]],[10],[8],[8],[false]],
	[[20],[1350],[[420],[620]],[10],[10],[9],[false]],
	[[25],[1350],[[420],[620]],[10],[10],[10],[false]],
	[[20],[1350],[[420],[620]],[10],[12],[10],[false]],
	[[25],[1350],[[420],[620]],[10],[12],[12],[false]],
	[[10],[1100],[[650],[650]],[0],[9],[0],[false]],
	[[12],[1100],[[650],[650]],[0],[11],[0],[false]],
	[[10],[1110],[[640],[640]],[0],[9],[0],[false]],
	[[12],[1100],[[640],[640]],[0],[11],[0],[false]],

	[[10],[1080],[[640],[640]],[0],[9],[0],[false]],
	[[12],[1080],[[640],[640]],[0],[11],[0],[false]],
	[[14],[1060],[[630],[630]],[0],[13],[0],[false]],
	[[16],[1060],[[630],[630]],[0],[15],[0],[false]],
	[[30],[2200],[[350],[350]],[10],[10],[15],[false]],
	[[35],[2200],[[350],[350]],[10],[10],[20],[false]],
	[[40],[2000],[[350],[350]],[10],[15],[15],[false]],
	[[45],[1800],[[350],[350]],[10],[15],[20],[false]],

]

var level;
var image;
var score;
function createLevelHolder() {
	score = checkLocalStorageLevel();
	$(".container").css("overflow-y","hidden");
	for(var i = 0; i<levels.length;i++){
		level = i+1;
		if(level == score) {
			$(".levels").prepend("<div class='levelSky2 levelBanner banner "+level+"' id='"+level+"'>"+
							  "<div class='sky'>"+
							       "Level "+level+
							  "</div>"+
							"<div " +
								"class='1 bird normalBird levelsBird'>" +
								"<div class='leftBird image'></div> " +
							"</div>"+
						 "</div>");
		}

		else if (level < score){	
			$(".levels").prepend("<div class='levelSky2 levelBanner banner "+level+"' id='"+level+"'>"+
										  "<div class='sky'>"+
										       "Level "+level+
										  "</div>"+
										  "<div class='skyImage2' ></div> "+
									 "</div>");
		}

		else {
			$(".levels").prepend("<div class='levelSky levelBanner banner "+level+"'>"+
										  "<div class='sky'>"+
										       "Level "+level+
										  "</div>"+
										 "<div class='skyImage3' ></div> "+
									 "</div>");
		}

		var sideHoyde = $(window).height();
		if(level == 1) {
			$(".1").css("margin-bottom","15%");
		}
	}

	if(score != levels.length) {
		$("."+(score+1)).get(0).scrollIntoView();		
	}
}

var totalBirds;
var speed;
var newBirdSpeed;
var numberOfDobbleKill;
var numberOfSmallBirds;
var timeLevelTimeGame;
var currentLevel ;
$(document).on("click", ".levelSky2", function() {
	$(".container").css("overflow-y","hidden");
	currentLevel = $(this).attr("id");
	var game = 1;
	$(".levels").empty();
	if(currentLevel == 1) {
		try {
		   var a = amplify.store("level");
			if(a>=2){
				$(".container").css("overflow","hidden");
				$('.levelHolder').hide();
				$(".points").show();
				spillLevelLevelGame(levels[(currentLevel-1)]);
			}
			else {
				$(".container").css("overflow","hidden");
				$('.levelHolder').hide();
				$('.spillHolder').show();
				introSpill(game);
			}

		} catch(e){
				$(".container").css("overflow","hidden");
				$('.levelHolder').hide();
				$('.spillHolder').show();
				introSpill(game);
		}
	}
	else if(currentLevel == noneKillNumber) {
		$('.levelHolder').hide();
		$('#information3').show();
	}
	else if(currentLevel == doubleKillNumber) {
		$('.levelHolder').hide();
		$('#information4').show();
	}
	else if(currentLevel == smallBirdNumber) {
		$('.levelHolder').hide();
		$('#information5').show();
	}
	else if(currentLevel == startTimeGame) {
		$('.levelHolder').hide();
		$('#information8').show();		
	}
	else if(levels[(currentLevel-1)][6][0] === true) {
		$('.levelHolder').hide();
		timeLevelTimeGame = levels[startTimeGame-1][6];
		$(".numberOfBirdsToKill").html(timeLevelTimeGame[1]);
		$(".timeToKillTheBirds").html(timeLevelTimeGame[2]);
		$("#information9").show();
	}
	else {
		try {
			$(".container").css("overflow","hidden");
			$('.levelHolder').hide();
			spillLevelLevelGame(levels[(currentLevel-1)]);
		}
		catch(e){
		}
	}
});