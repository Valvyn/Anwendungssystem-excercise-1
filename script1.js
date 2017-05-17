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

  document.getElementById("ausgabe1").innerHTML = roundedRandomVoltage;
}


function Runden2Dezimal(randomVoltage) {
  return Math.round(randomVoltage * 10) / 10 ;
}

var elem = document.getElementById('los');
elem.addEventListener('click', chkFormular);

var form = document.getElementById("submitForm");
function handleForm(event) { event.preventDefault(); }
form.addEventListener('submit', handleForm);

function checkUserInput(user, usage) {
  if (user.match(/^\S{2}\d{2}$/) == user && usage.match(/\d*/) == usage){
    return true;
  }
  return false;
}

function chkFormular() {
  var user = document.Formular.Name.value
  var usage = document.Formular.Verbrauch.value
  if ( user != "" && usage != "" ) {
    if (checkUserInput(user, usage)){
      console.log("works");
    }else{
      alert("Bitte geben sie korrekt Daten ein")
      return;
    }
    elemUhr = new Date();
    document.getElementById("ausgabe3").innerHTML = new Date;
    var table = document.getElementById("formDataTable");
    var row = table.insertRow(table.rows.length);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);

    cell1.innerHTML = document.Formular.Name.value
    cell2.innerHTML = document.Formular.Verbrauch.value
    cell3.innerHTML = elemUhr
  }else{
    alert("Bitte füllen sie beide Spalten aus!");
  }
}
