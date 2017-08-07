$(document).on("click", ".vibrationOnOff", function() {
	vibrationclick();
	if(vibration == 1) {
		$(".vibration").html("<img class='vibrationOnOff' src='./pics/vibrationOff.png'>");
		vibration = 2;
		amplifyStorageVibration(vibration);
	}
	else {
		$(".vibration").html("<img class='vibrationOnOff' src='./pics/vibrationOn.png'>");
		vibration = 1;
		amplifyStorageVibration(vibration);
	}
});

$(document).on("click", ".vibrationOnOff2", function() {
	vibrationclick();
	if(vibration2 == 1) {
		$(".vibration2").html("<img class='vibrationOnOff2' src='./pics/vibrationOff.png'>");
		vibration2 = 2;
		amplifyStorageVibration2(vibration2);
	}
	else {
		$(".vibration2").html("<img class='vibrationOnOff2' src='./pics/vibrationOn.png'>");
		vibration2 = 1;
		amplifyStorageVibration2(vibration2);
	}
});

function vibrationclick(){
	if(vibration2 == 1){
    	navigator.vibrate(50);
	}
}