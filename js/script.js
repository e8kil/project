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

htmlAndCss();
fremsideKule();
skyer();
var levelScore = checkLocalStorageLevel();
FastClick.attach(document.body);
checkLocalStorage();
soundAndVibration();

$(document).ready(function(){
	//amplify.store("score", 0);
	amplify.store("level", 15);
	//amplify.store("10Birds", 1000000);
	//amplify.store("30Birds", 10000000000);
	//amplify.store("50Birds", 10000000000);
});


window.onresize = function(event) {
    htmlAndCss();
};