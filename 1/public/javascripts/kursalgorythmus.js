console.log("Starte Kursalgorythmus");

let anzeige1 = document.getElementById("empfohlene kurse like");
let anzeige2 = document.getElementById("empfohlene kurse zu wenig");
console.log("KA: Erhalte Anzeigen");

let deutschClicksCount = parseInt(localStorage.getItem("deutschClickCountEnv")) || 0;
let gupClicksCount = parseInt(localStorage.getItem("gupClickCountEnv")) || 0;
let matheClicksCount = parseInt(localStorage.getItem("matheClickCountEnv")) || 0;
console.log("KA: Erhalte LocalStorage");

let clicksDeu = document.querySelector(".deutschClicks").addEventListener("click", function () {
    deutschClicksCount += 1;
    localStorage.setItem("deutschClickCountEnv", deutschClicksCount);
});

let clicksGup = document.querySelector(".gupClicks").addEventListener("click", function () {
    gupClicksCount += 1;
    localStorage.setItem("gupClickCountEnv", gupClicksCount);
});

let clicksMa = document.querySelector(".matheClicks").addEventListener("click", function () {
    matheClicksCount += 1;
    localStorage.setItem("matheClickCountEnv", matheClicksCount);
});
console.log("KA: Klick Event definiert");

console.log("deutschClicksCount = ", deutschClicksCount);
console.log("gupClicksCount = ", gupClicksCount);
console.log("matheClicksCount = ", matheClicksCount);

var setAnzeige1 = function(inhalt) {
  var i = document.createElement('p');
  i.innerHTML = "inhalt";
}
var setAnzeige2 = function(inhalt) {
  var A2 = anzeige2.appendChild(inhalt);
}
console.log("KA: setAnzeige Funktion erstellt");

setAnzeige1("lol klappt");