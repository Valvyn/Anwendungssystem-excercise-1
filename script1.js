$( document ).ready(function(){


});

function zufallsZahl1() {
    var min = 220;
    var max = 240;
    var min2 = 0;
    var max2 = 7;


    var randomVoltage = (Math.random() * (max - min + 1)) + min;
    var roundedRandomVoltage = Runden2Dezimal(randomVoltage)

    if(roundedRandomVoltage != ""){
        elem4=(Math.random() * (max2 - min2 + 1)) + min2;
        elem3 = Runden2Dezimal(elem4)
        document.getElementById("ausgabe2").innerHTML = elem3;

        if(elem3 > 5){
        alert("Warnung, Stromstärke überprüfen!");
        }
    }

    document.getElementById("ausgabe1").innerHTML = randomVoltage;
}


function Runden2Dezimal(randomVoltage) {
    Ergebnis = Math.round(randomVoltage * 10) / 10 ;
    return Ergebnis;
}

var elem = document.getElementById('los');
elem.addEventListener('click', chkFormular);

if (document.Formular.Verbrauch.value != "" && document.Formular.Name != "") {
        elemUhr = new Date();
        document.getElementById("ausgabe3").innerHTML = new Date;
}

function chkFormular() {
	if (document.Formular.Name.value == "") {
		alert("Bitte geben Sie ihr Nutzerkennung ein!");
		}

    if (document.Formular.Verbrauch.value == "") {
		alert("Bitte Ihren Verbrauchswert (in kWh) ein!");
	}
}
