
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

	bird = "<div id='introBird' style='position:fixed;'"+
		"class='1 bird normalBird'>" +
		"<div class='leftBird image'></div> " +
		"</div>";

	$(".birdsContainer").append(bird);

	var birdWidth = $(".bird").width();
	$(".bird").css({
		"left": "-"+(birdWidth+20)+"px",
		"top": "20%",
		"z-index": "1000",
	});

	window.setTimeout("addClass()", speed);
	introGameplay();
}

//........................................................................................gamePlay..............................................................................................

function introGameplay(){
	window.setTimeout("information()", speed);
	var birdWidth = $(".bird").width();
	var spillBredde = ($('.container').width() + birdWidth)/2;
	$("#introBird").css("-webkit-transition","all "+speed+"ms linear");
	$("#introBird").css("-webkit-transform","translate("+spillBredde+"px, 0px)");
}

//........................................................................................Click kule..........................................................................................

$(document).on('touchstart', '.ready', function(){

	if(game == 1) {
		$("#information").hide();
	}
	else {
		$("#informationGame1").hide();		
	}

	var id = $(this).attr("id");
	var className = $("#introBird").attr('class');
	$("#introBird").attr('class', '1 shot');
	introFall(id);
	window.setTimeout("information2()", 700); 
});

//........................................................................................Bird fall..........................................................................................

var container = $(window).height();
function introFall(id){
	var birdDistanceToTop = $("#introBird").offset().top;
	var birdFall = container - birdDistanceToTop;
	$("#introBird").html("<img class='spinLeft' style='height:125%; width:125%;' src='./pics/birds/deadbird-left.svg'>");
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
	$(".spillHolder").hide();
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
	$(".spillHolder").show();
	$('.points').show();
});

function addClass() {
	$("#introBird").addClass("ready");
}


