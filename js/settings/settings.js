var sound;
var vibration;

$("#exitSettings").click(function(){
	
	$(".spill2").css('pointer-events', 'none');
	$("#settingsHolder").hide();
	settings = 1;
});

function soundAndVibration(){
	sound = checkLocalStorageSound();

	if(sound == 1) {
		$(".sound").html("<img class='soundOnOFF' src='./pics/icons/soundOn.svg'>");
	}
	else {
		$(".sound").html("<img class='soundOnOFF' src='./pics/icons/soundOff.svg'>");
	}

	vibration = checkLocalStorageVibration();

	if(vibration == 1) {
		$(".vibration").html("<img class='vibrationOnOff' src='./pics/icons/vibrationOn.svg'>");
	}
	else {
		$(".vibration").html("<img class='vibrationOnOff' src='./pics/icons/vibrationOff.svg'>");
	}
}

var settings = 1;
$(".settingsIcon").click(function(){
	
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