$(document).on("click", ".vibrationOnOff", function() {
	
	if(vibration == 1) {
		$(".vibration").html("<img class='vibrationOnOff' src='./pics/icons/vibrationOff.svg'>");
		vibration = 2;
		vibrationLocalStorage(vibration);
	}
	else {
		$(".vibration").html("<img class='vibrationOnOff' src='./pics/icons/vibrationOn.svg'>");
		vibration = 1;
		vibrationLocalStorage(vibration);
	}
});

// $(document).on("click", ".vibrationOnOff2", function() {
// 	
// 	if(vibration2 == 1) {
// 		$(".vibration2").html("<img class='vibrationOnOff2' src='./pics/icons/vibrationOff.svg'>");
// 		vibration2 = 2;
// 		amplifyStorageVibration2(vibration2);
// 	}
// 	else {
// 		$(".vibration2").html("<img class='vibrationOnOff2' src='./pics/icons/vibrationOn.svg'>");
// 		vibration2 = 1;
// 		amplifyStorageVibration2(vibration2);
// 	}
// });

// function vibrationclick(){
// 	if(vibration2 == 1){
//     	navigator.vibrate(50);
// 	}
// }