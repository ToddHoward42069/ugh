document.write("Algorythmus startet ");

let anzeige1 = document.getElementById("empfohlene kurse like");
let anzeige2 = document.getElementById("empfohlene kurse zu wenig");
document.write("Anzeigen erhalten   ")

let deutschClicksCount = parseInt(localStorage.getItem("deutschClickCountEnv")) || 0;
let gupClicksCount = parseInt(localStorage.getItem("gupClickCountEnv")) || 0;
let matheClicksCount = parseInt(localStorage.getItem("matheClickCountEnv")) || 0;

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

document.write("Env erhalten  ");

document.write(deutschClicksCount, "  ");
document.write(gupClicksCount, "  ");
document.write(matheClicksCount, "  ");