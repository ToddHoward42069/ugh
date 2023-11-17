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
  } else if (sceneCode == "delta") {
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
    choice2.innerHTML = "Appelliere an den Soldaten"
    choice3.innerHTML = "Gehorche und begleite die Gefangene"
  } else if (sceneCode == "b11") {
    loreOut.innerHTML = "Du versuchst, die Gefangene zu befreien, aber der Soldat entdeckt dich und greift an."
    choice1.innerHTML = "Verteidige dich"
    choice2.innerHTML = "Fliehe"
    choice3.innerHTML = "Versuche zu verhandeln"
    sceneCode = "delta"
  } else if (sceneCode == "b111") {
    loreOut.innerHTML = "Ein Kampf bricht aus, du gewinnst und kannst fliehen."
    choice1.innerHTML = "Verstecke dich"
    choice2.innerHTML = "Suche Hilfe"
    choice3.innerHTML = "..."
  } else if (sceneCode == "b112") {
    loreOut.innerHTML = "Flucht gelungen, aber die Gefangene bleibt zurück."
    choice1.innerHTML = "Kehre zurück und helfe ihr"
    choice2.innerHTML = "Fliehe weiter"
    choice3.innerHTML = "..."
  } else if (sceneCode == "b12") {
    loreOut.innerHTML = "Du appellierst an den Soldaten, aber er bleibt unnachgiebig."
    choice1.innerHTML = "Versuche, ihn zu überzeugen"
    choice2.innerHTML = "Akzeptiere die Situation"
    choice3.innerHTML = "..."
  } else if (sceneCode == "b121") {
    loreOut.innerHTML = "Du versuchst ihn zu überzeugen, aber ohne Erfolg."
    choice1.innerHTML = "Ergib dich"
    choice2.innerHTML = "Versuche es erneut"
    choice3.innerHTML = "..."
  } else if (sceneCode == "b1211") {
    loreOut.innerHTML = "Du gibst dich ergeben und wirst gefangen genommen."
    choice1.innerHTML = "..."
    choice2.innerHTML = "..."
    choice3.innerHTML = "..."
  } else if (sceneCode == "b1212") {
    loreOut.innerHTML = "Du versuchst erneut, den Soldaten zu überzeugen, und er zeigt Anzeichen von Nachdenklichkeit."
    choice1.innerHTML = "Weiter überzeugen"
    choice2.innerHTML = "Warte auf eine Reaktion"
    choice3.innerHTML = "..."
  } else if (sceneCode == "b12121") {
    loreOut.innerHTML = "Der Soldat scheint nachzugeben und lässt die Gefangene frei."
    choice1.innerHTML = "Dankbar sein"
    choice2.innerHTML = "Misstraue seiner Absicht"
    choice3.innerHTML = "..."
  } else if (sceneCode == "b12122") {
    loreOut.innerHTML = "Der Soldat zeigt Bedauern, während er die Gefangene zur Exekution führt."
    choice1.innerHTML = "Beobachte die Szene"
    choice2.innerHTML = "Versuche einzugreifen"
    choice3.innerHTML = "..."
   } else if (sceneCode == "b13") {
    loreOut.innerHTML = "Soldat: Dafür muss sie sterben! Ich lasse dich ihren Weg in die Hölle wählen."
    choice1.innerHTML = "Hängen"
    choice2.innerHTML = "Erschießen"
    choice3.innerHTML = "Zu Tode foltern"
   } else if (sceneCode == "b131") {
    loreOut.innerHTML = "Du entscheidest dich dafür, sie zu hängen."
    choice1.innerHTML = "Vollstrecke das Urteil"
    choice2.innerHTML = "Zögere und überdenke die Entscheidung"
    choice3.innerHTML = "Verweigere die Ausführung"
   } else if (sceneCode == "b1311") {
    loreOut.innerHTML = "Du vollstreckst das Urteil. Die Gefangene stirbt."
    choice1.innerHTML = "..."
    choice2.innerHTML = "..."
    choice3.innerHTML = "..."
   } else if (sceneCode == "b1312") {
    loreOut.innerHTML = "Du zögerst und überdenkst die Entscheidung."
    choice1.innerHTML = "Bleibe standhaft"
    choice2.innerHTML = "Ändere deine Meinung"
    choice3.innerHTML = "..."
   } else if (sceneCode == "b13121") {
    loreOut.innerHTML = "Du bleibst standhaft und vollstreckst letztendlich das Urteil."
    choice1.innerHTML = "Fühle Reue"
    choice2.innerHTML = "Akzeptiere die Entscheidung"
    choice3.innerHTML = "..."
   } else if (sceneCode == "b13122") {
    loreOut.innerHTML = "Du änderst deine Meinung und entscheidest dich, sie zu befreien."
    choice1.innerHTML = "Begleite sie zur Flucht"
    choice2.innerHTML = "Bereue die Entscheidung"
    choice3.innerHTML = "..."
   } else if (sceneCode == "b132") {
    loreOut.innerHTML = "Du entscheidest dich dafür, sie zu erschießen."
    choice1.innerHTML = "Führe die Exekution durch"
    choice2.innerHTML = "Zweifle an der Entscheidung"
    choice3.innerHTML = "Verweigere die Ausführung"
   } else if (sceneCode == "b1321") {
    loreOut.innerHTML = "Du führst die Exekution durch. Die Gefangene ist tot."
    choice1.innerHTML = "..."
    choice2.innerHTML = "..."
    choice3.innerHTML = "..."
   } else if (sceneCode == "b1322") {
    loreOut.innerHTML = "Du zweifelst an deiner Entscheidung und zögerst."
    choice1.innerHTML = "Halte an deiner Entscheidung fest"
    choice2.innerHTML = "Ändere die Entscheidung"
    choice3.innerHTML = "..."
   } else if (sceneCode == "b13221") {
    loreOut.innerHTML = "Du behältst deine Entscheidung bei und führst die Exekution durch."
    choice1.innerHTML = "Empfinde Reue"
    choice2.innerHTML = "Akzeptiere die Konsequenzen"
    choice3.innerHTML = "..."
   } else if (sceneCode == "b13222") {
    loreOut.innerHTML = "Du änderst deine Meinung und entscheidest dich, sie freizulassen."
    choice1.innerHTML = "Helfe ihr bei der Flucht"
    choice2.innerHTML = "Bereue deine Entscheidung"
    choice3.innerHTML = "..."
   } else if (sceneCode == "b133") {
    loreOut.innerHTML = "Du entscheidest dich dafür, sie zu foltern, bis zum Tod."
    choice1.innerHTML = "Führe die grausame Tat aus"
    choice2.innerHTML = "Empfinde Schuldgefühle"
    choice3.innerHTML = "Verweigere die Ausführung"
   } else if (sceneCode == "b1331") {
    loreOut.innerHTML = "Du führst die grausame Tat aus. Die Gefangene stirbt."
    choice1.innerHTML = "..."
    choice2.innerHTML = "..."
    choice3.innerHTML = "..."
   } else if (sceneCode == "b1332") {
    loreOut.innerHTML = "Du empfindest Schuldgefühle und zögerst."
    choice1.innerHTML = "Setze die Folter fort"
    choice2.innerHTML = "Beende die Folter"
    choice3.innerHTML = "..."
   } else if (sceneCode == "b13321") {
    loreOut.innerHTML = "Du setzt die Folter fort bis zum Tod."
    choice1.innerHTML = "Fühle Reue"
    choice2.innerHTML = "Akzeptiere die Konsequenzen"
    choice3.innerHTML = "..."
   } else if (sceneCode == "b13322") {
    loreOut.innerHTML = "Du beendest die Folter und empfindest tiefe Schuldgefühle."
    choice1.innerHTML = "Bereue die Entscheidung"
    choice2.innerHTML = "Finde eine Möglichkeit zur Wiedergutmachung"
    choice3.innerHTML = "..."
    sceneCode = "##"
  } else if (sceneCode == "b2" || sceneCode = "b3") {
    sceneCode = "delta"
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
