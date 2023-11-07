let loreImg = document.getElementById("lore-img")
let loreOut = document.getElementById("lore-output")

let choice1 = document.getElementById("choice1")
let choice2 = document.getElementById("choice2")
let choice3 = document.getElementById("choice3")

let sceneCode = "#"

let makeScene = function () {
  
  if (sceneCode == "#") {
    loreOut.innerHTML = "Welches Szenario möchtest du Spielen? Wähle aus den Kategorien aus."
    choice1.innerHTML = "Leben im Nationalsozalismus"
    choice2.innerHTML = "Der Beginn des 2. Weltkriegs"
    choice3.innerHTML = "Das Ende des 2. Weltkriegs"
  } else if (sceneCode == "##1" || sceneCode == "##2" || sceneCode == "##3") {
    loreOut.innerHTML = "Du hast das Szenario überlebt und durchgespielt! Gratulation!"
    choice1.innerHTML = "Yay"
    choice2.innerHTML = "Ist das gut?"
    choice3.innerHTML = "WAS ZUR HÖLLE HABE ICH GETAN?"
  } else if (sceneCode == "#1") {
    loreOut.innerHTML = "Welches Szenario möchtest du Spielen? Wähle aus."
    choice1.innerHTML = "1935-Das Nürnberger Rassengesetz"
    choice2.innerHTML = "1937-Hinrichtung von Demokraten"
    choice3.innerHTML = "Zurück"
  } else if (sceneCode == "#2") {
    loreOut.innerHTML = "Welches Szenario möchtest du Spielen? Wähle aus."
    choice1.innerHTML = "1938-Annexion Österreichs"
    choice2.innerHTML = "1939-Nichtangriffspakt und Invasion Polens"
    choice3.innerHTML = "Zurück"
  } else if (sceneCode == "#3") {
    loreOut.innerHTML = "Welches Szenario möchtest du Spielen? Wähle aus."
    choice1.innerHTML = "1945-Niederlage Deutschlands"
    choice2.innerHTML = "1945-Hiroshima"
    choice3.innerHTML = "Zurück"
  } else if (sceneCode == "#13" || sceneCode == "#23" || sceneCode == "#33") {
    sceneCode = "#"
    makeScene()
  } else if (sceneCode == "b2" || sceneCode == "b3" || sceneCode == "b11") {
    loreOut.innerHTML = "Blöde Idee. Jetzt bist du tot :(    Schade"
    choice1.innerHTML = "Aufgeben"
    choice2.innerHTML = "Aufgeben"
    choice3.innerHTML = "Aufgeben"
  } else if (sceneCode == "#11") {
    sceneCode = "a"
    makeScene()
  } else if (sceneCode == "#12") {
    sceneCode = "b"
    makeScene()
  } else if (sceneCode == "#21") {
    sceneCode = "c"
    makeScene()
  } else if (sceneCode == "#22") {
    sceneCode = "d"
    makeScene()
  } else if (sceneCode == "#31") {
    sceneCode = "e"
    makeScene()
  } else if (sceneCode == "#32") {
    sceneCode = "f"
    makeScene()
  } else if (sceneCode == "b") {
    loreOut.innerHTML = "Soldat: Wache! Begleite diese Sozi-Gefangene zur Exekution."
    choice1.innerHTML = "Folge dem Befehl"
    choice2.innerHTML = "Widersetze dich"
    choice3.innerHTML = "Renn weg"
  } else if (sceneCode == "b1") {
    loreOut.innerHTML = "Soldat: Diese Verbrecherin unterstützt die Sozis und hat einem Judenkind geholfen."
    choice1.innerHTML = "Versuche, sie zu befreien"
    choice2.innerHTML = "..."
    choice3.innerHTML = "..."
  } else if (sceneCode == "b12" || sceneCode == "b13") {
    loreOut.innerHTML = "Soldat: Dafür muss sie sterben! Ich lasse dich ihren Weg in die Hölle wählen."
    choice1.innerHTML = "Hängen"
    choice2.innerHTML = "Erschießen"
    choice3.innerHTML = "Zu Tode foltern"
  } else if (sceneCode == "b121" || sceneCode == "b122" || sceneCode == "b123" || sceneCode == "b131" || sceneCode == "b132" || sceneCode == "b133") {
    loreOut.innerHTML = "Soldat: Wenn du meinst." //frag nicht
    choice1.innerHTML = "..."
    choice2.innerHTML = "..."
    choice3.innerHTML = "Flüster: Ach du meine Güte."
    sceneCode = "##"
  } else {
    sceneCode = "#"
    makeScene()
  }
}

makeScene()

choice1.addEventListener("click", function () {
  sceneCode += "1"
  makeScene()
})
choice2.addEventListener("click", function () {
  sceneCode += "2" 
  makeScene()
})
choice3.addEventListener("click", function () {
  sceneCode += "3" 
  makeScene()
})