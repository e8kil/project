var sound;
var vibration;

$("#exitSettings").click(function(){
	vibrationclick();
	$(".spill2").css('pointer-events', 'none');
	$("#settingsHolder").hide();
	settings = 1;
});

function soundAndVibration(){
	sound = checkLocalStorageSound();

	if(sound == 1) {
		$(".sound").html("<img class='soundOnOFF' src='./pics/soundOn.png'>");
	}
	else {
		$(".sound").html("<img class='soundOnOFF' src='./pics/soundOff.png'>");
	}

	vibration = checkLocalStorageVibration();

	if(vibration == 1) {
		$(".vibration").html("<img class='vibrationOnOff' src='./pics/vibrationOn.png'>");
	}
	else {
		$(".vibration").html("<img class='vibrationOnOff' src='./pics/vibrationOff.png'>");
	}

	sound2 = checkLocalStorageSound2();

	if(sound2 == 1) {
		$(".sound2").html("<img class='soundOnOFF2' src='./pics/soundOn.png'>");
		startBackgroundMusic();
	}
	else {
		$(".sound2").html("<img class='soundOnOFF2' src='./pics/soundOff.png'>");
	}

	vibration2 = checkLocalStorageVibration2();

	if(vibration2 == 1) {
		$(".vibration2").html("<img class='vibrationOnOff2' src='./pics/vibrationOn.png'>");
	}
	else {
		$(".vibration2").html("<img class='vibrationOnOff2' src='./pics/vibrationOff.png'>");
	}

}

var settings = 1;
$(".settingsIcon").click(function(){
	vibrationclick();
	$("#spill2").attr( 'onClick', 'return false' );
	if(settings == 1) {
		$("#settingsHolder").show();
		settings = 2;
	}
	else {
		$("#settingsHolder").hide();
		settings = 1;
	}

});