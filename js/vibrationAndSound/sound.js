$(document).on("click", ".soundOnOFF", function() {

	if(sound == 1) {
		$(".sound").html("<img class='soundOnOFF' src='./pics/icons/soundOff.svg'>");
		sound = 2;
		soundLocalStorage(sound);
	}
	else {
		$(".sound").html("<img class='soundOnOFF' src='./pics/icons/soundOn.svg'>");
		sound = 1;
		soundLocalStorage(sound);
	}
});
