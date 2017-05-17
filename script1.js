$( document ).ready(function(){


});

function zufallsZahl1() {
  var minVoltage = 220;
  var maxVoltage = 240;
  var minAmpere = 0;
  var maxAmpere = 7;

  var randomVoltage = (Math.random() * (maxVoltage - minVoltage + 1)) + minVoltage;
  var roundedRandomVoltage = Runden2Dezimal(randomVoltage)

  if(roundedRandomVoltage != ""){
    randomAmpere=(Math.random() * (maxAmpere - minAmpere + 1)) + minAmpere;
    roundedRandomAmpere = Runden2Dezimal(randomAmpere)
    document.getElementById("ausgabe2").innerHTML = roundedRandomAmpere;

    if(roundedRandomAmpere > 5){
    alert("Warnung, Stromstärke überprüfen!");
    }
  }

  document.getElementById("ausgabe1").innerHTML = randomVoltage;
}


function Runden2Dezimal(randomVoltage) {
  return Math.round(randomVoltage * 10) / 10 ;
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
