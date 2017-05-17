$( document ).ready(function(){


});

function zufallsZahl1() {
  var minVoltage = 220;
  var maxVoltage = 240;
  var minAmpere = 0;

  var maxLoad = document.getElementById("maxLoad").textContent;
  maxLoad = parseInt(maxLoad.match(/\d+/)[0]);

  var randomVoltage = (Math.random() * (maxVoltage - minVoltage + 1)) + minVoltage;
  var roundedRandomVoltage = Runden2Dezimal(randomVoltage)

  if(roundedRandomVoltage != ""){
    randomAmpere=((Math.random() * (maxLoad - minAmpere + 1)) + minAmpere) + 5;
    roundedRandomAmpere = Runden2Dezimal(randomAmpere)
    document.getElementById("ausgabe2").innerHTML = roundedRandomAmpere;

    if(roundedRandomAmpere > maxLoad){
    alert("Warnung, Stromstärke überprüfen!");
    }
  }

  document.getElementById("ausgabe1").innerHTML = randomVoltage;
}


function Runden2Dezimal(randomVoltage) {
  return Math.round(randomVoltage * 10) / 10 ;
}

var elem = document.getElementById('submit');
elem.addEventListener('click', chkFormular);

function chkFormular() {

  if (document.Formular.Verbrauch.value != "" && document.Formular.Name != "") {
    elemUhr = new Date();
    document.getElementById("ausgabe3").innerHTML = new Date;
    var table = document.getElementById("formDataTable");
    
  }else{
    alert("Bitte füllen sie beide Spalten aus!");
  }
}
