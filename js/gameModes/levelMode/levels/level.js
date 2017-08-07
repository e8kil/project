var levels = [];
var smallBirdNumber;
var doubleKillNumber;
var noneKillNumber;
var startTimeGame;
//creating the different levels


// levels[0] = [[1],[2500],[[1100],[1100]],[0],[0],[0]];
// levels[1] = [[8],[1500],[[1100],[1100]],[0],[0],[0]];
// levels[2] = [[10],[1500],[[1000],[1000]],[0],[0],[0]];
// levels[3] = [[12],[1400],[[800],[800]],[0],[0],[0]];
// levels[4] = [[8],[1300],[[800],[800]],[0],[0],[0]];
// levels[5] = [[10],[1300],[[800],[800]],[0],[0],[0]];
// levels[6] = [[12],[1300],[[800],[800]],[0],[0],[0]];
// levels[7] = [[20],[1250],[[700],[700]],[0],[0],[0]];
// levels[8] = [[20],[1250],[[700],[700]],[0],[0],[0]];
// levels[9] = [[20],[1250],[[700],[700]],[0],[0],[0]];
// levels[10] = [[20],[1200],[[600],[600]],[0],[0],[0]];
// levels[11] = [[25],[1200],[[600],[600]],[0],[0],[0]];
// levels[12] = [[20],[1100],[[600],[600]],[0],[0],[0]];
// levels[13] = [[25],[1100],[[600],[600]],[0],[0],[0]];
// levels[14] = [[10],[840],[[600],[3000]],[0],[0],[0]];
// levels[15] = [[12],[840],[[600],[3000]],[0],[0],[0]];
// levels[16] = [[10],[820],[[500],[2000]],[0],[0],[0]];
// levels[17] = [[12],[820],[[500],[2000]],[0],[0],[0]];
// levels[18] = [[10],[810],[[600],[650]],[0],[0],[0]];
// levels[19] = [[12],[810],[[600],[650]],[0],[0],[0]];
// levels[20] = [[14],[800],[[600],[650]],[0],[0],[0]];
// levels[21] = [[25],[1000],[[600],[600]],[0],[0],[0]];
// levels[22] = [[30],[900],[[570],[570]],[0],[0],[0]];
// levels[23] = [[35],[860],[[560],[560]],[0],[0],[0]];
// levels[24] = [[40],[1500],[[450],[450]],[0],[0],[0]];
// levels[25] = [[45],[1300],[[450],[450]],[0],[0],[0]];
// levels[26] = [[50],[1150],[[450],[450]],[0],[0],[0]];
// levels[27] = [[55],[1150],[[450],[450]],[0],[0],[0]];
// noneKillNumber = 29;
// levels[28] = [[30],[1150],[[480],[480]],[15],[0],[0]]; //NoneKill bird
// levels[29] = [[35],[1100],[[500],[500]],[18],[0],[0]];
// levels[30] = [[30],[1100],[[450],[480]],[22],[0],[0]];
// levels[31] = [[35],[1100],[[450],[480]],[25],[0],[0]];
// levels[32] = [[40],[1200],[[430],[430]],[30],[0],[0]];
// levels[33] = [[45],[1200],[[420],[420]],[30],[0],[0]];
// levels[34] = [[40],[1160],[[420],[420]],[30],[0],[0]];
// levels[35] = [[45],[1160],[[420],[420]],[30],[0],[0]];
// levels[36] = [[40],[1130],[[420],[420]],[30],[0],[0]];
// levels[37] = [[50],[1130],[[410],[410]],[30],[0],[0]];
// smallBirdNumber = 39;
// levels[38] = [[20],[3000],[[350],[350]],[10],[0],[10]]; //smallBird
// levels[39] = [[20],[2800],[[350],[350]],[10],[0],[12]];
// levels[40] = [[20],[2600],[[350],[350]],[10],[0],[10]];
// levels[41] = [[20],[2400],[[350],[350]],[10],[0],[12]];
// levels[42] = [[20],[2400],[[350],[350]],[10],[0],[14]];
// levels[43] = [[25],[2400],[[350],[350]],[10],[0],[18]];
// levels[44] = [[15],[840],[[600],[3000]],[0],[0],[5]];
// levels[45] = [[20],[840],[[600],[3000]],[0],[0],[7]];
// levels[46] = [[15],[820],[[500],[2000]],[0],[0],[7]];
// levels[47] = [[20],[820],[[500],[2000]],[0],[0],[10]];
// doubleKillNumber = 49;
// levels[48] = [[20],[1450],[[440],[640]],[10],[4],[4]]; //doubleKill
// levels[49] = [[25],[1450],[[440],[640]],[10],[5],[5]];
// levels[50] = [[2],[1450],[[430],[630]],[0],[0],[0]];
// levels[51] = [[25],[1450],[[420],[620]],[10],[8],[8]];
// levels[52] = [[20],[1350],[[420],[620]],[10],[10],[9]];
// levels[53] = [[25],[1350],[[420],[620]],[10],[10],[10]];
// levels[54] = [[20],[1350],[[420],[620]],[10],[12],[10]];
// levels[55] = [[25],[1350],[[420],[620]],[10],[12],[12]];
// levels[56] = [[10],[1100],[[650],[650]],[0],[9],[0]];
// levels[57] = [[12],[1100],[[650],[650]],[0],[11],[0]];
// levels[58] = [[10],[1110],[[640],[640]],[0],[9],[0]];
// levels[59] = [[12],[1100],[[640],[640]],[0],[11],[0]];
// levels[60] = [[10],[1080],[[640],[640]],[0],[9],[0]];
// levels[61] = [[12],[1080],[[640],[640]],[0],[11],[0]];
// levels[62] = [[14],[1060],[[630],[630]],[0],[13],[0]];
// levels[63] = [[16],[1060],[[630],[630]],[0],[15],[0]];
// levels[64] = [[30],[2200],[[350],[350]],[10],[10],[15]];
// levels[65] = [[35],[2200],[[350],[350]],[10],[10],[20]];
// levels[66] = [[40],[2000],[[350],[350]],[10],[15],[15]];
// levels[67] = [[45],[1800],[[350],[350]],[10],[15],[20]];


