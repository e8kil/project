
//........................................................................................Spill............................................................................
var game;
function introSpill(g) {
	game = g;
	introSetSpeed();
	introCreateBird();
}

//........................................................................................SetSpeed............................................................................

var speed;
var	removeBirdSpeed;
var fallSpeed;

function introSetSpeed(){
	speed = 1100;
	removeBirdSpeed = speed + 300;
	fallSpeed = speed+100;
}

//........................................................................................CreateBird............................................................................

var birdnumber = 0;
var leftOrRight ;
var	bird;

function introCreateBird() {

	bird = "<div id='introBird'  class = '1 col-lg-12 kule'>"+
			"</div>"	
			$(".kuleHolder").append(bird);	
	$("#introBird").html("<img style='height:100%; width:100%;' src='./pics/gameBird.gif'>");

	$("#introBird").css("width","18%");
	var birdWidth = $("#introBird").width();
	$("#introBird").css("height",""+(birdWidth*0.6)+"px");
	$("#introDeadBird").css("height",""+(birdWidth*0.6)+"px");
	var kuleB = $(".kule").width();
			$(".kule").css({
				"left" : "-"+kuleB+"px",
				"top" : "10%"
	});
	window.setTimeout("addClass()", speed);
	introGameplay();
}

//........................................................................................gamePlay..............................................................................................

var containerBredde = $(".container").width();

function introGameplay(){
	window.setTimeout("information()", speed);

	$("#startGame").css("font-size",""+tapt+"px");
	var kuleB = $(".kule").width();
	var spillBredde = (containerBredde + kuleB)/2;
	$("#introBird").css("z-index","201");
	//$(".kuleHolder").css("left",""+containerLeft.left+"px");
	$("#introBird").css("-webkit-transition","all "+speed+"ms linear");
	$("#introBird").css("-webkit-transform","translate("+spillBredde+"px, 0px)");
}

//........................................................................................Click kule..........................................................................................

$(document).on('touchstart mousedown', '.ready', function(){
	if(game == 1) {
		$("#information").hide();
	}
	else {
		$("#informationGame1").hide();		
	}


	var id = $(this).attr("id");
	var className = $("#introBird").attr('class');
	$("#introBird").attr('class', '1 col-lg-12 shot');

	//removeBird(id);
	introFall(id);
	if(game == 1) {
		window.setTimeout("information2()", 700); 
	}
	else {
		window.setTimeout("information2()", 700); 
	}

});

//........................................................................................Bird fall..........................................................................................

var container = $(window).height();
function introFall(id){
	var birdDistanceToTop = $("#introBird").offset().top;
	var birdFall = container - birdDistanceToTop;
    $("#introBird").html("<img style='height:125%; width:125%;' src='./pics/dead1.gif'>");
    $("#introBird").css("-webkit-transition","all "+removeBirdSpeed+"ms linear");
	$("#introBird").css("-webkit-transform","translate(600px, "+container+"px)");	
	$("#introBird").css("height","0%");
	$("#introBird").css("width","0%");

    window.setTimeout("introRemoveBird()", removeBirdSpeed);
}

//........................................................................................Remove Bird..............................................................................................

function introRemoveBird(){
	$("#introBird").remove();
}
//........................................................................................Play agian..........................................................................................

function information() {
	if(game == 1){
		$("#information").show();
	}
	else {
		$("#informationGame1").show();
	}	
}
function information2(){
	if(game == 1){
		$("#information2").show();
	}
	else {
		$("#informationGame2").show();
	}	
}

$(document).on("click", "#startGame", function() {
	if(game == 1) {
		$("#information2").hide();
		$(".container").css("overflow","hidden");
		$('.levelHolder').hide();
		spillLevelLevelGame(levels[(0)]);
	}
	else {
		$("#informationGame2").hide();
		window.setTimeout("spillFree()", 500);	
	}

});

function addClass() {
	$("#introBird").addClass("ready");
}


