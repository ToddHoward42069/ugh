let loreImg = document.getElementById("lore-img")
let loreOut = document.getElementById("lore-output")

let choice1 = document.getElementById("choice1")
let choice2 = document.getElementById("choice2")
let choice3 = document.getElementById("choice3")

let sceneCode = "#"

let makeScene = function () {
  
  switch (sceneCode) {
    case "#":
      loreOut.innerHTML = "Welches Szenario möchtest du Spielen? Wähle aus den Kategorien aus."
      choice1.innerHTML = "Leben im Nationalsozalismus"
      choice2.innerHTML = "Der Beginn des 2. Weltkriegs"
      choice3.innerHTML = "Das Ende des 2. Weltkriegs"
      break;
    case "##1":
    case "##2":
    case "##3":
      loreOut.innerHTML = "Du hast das Szenario überlebt und durchgespielt! Gratulation!"
      choice1.innerHTML = "Yay"
      choice2.innerHTML = "Ist das gut?"
      choice3.innerHTML = "WAS ZUR HÖLLE HABE ICH GETAN?"
      break;
    case "#1":
      loreOut.innerHTML = "Welches Szenario möchtest du Spielen? Wähle aus."
      choice1.innerHTML = "1935-Das Nürnberger Rassengesetz"
      choice2.innerHTML = "1937-Hinrichtung von Demokraten"
      choice3.innerHTML = "Zurück"
      break;
    case "#2":
      loreOut.innerHTML = "Welches Szenario möchtest du Spielen? Wähle aus."
      choice1.innerHTML = "1938-Annexion Österreichs"
      choice2.innerHTML = "1939-Nichtangriffspakt und Invasion Polens"
      choice3.innerHTML = "Zurück"
      break;
    case "#3":
      loreOut.innerHTML = "Welches Szenario möchtest du Spielen? Wähle aus."
      choice1.innerHTML = "1945-Niederlage Deutschlands"
      choice2.innerHTML = "1945-Hiroshima"
      choice3.innerHTML = "Zurück"
      break;
    case "#13":
    case "#23":
    case "#33":
      sceneCode = "#"
      makeScene()
      break;
    case "delta":
    case "delta1":
    case "delta2":
    case "delta3":
      loreOut.innerHTML = "Blöde Idee. Jetzt bist du tot :(    Schade"
      choice1.innerHTML = "Aufgeben"
      choice2.innerHTML = "Aufgeben"
      choice3.innerHTML = "Aufgeben"
      break;
    case "#11":
      sceneCode = "a"
      makeScene()
      break;
    case "#12":
      sceneCode = "b"
      makeScene()
      break;
   case "#21":
    sceneCode = "c"
    makeScene()
    break;
  case "#22":
    sceneCode = "d"
    makeScene()
    break;
  case "#31":
    sceneCode = "e"
    makeScene()
    break;
  case "#32":
    sceneCode = "f"
    makeScene()
    break;
  case "b":
    loreOut.innerHTML = "Soldat: Wache! Begleite diese Sozi-Gefangene zur Exekution."
    choice1.innerHTML = "Folge dem Befehl"
    choice2.innerHTML = "Widersetze dich"
    choice3.innerHTML = "Renn weg"
    break;
  case "b1":
    loreOut.innerHTML = "Soldat: Diese Verbrecherin unterstützt die Sozis und hat einem Judenkind geholfen."
    choice1.innerHTML = "Versuche, sie zu befreien"
    choice2.innerHTML = "Appelliere an den Soldaten"
    choice3.innerHTML = "Gehorche und begleite die Gefangene"
    break;
  case "b11":
    loreOut.innerHTML = "Du versuchst, die Gefangene zu befreien, aber der Soldat entdeckt dich und greift an."
    choice1.innerHTML = "Verteidige dich"
    choice2.innerHTML = "Fliehe"
    choice3.innerHTML = "Versuche zu verhandeln"
    sceneCode = "delta"
    break;
  case "b111":
    loreOut.innerHTML = "Ein Kampf bricht aus, du gewinnst und kannst fliehen."
    choice1.innerHTML = "Verstecke dich"
    choice2.innerHTML = "Suche Hilfe"
    choice3.innerHTML = "..."
    break;
    case "#21":
    sceneCode = "c"
    makeScene()
    break;
  case "#22":
    sceneCode = "d"
    makeScene()
    break;
  case "#31":
    sceneCode = "e"
    makeScene()
    break;
  case "#32":
    sceneCode = "f"
    makeScene()
    break;
  case "b":
    loreOut.innerHTML = "Soldat: Wache! Begleite diese Sozi-Gefangene zur Exekution."
    choice1.innerHTML = "Folge dem Befehl"
    choice2.innerHTML = "Widersetze dich"
    choice3.innerHTML = "Renn weg"
    break;
  case "b1":
    loreOut.innerHTML = "Soldat: Diese Verbrecherin unterstützt die Sozis und hat einem Judenkind geholfen."
    choice1.innerHTML = "Versuche, sie zu befreien"
    choice2.innerHTML = "Appelliere an den Soldaten"
    choice3.innerHTML = "Gehorche und begleite die Gefangene"
    break;
  case "b11":
    loreOut.innerHTML = "Du versuchst, die Gefangene zu befreien, aber der Soldat entdeckt dich und greift an."
    choice1.innerHTML = "Verteidige dich"
    choice2.innerHTML = "Fliehe"
    choice3.innerHTML = "Versuche zu verhandeln"
    sceneCode = "delta"
    break;
  case "b111":
    loreOut.innerHTML = "Ein Kampf bricht aus, du gewinnst und kannst fliehen."
    choice1.innerHTML = "Verstecke dich"
    choice2.innerHTML = "Suche Hilfe"
    choice3.innerHTML = "..."
    break;
    case "b112":
    loreOut.innerHTML = "Flucht gelungen, aber die Gefangene bleibt zurück."
    choice1.innerHTML = "Kehre zurück und helfe ihr"
    choice2.innerHTML = "Fliehe weiter"
    choice3.innerHTML = "..."
    break;
  case "b12":
    loreOut.innerHTML = "Du appellierst an den Soldaten, aber er bleibt unnachgiebig."
    choice1.innerHTML = "Versuche, ihn zu überzeugen"
    choice2.innerHTML = "Akzeptiere die Situation"
    choice3.innerHTML = "..."
    break;
  case "b121":
    loreOut.innerHTML = "Du versuchst ihn zu überzeugen, aber ohne Erfolg."
    choice1.innerHTML = "Ergib dich"
    choice2.innerHTML = "Versuche es erneut"
    choice3.innerHTML = "..."
    sceneCode = "delta"
    break;
  case "b13":
    loreOut.innerHTML = "Soldat: Dafür muss sie sterben! Ich lasse dich ihren Weg in die Hölle wählen."
    choice1.innerHTML = "Hängen"
    choice2.innerHTML = "Erschießen"
    choice3.innerHTML = "Zu Tode foltern"
    break;
  case "b131":
  case "b132":
  case "b133":
    loreOut.innerHTML = "Du entscheidest dich dafür, sie zu töten."
    choice1.innerHTML = "Vollstrecke das Urteil"
    choice2.innerHTML = "Zögere und überdenke die Entscheidung"
    choice3.innerHTML = "Verweigere die Ausführung"
    sceneCode = "b131"
    break;
  case "b1311":
    loreOut.innerHTML = "Du vollstreckst das Urteil. Die Gefangene stirbt."
    choice1.innerHTML = "..."
    choice2.innerHTML = "..."
    choice3.innerHTML = "..."
    sceneCode = "##"
    break;
  case "b1312":
    loreOut.innerHTML = "Du zögerst und überdenkst die Entscheidung."
    choice1.innerHTML = "Bleibe standhaft"
    choice2.innerHTML = "Ändere deine Meinung"
    choice3.innerHTML = "..."
    break;
  case "b13121":
    loreOut.innerHTML = "Du bleibst standhaft und vollstreckst letztendlich das Urteil."
    choice1.innerHTML = "Fühle Reue"
    choice2.innerHTML = "Akzeptiere die Entscheidung"
    choice3.innerHTML = "..."
    sceneCode = "##"
    break;
  case "b13122":
    loreOut.innerHTML = "Du änderst deine Meinung und entscheidest dich, sie zu befreien."
    choice1.innerHTML = "Begleite sie zur Flucht"
    choice2.innerHTML = "Bereue die Entscheidung"
    choice3.innerHTML = "..."
    sceneCode = "delta"
    break;
  case "b2":
  case "b3":
  case "b123":
  case "b122":
  case "b1313":
  case "b13123":
    sceneCode = "delta"
    break;
  default:
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
