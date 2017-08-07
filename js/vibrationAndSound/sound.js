$(document).on("click", ".soundOnOFF", function() {
	vibrationclick();
	if(sound == 1) {
		$(".sound").html("<img class='soundOnOFF' src='./pics/soundOff.png'>");
		sound = 2;
		amplifyStorageSound(sound);
	}
	else {
		$(".sound").html("<img class='soundOnOFF' src='./pics/soundOn.png'>");
		sound = 1;
		amplifyStorageSound(sound);
	}
});
