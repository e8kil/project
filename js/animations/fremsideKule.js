var fremsideVenstreHoyere = 1;
var fremsideNedtelling;
var containerBredde;

var counter = 0;

function fremsideKule() {
	$('.fremsideKule').css("width",""+(sideBredde*0.17)+"px");
	var fremsideKuleHoyde = $('.fremsideKule').width();
	$('.fremsideKule').css("height",""+(fremsideKuleHoyde*0.80)+"px");
	fremsideKule2();
}

function fremsideKule2() {
	if(fremsideVenstreHoyere === 1){
		var fremsideBredde1 = containerBredde * 0.70;
		$(".fremsideKule").css("-webkit-transition","all 2500ms linear");
		$(".fremsideKule").css("-webkit-transform","translate("+fremsideBredde1+"px, 0px)");
		fremsideVenstreHoyere = 2;
		fremsideNedtelling = window.setTimeout("fremsideKule2()", 2500);
		$(".fremsideKuleBilde").css("transform","scaleX(1)");
	}
	else if (fremsideVenstreHoyere === 2){
		$(".fremsideKule").css("-webkit-transition","all 2500ms linear");
		$(".fremsideKule").css("-webkit-transform","translate(0px, 0px)");
		fremsideVenstreHoyere = 1;
		fremsideNedtelling = window.setTimeout("fremsideKule2()", 2500);
		$(".fremsideKuleBilde").css("transform","scaleX(-1)");
	}
}