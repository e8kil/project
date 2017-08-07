var skyBredde;
var skyBredde2;
var sideHoyde = $(window).height();
//$('.container').css("max-width",""+(sideHoyde*0.78)+"px");
var conBredde = $(".container").width();

function skyer(){
	skyBredde = $(".sky1").width();
	skyBredde2 = $(".sky2").width();
	//$(".sky1").css("left", "-"+skyBredde+"px");
	//$(".sky2").css("left", "-"+skyBredde2+"px");
	sky1();

		sky2();

}


function sky1() {
	$(".sky1").css("-webkit-transition","all 28s linear");
	$(".sky1").css("-webkit-transform","translate("+conBredde+"px, 0px)");
	setTimeout(function(){
		moveSky();
	}, 28000);
}

function moveSky() {
	var skyBredde = $(".sky1").width();
	$(".sky1").css("left","0%");
	$(".sky1").css("-webkit-transition","all 0s linear");
	$(".sky1").css("-webkit-transform","translate(-"+skyBredde+"px, 0px)");
	//sky();
	setTimeout(function(){
		sky1();
	}, 2000);
}

function sky2() {
	$(".sky2").css("-webkit-transition","all 22s linear");
	$(".sky2").css("-webkit-transform","translate("+conBredde+"px, 0px)");
	setTimeout(function(){
		moveSky2();
	}, 23000);
}

function moveSky2() {
	var skyBredde2 = $(".sky2").width();
	$(".sky2").css("left","0%");
	$(".sky2").css("-webkit-transition","all 0s linear");
	$(".sky2").css("-webkit-transform","translate(-"+skyBredde2+"px, 0px)");
	//sky();
	setTimeout(function(){
		sky2();
	}, 200);
}