$( document ).ready(function(){
});

function zufallsZahl1() {
  //set the Voltages to work with
  var minVoltage = 220;
  var maxVoltage = 240;
  var minAmpere = 0;

  //retrieve the maximum load from the current meter
  var maxLoad = document.getElementById("maxLoad").textContent;
  maxLoad = parseInt(maxLoad.match(/\d+/)[0]);

  //create a random voltage and round to two decimals
  var randomVoltage = (Math.random() * (maxVoltage - minVoltage + 1)) + minVoltage;
  var roundedRandomVoltage = Runden2Dezimal(randomVoltage)


  if(roundedRandomVoltage != ""){
    //create a random ampere value for each meter. Increment it by 5 and display it
    randomAmpere=((Math.random() * (maxLoad - minAmpere + 1)) + minAmpere) + 5;
    roundedRandomAmpere = Runden2Dezimal(randomAmpere)
    document.getElementById("ausgabe2").innerHTML = roundedRandomAmpere;

    //display the voltage
    document.getElementById("ausgabe1").innerHTML = roundedRandomVoltage;

    //throw a warning if the current load exceeds the maximum ampere
    if(roundedRandomAmpere > maxLoad){
    alert("Warnung, Stromzähler überlastet!");
    }
  }
}

// function to round any float value to two decimals
function Runden2Dezimal(randomVoltage) {
  return Math.round(randomVoltage * 10) / 10 ;
}

//start listening for clicks on the submit button on the form
var elem = document.getElementById('los');
elem.addEventListener('click', chkFormular);

//this prevents the default operation for a form submit which is a post and a reload
// we need to prohibit this because we have no data persistence through a backend
var form = document.getElementById("submitForm");
function handleForm(event) { event.preventDefault(); }
form.addEventListener('submit', handleForm);

var person1 = { short: "FL46", name: "Friedrich Lattermann", matrikelNummer: 366146 }
var person2 = { short: "TH93", name: "Tobias Hasse", matrikelNummer: 365893}
var person3 = { short: "HA34", name: "Hammam Abu Attieh", matrikelNummer: 358034 }
var person4 = { short: "NA20", name: "Niclas Altenkirch", matrikelNummer: 386520 }
var personArray = [person1, person2, person3, person4]

function checkUserInput(user, usage) {
  if (user.match(/^\S{2}\d{2}$/) == user && usage.match(/\d*/) == usage){
    for (i = 0; i < personArray.length; i++) {
      if (personArray[i].short == user) {
        return [true, personArray[i]];
      }
    }
    alert("Ihre Nutzerkennung ist nicht authorisiert");
  } else {
    alert("Bitte benutzen Sie das richtige Nutzerkennungs- und Verbrauchswertformat");
  }
  return false;
}

function chkFormular() {
  var user = document.Formular.Name.value;
  var usage = document.Formular.Verbrauch.value;
  if ( user != "" && usage != "" ) {
    var returnArray = checkUserInput(user, usage);
    if (!returnArray[0]) {
      return;
    }
    user = returnArray[1];
    currentTime = new Date();
    var table = document.getElementById("formDataTable");
    var row = table.insertRow(table.rows.length);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    var cell4 = row.insertCell(3);
    var cell5 = row.insertCell(4);

    var formattedTime = (currentTime.getDate() +"." + (currentTime.getMonth() + 1) + "." + currentTime.getFullYear( )
                          + " " + currentTime.getHours() +":"+ currentTime.getMinutes() +":"+ currentTime.getSeconds())
    cell1.innerHTML = document.Formular.Name.value
    cell2.innerHTML = user.name
    cell3.innerHTML = user.matrikelNummer
    cell4.innerHTML = document.Formular.Verbrauch.value
    cell5.innerHTML = formattedTime
  }else{
    alert("Bitte füllen sie beide Zeilen aus!");
  }
}
