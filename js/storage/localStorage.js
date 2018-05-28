function freeModeLocalStorage(score){
	var localScore = amplify.store("score");
	if (localScore < score || localScore == undefined) {
		amplify.store("score", score);
		return score;
	}
	else {
		return localScore;
	}
}

function timeModeLocalStorage (scoreTime, time){
	var record;
	if (time == 15) {
		record = amplify.store("15");
	}
	else if (time == 30) {
		record = amplify.store("30");
	}
	else {
		record = amplify.store("60");
	}

	if(record<scoreTime){
		amplify.store(time, scoreTime);
		return scoreTime;
	}
	else {
		return record;
	}
}

function checkLocalStorageTime15 (){
	try {
	   var a = amplify.store("15");

		if(a>=0){
			var AmpScore = a;
			$("#hiScore15").html("High Score: "+AmpScore);
		}
		else {
			amplify.store("15", 0);
			$("#hiScore15").html("High Score: 0");
			var z = amplify.store("15");
		}
	} catch(e){
		amplify.store("15", 0);
		$("#hiScore15").html("High Score: 0");
	     var b = amplify.store("15");
	}
}	

function checkLocalStorageTime30 (){
	try {
	   var b = amplify.store("30");

		if(b>=0){
			var AmpScore = b;
			$("#hiScore30").html("High Score: "+AmpScore);
		}
		else {
			amplify.store("30", 0);
			$("#hiScore30").html("High Score: 0");
			var x = amplify.store("30");
		}
	} catch(e){
		amplify.store("30", 0);
		$("#hiScore30").html("High Score: 0");
	     var b = amplify.store("30");
	}
}

function checkLocalStorageTime60 (){
	try {
		var c = amplify.store("60");
		if(c>=0){
			var AmpScore = c;
			$("#hiScore60").html("High Score: "+AmpScore);
		}
		else {
			amplify.store("60", 0);
			$("#hiScore60").html("High Score: 0");
			var y = amplify.store("60");
		}
	} catch(e){
		amplify.store("60", 0);
		$("#hiScore60").html("High Score: 0");
	     var b = amplify.store("60");
	}
}

function timeModeLocalStorage2 (scoreTime, numbBirds){
	var t = numbBirds;
    var record;
	if (t == 10) {
		record = amplify.store("10Birds");

	}
	else if (t == 30) {
		record = amplify.store("30Birds");

	}
	else {
		record = amplify.store("50Birds");

	}


    var  minutes2 = moment.duration(scoreTime).minutes();
    var  seconds2 = moment.duration(scoreTime).seconds();
    var  msseconds2 = moment.duration(scoreTime).milliseconds(); 
    minutes2 = (minutes2 < 10) ? "0" + minutes2.toString() : minutes2.toString();
    seconds2 = (seconds2 < 10) ? "0" + seconds2.toString() : seconds2.toString();
    msseconds2 = msseconds2.toString().substring(0,2); 

    minutes3 = parseInt(minutes2);
    seconds3 = parseInt(seconds2);
    msseconds3 = parseInt(msseconds2);

	var checkScore = (((minutes3*60)*1000)+ (seconds3*1000) + (msseconds3));

	if(record>checkScore){
		amplify.store(t+"Birds", checkScore);
	    return [[minutes2, seconds2, msseconds2],[minutes2, seconds2, msseconds2]];   	
	}
	else {
		var  minutes = moment.duration(record).minutes();
	    var  seconds = moment.duration(record).seconds();
	    var  msseconds = moment.duration(record).milliseconds(); 
	    minutes = (minutes < 10) ? "0" + minutes.toString() : minutes.toString();
	    seconds = (seconds < 10) ? "0" + seconds.toString() : seconds.toString();
	    msseconds = msseconds.toString().substring(0,2); 

	    return [[minutes2, seconds2, msseconds2],[minutes, seconds, msseconds]];
	}
}

function checkLocalStorageTime10Birds (){
	try {
		var a = amplify.store("10Birds");
		if(a>=0){
			var AmpScore = a;
			if(AmpScore == 10000000000) {
					$("#hiScore10Birds").html("Record:");
			}
			else {
				var  minutes = moment.duration(AmpScore).minutes();
			    var  seconds = moment.duration(AmpScore).seconds();
			    var  msseconds = moment.duration(AmpScore).milliseconds(); 
			    minutes = (minutes < 10) ? "0" + minutes.toString() : minutes.toString();
			    seconds = (seconds < 10) ? "0" + seconds.toString() : seconds.toString();
			    msseconds = msseconds.toString().substring(0,2); 

				$('.min10').html(minutes+".");
			    $('.sec10').html(seconds+".");
			    $('.msec10').html(msseconds);

			    if(minutes == 0) {
	    			$('.min10').hide();
	    		}
			}

		}
		else {
			amplify.store("10Birds", 10000000000);
			$("#hiScore10Birds").html("Record: ");
			var y = amplify.store("60");
		}
	} catch(e){
		amplify.store("10Birds", 10000000000);
		$("#hiScore10Birds").html("Record: ");
	     var a = amplify.store("10Birds");
	}
}

