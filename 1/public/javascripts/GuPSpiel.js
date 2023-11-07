let loreImg = document.getElementById("lore-img")
let loreOut = document.getElementById("lore-output")

let choice1 = document.getElementById("choice1")
let choice2 = document.getElementById("choice2")
let choice3 = document.getElementById("choice3")


let scenario = 0
let tookchoice1 = 0
let tookchoice2 = 0
let tookchoice3 = 0
let sceneCode = [scenario, tookchoice1, tookchoice2, tookchoice3]

let makeScene = function () {
  sceneCode = [scenario, tookchoice1, tookchoice2, tookchoice3]
  
  if (sceneCode == [0,0,0,0]) {
    loreOut.innerHTML = "Welches Szenario möchtest du Spielen? Wähle aus den Kategorien aus."
    choice1.innerHTML = "Leben im Nationalsozalismus"
    choice2.innerHTML = "Der Beginn des 2. Weltkriegs"
    choice3.innerHTML = "Das Ende des 2. Weltkriegs"
  } else if (sceneCode == [0,1,0,0]) {
    loreOut.innerHTML = "Welches Szenario möchtest du Spielen? Wähle aus."
    choice1.innerHTML = "1935-Das Nürnberger Rassengesetz"
    choice2.innerHTML = "1937-Hinrichtung von Demokraten"
    choice3.innerHTML = "Zurück"
  } else if (sceneCode == [0,0,1,0]) {
    loreOut.innerHTML = "Welches Szenario möchtest du Spielen? Wähle aus."
    choice1.innerHTML = "1938-Annexion Österreichs"
    choice2.innerHTML = "1939-Nichtangriffspakt und Invasion Polens"
    choice3.innerHTML = "Zurück"
  } else if (sceneCode == [0,0,0,1]) {
    loreOut.innerHTML = "Welches Szenario möchtest du Spielen? Wähle aus."
    choice1.innerHTML = "1945-Niederlage Deutschlands"
    choice2.innerHTML = "1945-Hiroshima"
    choice3.innerHTML = "Zurück"
  } else if (sceneCode == [0,1,0,1] || sceneCode == [0,0,1,1] || sceneCode == [0,0,0,2]) {
    scenario = 0
    tookchoice1 = 0
    tookchoice2 = 0
    tookchoice3 = 0
    makeScene()
  }
}

makeScene()

choice1.addEventListener("click", function () {
  tookchoice1 += 1 
  makeScene()
})
choice2.addEventListener("click", function () {
  tookchoice2 += 1 
  makeScene()
})
choice3.addEventListener("click", function () {
  tookchoice3 += 1 
  makeScene()
})