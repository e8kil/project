window.onload = function() {
	document.addEventListener('deviceready', this.onDeviceReady, false);
};

function onDeviseReady(){
    var parentElement = document.getElementById(id);
    var listeningElement = parentElement.querySelector('.listening');
    var receivedElement = parentElement.querySelector('.received');
    listeningElement.setAttribute('style', 'display:none;');
    receivedElement.setAttribute('style', 'display:block;');
}

FastClick.attach(document.body);
soundAndVibration();

$(document).ready(function(){
    lowLag.init();
    lowLag.load("./sound/blop.wav", "bird");
    lowLag.load("./sound/gameOver.mp3", "gameOver");
    lowLag.load("./sound/complete.mp3", "complete");
	//amplify.store("score", 0);
	// amplify.store("level", 10);
    // amplify.store("10Birds", 10000000000);
	// amplify.store("30Birds", 10000000000);
    // amplify.store("50Birds", 10000000000);
});