function checkLocalStorageTime30Birds (){
	try {
		var b = amplify.store("30Birds");
		if(b>=0){
			var AmpScore = b;

			if(AmpScore == 10000000000) {
				$("#hiScore30Birds").html("Record:");
			}
			else {

				var  minutes = moment.duration(AmpScore).minutes();
			    var  seconds = moment.duration(AmpScore).seconds();
			    var  msseconds = moment.duration(AmpScore).milliseconds(); 
			    minutes = (minutes < 10) ? "0" + minutes.toString() : minutes.toString();
			    seconds = (seconds < 10) ? "0" + seconds.toString() : seconds.toString();
			    msseconds = msseconds.toString().substring(0,2); 

				$('.min30').html(minutes+".");
			    $('.sec30').html(seconds+".");
			    $('.msec30').html(msseconds);

			    if(minutes == 0) {
	    			$('.min30').hide();
	    		}				
				
			}
		}
		else {
			amplify.store("30Birds", 10000000000);
			$("#hiScore30Birds").html("Record: ");
			var y = amplify.store("30Birds");
		}
	} catch(e){
		amplify.store("30Birds", 10000000000);
		$("#hiScore30Birds").html("Record: ");
	     var b = amplify.store("30Birds");
	}
}

function checkLocalStorageTime50Birds (){
	try {
		var c = amplify.store("50Birds");
		if(c>=0){

			var AmpScore = c;
			
			if(AmpScore == 10000000000) {
				$("#hiScore50Birds").html("Record:");
			}
			else {
			    var  minutes = moment.duration(AmpScore).minutes();
			    var  seconds = moment.duration(AmpScore).seconds();
			    var  msseconds = moment.duration(AmpScore).milliseconds(); 
			    minutes = (minutes < 10) ? "0" + minutes.toString() : minutes.toString();
			    seconds = (seconds < 10) ? "0" + seconds.toString() : seconds.toString();
			    msseconds = msseconds.toString().substring(0,2); 
				
				$('.min50').html(minutes+".");
			    $('.sec50').html(seconds+".");
			    $('.msec50').html(msseconds);

			    if(minutes == 0) {
	    			$('.min50').hide();
	    		}	
			}
		}
		else {
			amplify.store("50Birds", 10000000000);
			$("#hiScore50Birds").html("Record: ");
			var y = amplify.store("50Birds");
		}
	} catch(e){
		amplify.store("50Birds", 10000000000);
		$("#hiScore50Birds").html("Record: ");
	     var c = amplify.store("30Birds");
	}
}

function levelModeLocalStorage (level){
	var a = amplify.store("level");
	if(a<(level)){
		var ampScore = level
		amplify.store("level", ampScore);
		return "record";
	}
	else {
		return "notRecord";
	}
}

function checkLocalStorageLevel (){
	try {
	   var a = amplify.store("level");
		if(a>=0){
			var AmpScore = a;
			return a;
		}
		else {
			amplify.store("level", 1);
			var b = amplify.store("level");
			return b;
		}

	} catch(e){
		amplify.store("level", 1);
	    var b = amplify.store("level");
	    return b;
	}	
}

function soundLocalStorage (sound){
	amplify.store("sound", sound);
}

function checkLocalStorageSound (){
	try {
	   var a = amplify.store("sound");

		if(a==1){
			return a;
		}
		else {
			var b = 2;
			return b;
		}

	} catch(e){
		amplify.store("sound", 1);
	    var b = amplify.store("sound");
	    return b;
	}	
}

function vibrationLocalStorage(vibration){
	amplify.store("vibration", vibration);
}

function checkLocalStorageVibration(){
	try {
	   var a = amplify.store("vibration");

		if(a==1){
			return a;
		}
		else {
			var b = 2;
			return b;
		}

	} catch(e){
		amplify.store("vibration", 1);
	    var b = amplify.store("vibration");
	    return b;
	}	
}

