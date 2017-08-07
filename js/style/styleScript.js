var kuleFremsidebredde;
var playFont;
var sideBredde;
var containerLeft;
var tapt;
var kuleBirdWidth;
var kuleBirdHeight;
var kuleBirdMarginTop;


//Hide all element that shall not show when loading the game
$('.taptHolderFlash, .TimeSelectorDone2Flash, .TimeSelectorDoneFlash, .gameLostFlash, .gameWonFlash, .timer, .spillHolder, .taptHolder, .levelHolder, .taptHolderLevel, .TimeSelectorDone2, .completeLevel, .exitTime, .retryTime, .exitTimeLevel, .retryTimeLevel, .TimeSelector, .TimeSelector2, .gameTreeAndFour, .TimeSelectorDone, .TimeSelectorDone2, .countDown, #settingsHolder, #information, #information2, #informationGame1, #informationGame2, #information3, #information4, #information5, #information6, #information7, #information8, #information9, .countDownToStart').hide();

function htmlAndCss(){
	var sideHoyde = $(window).height();
	$('body').css("max-width",""+(sideHoyde*0.78)+"px");
	$('.container').css("max-width",""+(sideHoyde*0.78)+"px");
	var windowWidth = $(window).width();
	sideBredde = $('.container').width();
	var homeSize = $("#home").width();
	var kulebredde = $(".kule").width();
	kuleFremsidebredde = $(".fremsideKule").width();
	containerBredde = $(".container").width();
	var logoFont2 =(containerBredde);
	var logoFont = (containerBredde * 0.07);
	var highscoreFont = (logoFont * 1.3);
	playFont = logoFont * 1.2;
	var poeng = logoFont * 2;
	tapt = logoFont * 1.2;
	var logoHeigth = $("#logoText").height();
	var heigScoreFrontpageFont = logoFont*0.8;
	totalScoreFont = logoFont;
	scoreFont = logoFont;
	NextLevelNewGameFont = logoFont*0.7;
	var logofont3 = (logoFont * 2.6);
	var spillholderBredde = $('.info').width();
	containerLeft = $(".container").offset();

 	$("#continuePlay, #continuePlay2, #continuePlay3, #continuePlay4, #continuePlay5, #continuePlay6, #startGame").css("font-size",""+tapt+"px");
	$(".playAgain, .playAgainTime, .playAgainTime2").css("font-size",""+tapt+"px");
	$(".tapt, .TimesUp, .TimesUp2, .taptFlash").css("font-size",""+tapt+"px");
	$(".highscoreText").css("font-size",""+heigScoreFrontpageFont+"px");
	$(".logo").css("font-size",""+logofont3+"px");
	$(".logo, .highscore, .completeLevel, .fremsideKuleHolder, .kuleHolder, .spillHolder, taptHolder, .taptHolderLevel,	.completeLevel, .poeng, .taptHolderFlash").css("width",""+(sideBredde)+"px");
    $("#spill, #spill2, #spill3").css("height",""+(sideHoyde/10)+"px");
	$(".sound, .vibration, .sound2, .vibration2").css("width",""+(sideBredde/7.5)+"px");
	$(".sound, .sound2").css("left",""+(sideBredde*0.58)+"px");
	$(".vibration, .vibration2").css("left",""+(sideBredde*0.58)+"px");
	$(".exitTime").css("left",""+(sideBredde*0.05)+"px");
	$(".retryTime").css("left",""+(sideBredde*0.75)+"px");
	$("#highscoreText").css("font-size",""+highscoreFont+"px");
	$(".play, .play2, .play3, .timer1, .timer2, .timer3, .tapt, .playAgain, .taptFlash, .playAgainFlash").css("width",""+((sideHoyde/3.7)*2)+"px");
	$(".timer4, .timer5, .timer6").css("width",""+((sideHoyde/3.7)*2)+"px");
	$(".game3, .game4").css("width",""+((sideHoyde/3.7)*2)+"px");
	var playWidth = $(".play").width();
	$("#spill, #spill2, #spill3, .holder").css("font-size",""+(sideHoyde/25)+"px");
	$("#time1, #time2, #time3, #time4, #time5, #time6, .game3, .game4").css("font-size",""+(sideHoyde/19)+"px");
	$("#hiScore15, #hiScore30, #hiScore60, #hiScore10Birds, #hiScore30Birds, #hiScore50Birds").css("font-size",""+(sideHoyde/30)+"px");
	$(".play, .play2, .play3, .timer1, .timer2, .timer3, .timer4, .timer5, .timer6, .game3, .game4,  .tapt, .playAgain, .taptFlash, .playAgainFlash").css("left",""+((sideBredde-playWidth)/2)+"px");
	$(".playAgainLevel, .nxt").css("font-size",""+(playFont*1.2)+"px");
	$(".back, .backLevel, .backLevel2, .backLevel3, .backTimeSelector, .backTimeSelector2, .Game3and4Back, .backTimeSelectorDone, .backTimeSelectorDone2, .timeLevel").css("font-size",""+(playFont*1.2)+"px");
	$(".back, .backLevel, .backLevel2, .backLevel3, .backTimeSelector, .backTimeSelector2, .Game3and4Back, .backTimeSelectorDone, .backTimeSelectorDone2").css("width",""+(sideBredde/3)+"px");
	$(".back, .backLevel, .backLevel2, .backTimeSelectorDone, .backTimeSelectorDone2").css("left",""+(sideBredde/3)+"px");
	$(".backLevel3, .backTimeSelector, .backTimeSelector2, .Game3and4Back").css("left",""+(sideBredde/3)+"px");
	$(".kule").css("height",""+kulebredde+"px");
	$(".kuleBilde").css("height",""+(kulebredde*0.7)+"px");
	$(".lostPoint").css("font-size",""+poeng*1.5+"px");
	$(".poeng").css("font-size",""+poeng*1.5+"px");
	$(".timer").css("font-size",""+poeng*1.2+"px");
	$("#information, #information2, #informationGame1, #informationGame2,  #information3, #information4, #information5,  #information6, #information7, #information8, #information9").css("font-size",""+(playFont*0.8)+"px");
	$('.fremsideKule').css("width",""+(sideBredde*0.17)+"px");
	var fremsideKuleHoyde = $('.fremsideKule').width();
	$('.fremsideKule').css("height",""+(fremsideKuleHoyde*0.80)+"px");
	$(".countDownToStart").css("font-size","35vh");
	$(".countDown").css("font-size",""+(playFont*3)+"px");
	$("#playSound, #backgroundSound, #playVibration, #buttonVibration").css("font-size",""+(playFont)+"px");
	$(".TimesUp, .TimesUp2, .playAgainTime, .playAgainTime2").css("width", ""+sideBredde+"px");
	$(".countDownToStart").css("top","35%");
	$(".countDown").css("padding-top",""+((sideHoyde/sideBredde)*255)+"px");  
	var sunWidth = $(".sun").width();
	$(".sun").css("height",""+(sunWidth)+"px"); 


	$(".levelSky, .levelSky2").css("width",""+((sideHoyde/4.2)*2)+"px");
	var levelSkyWidth = $(".levelSky2").width();
	$(".sky").css("font-size",""+(sideHoyde/24)+"px");
	$(".levelSky, .levelSky2").css("height",""+((sideHoyde*0.5)*0.4)+"px");

	$(".levelSky2").css("left",""+((sideBredde-levelSkyWidth)/2)+"px");
	$(".levelSky").css("left",""+((sideBredde-levelSkyWidth)/2)+"px");



	kuleBirdHeight = 92;
	kuleBirdWidth = 100;
	kuleBirdMarginTop = 4;
}