// these numbers are required to get the info about the birds in the game. And they need to match when the special birds and timemode are used in the levels object. 
noneKillNumber = 29;
smallBirdNumber = 39;
doubleKillNumber = 49;
startTimeGame = 10;

	// [[35],[860],[[560],[560]],[0],[0],[0]],
	// [[40],[1500],[[450],[450]],[0],[0],[0]],
	// [[45],[1300],[[450],[450]],[0],[0],[0]],
	// [[50],[1150],[[450],[450]],[0],[0],[0]],
	// [[55],[1150],[[450],[450]],[0],[0],[0]],

// rememver that the number of bird to kill can't be more than the first number in each level

// [[numer of birds],[Bird speed],[[speed between],[speed between]],[none kill birds],[double kill birds],[small birds],[time mode, number of birds, time]]
levels = [ 
	[[1],[2500],[[1100],[1100]],[0],[0],[0],[false]],
	[[4],[1500],[[1100],[1100]],[0],[0],[0],[false]],
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
			image = "gameBird.gif";
			$(".levels").prepend("<div class='levelSky2 "+level+"' id='"+level+"'>"+
							  "<div class='sky'>"+
							       "Level "+level+""+
							  "</div>"+
							  "<img style='height:22%; width:14%; position:absolute; top:65%; left:43%;' src='./pics/"+image+"'> "+
						 "</div>");
		}

		else if (level < score){
			image = "deadbird.png";		
			$(".levels").prepend("<div class='levelSky2 "+level+"' id='"+level+"'>"+
										  "<div class='sky'>"+
										       "Level "+level+""+
										  "</div>"+
										  "<img style='height:34%; width:14%; position:absolute; top:60%; left:44%;' src='./pics/"+image+"'> "+
									 "</div>");
		}

		else {
			image = "lock.png";		
			$(".levels").prepend("<div class='levelSky "+level+"'>"+
										  "<div class='sky'>"+
										       "Level "+level+""+
										  "</div>"+
										  "<img style='height:24%; width:12%; position:absolute; top:65%; left:44%;' src='./pics/"+image+"'> "+
									 "</div>");
		}

		var sideHoyde = $(window).height();

		$(".levelSky, .levelSky2").css("width",""+((sideHoyde/4.2)*2)+"px");
		var levelSkyWidth = $(".levelSky2").width();
		$(".sky").css("font-size",""+(sideHoyde/24)+"px");
		$(".levelSky, .levelSky2").css("height",""+((sideHoyde*0.5)*0.4)+"px");

		$(".levelSky2").css("left",""+((sideBredde-levelSkyWidth)/2)+"px");
		$(".levelSky").css("left",""+((sideBredde-levelSkyWidth)/2)+"px");

		if(level == 1) {
			$(".1").css("margin-bottom","15%");
		}
	}

	if(score != levels.length) {
		$("."+(score+1)+"").get(0).scrollIntoView();		
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
	vibrationclick();
	$(".container").css("overflow-y","hidden");
	currentLevel = $(this).attr("id");
	var game = 1;
	$(".levels").empty();
	if(currentLevel == 1) {
		try {
		   var a = amplify.store("level");
		   console.log(a);
			if(a>=2){
				// totalBirds = levels[(currentLevel-1)][0];
				// speed = levels[(currentLevel-1)][1];
				// newBirdSpeed = levels[(currentLevel-1)][2];
				// numberOfNoneKill = levels[(currentLevel-1)][3];
				// numberOfDobbleKill = levels[(currentLevel-1)][4];
				// numberOfSmallBirds = levels[(currentLevel-1)][5];
				// timeLevelTimeGame = levels[(currentLevel-1)][6];


				// spillLevelLevelGame(totalBirds, speed, currentLevel, newBirdSpeed, numberOfNoneKill, numberOfDobbleKill, numberOfSmallBirds, timeLevelTimeGame);

				$(".container").css("overflow","hidden");
				$('.levelHolder').hide();
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

			// totalBirds = levels[(currentLevel-1)][0];
			// speed = levels[(currentLevel-1)][1];
			// newBirdSpeed = levels[(currentLevel-1)][2];
			// numberOfNoneKill = levels[(currentLevel-1)][3];
			// numberOfDobbleKill = levels[(currentLevel-1)][4];
			// numberOfSmallBirds = levels[(currentLevel-1)][5];
			// timeLevelTimeGame = levels[(currentLevel-1)][6];
			// spillLevelLevelGame(totalBirds, speed, currentLevel, newBirdSpeed, numberOfNoneKill, numberOfDobbleKill, numberOfSmallBirds, timeLevelTimeGame);

			$(".container").css("overflow","hidden");
			$('.levelHolder').hide();
			spillLevelLevelGame(levels[(currentLevel-1)]);


		}
		catch(e){
		}
	}

});