//document.addEventListener("DOMContentLoaded", init, false); 

var eingabe_name;

var namen = []; 
var alter = []; 
var geschlecht = [];





/*
Funktion zur initalisierung des Listeners 
und der gespeicherten Daten 
aus dem Local Storeage
*/

function init(){
	var speicher_button = document.getElementById("speicher_button");
	speicher_button.addEventListener("click", daten_speichern, false);

	// gespeicherte Daten auslesen und in das array schreiben
	
	
	namen = JSON.parse(localStorage["namen"]);
	alter = JSON.parse(localStorage["alter"]);
	geschlecht = JSON.parse(localStorage["geschlecht"]);
	
}


/*Speicherung der Daten im Storeage*/

function daten_speichern(){

	eingabe_name = window.document.getElementById("textfield");
	var name = eingabe_name.value;

	//eingabe auswerten
	if(name == ""){
		alert("Es wurde kein Name eingegeben.");
	}else{
		//daten speichern

		// save name
		namen.push(name);
		localStorage["namen"] = JSON.stringify(namen);

		// save age
		slider = window.document.getElementById("slider-1");
		var inputAge = slider.value;
		alter.push(inputAge);
		localStorage["alter"] = JSON.stringify(alter);		
		
		// save gender		
		inputGender = document.querySelector('input[name="radio-choice-1"]:checked').value;
		geschlecht.push(inputGender);
		localStorage["geschlecht"] = JSON.stringify(geschlecht);	

		// notify user via alert
		alert("Daten gespeichert!");
		
		// reset value of input field
		eingabe_name.value = "";

		showData();
	}
}


function showData(){
	
	// namen auslesen
	var storedNames = JSON.parse(localStorage["namen"]);
	
	// loesche derzeitige Liset
	$( "#datalist" ).empty();
	
	// alter auslesen
	var ages = [];
	var storedAges = JSON.parse(localStorage["alter"]);
	storedAges.forEach(function(entry){
		ages.push(entry);		
	});	

	// geschlechter auslesen
	var genders = [];
	var storedGenders = JSON.parse(localStorage["geschlecht"]);
	storedGenders.forEach(function(entry){
		genders.push(entry);		
	});	
	
	// build list
	var i = 0
	storedNames.forEach(function(entry){
		$( "#datalist" ).append( "<li>" + entry + " | " + ages[i] + " | " + genders[i] + "</li>" );
		i++;
	});
	
}