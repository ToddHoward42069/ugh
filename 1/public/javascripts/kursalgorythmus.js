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

let setAnzeige1 = function(inhalt) {
  if (anzeige1 != undefined) {
    let i = document.createElement('p');
    i.innerHTML = inhalt;
    anzeige1.appendChild(i);
  }
}
let setAnzeige2 = function(inhalt) {
    if (anzeige2 != undefined) {
    let i = document.createElement('p');
    i.innerHTML = inhalt;
    anzeige2.appendChild(i);
  }
}
console.log("KA: setAnzeige Funktion erstellt");

if (deutschClicksCount > matheClicksCount && deutschClicksCount > gupClicksCount) {
  setAnzeige1("Deutsch");
} else if (matheClicksCount > deutschClicksCount && matheClicksCount > gupClicksCount) {
  setAnzeige1("Mathe");
} else if (gupClicksCount > deutschClicksCount && gupClicksCount > matheClicksCount) {
  setAnzeige1("GuP");
} else if (deutschClicksCount < matheClicksCount && deutschClicksCount < gupClicksCount) {
  setAnzeige1("Mathe und GuP")
} else if (gupClicksCount < matheClicksCount && gupClicksCount < deutschClicksCount) {
  setAnzeige1("Deutsch und Mathe")
} else if (matheClicksCount < deutschClicksCount && matheClicksCount < gupClicksCount) {
  setAnzeige1("Deutsch und GuP")
} else {
  setAnzeige1("Du machst alle Fächer gleich viel!")
}
if (deutschClicksCount < matheClicksCount && deutschClicksCount < gupClicksCount) {
  setAnzeige2("Deutsch");
} else if (matheClicksCount < deutschClicksCount && matheClicksCount < gupClicksCount) {
  setAnzeige2("Mathe");
} else if (gupClicksCount < deutschClicksCount && gupClicksCount < matheClicksCount) {
  setAnzeige2("GuP");
} else if (deutschClicksCount > matheClicksCount && deutschClicksCount > gupClicksCount) {
  setAnzeige2("Mathe und GuP")
} else if (gupClicksCount > matheClicksCount && gupClicksCount > deutschClicksCount) {
  setAnzeige2("Deutsch und Mathe")
} else if (matheClicksCount > deutschClicksCount && matheClicksCount > gupClicksCount) {
  setAnzeige2("Deutsch und GuP")
} else {
  setAnzeige2("Du machst alle Fächer gleich viel!")
}

let clickReset = parseInt(localStorage.getItem("clickResetEnv")) || 0;
if (clickReset != 0) {
  localStorage.setItem("clickResetEnv", 0);
  localStorage.setItem("deutschClickCountEnv", 0);
  localStorage.setItem("gupClickCountEnv", 0);
  localStorage.setItem("matheClickCountEnv", 0);
}