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

  case "a":
    loreOut.innerHTML = "Du bist ein jüdisches Kind auf dem Schulweg und wirst von einer Gruppe älterer Kinder diskriminiert.";
    choice1.innerHTML = "Diskutiere mit den Jugendlichen";
    choice2.innerHTML = "Ignoriere sie und gehe weiter";
    choice3.innerHTML = "Suche Hilfe bei einer Erwachsenen Person";
    break;
  case "a1":
    loreOut.innerHTML = "Du versuchst, mit den Jugendlichen zu diskutieren, aber sie sind unerbittlich.";
    choice1.innerHTML = "Erkläre ihnen die Unfairness ihrer Diskriminierung";
    choice2.innerHTML = "Lasse sie in ihrem Glauben und gehe weiter";
    choice3.innerHTML = "Suche Hilfe bei einer Erwachsenen Person";
    break;
  case "a11":
    loreOut.innerHTML = "Du erklärst ihnen, warum ihre Diskriminierung unfair ist, aber sie hören nicht zu.";
    choice1.innerHTML = "Versuche weiter zu diskutieren";
    choice2.innerHTML = "Lasse sie in ihrem Glauben und gehe weiter";
    choice3.innerHTML = "Suche Hilfe bei einer Erwachsenen Person";
    break;
  case "a12":
  case "a13":
    sceneCode = "a2";
    makeScene();
    break;
  case "a2":
    loreOut.innerHTML = "Du triffst auf eine ältere Dame, die nicht viel von den Nazis hält.";
    choice1.innerHTML = "Erzähle ihr von deiner Begegnung mit den Jugendlichen";
    choice2.innerHTML = "Frage sie nach ihrer Meinung zu den Rassengesetzen";
    choice3.innerHTML = "Verabschiede dich und gehe weiter";
    break;
  case "a21":
    loreOut.innerHTML = "Die Dame ist empört über das Verhalten der Jugendlichen und erklärt dir mehr über die Rassengesetze.";
    choice1.innerHTML = "Danke ihr für die Informationen";
    choice2.innerHTML = "Frage sie nach ihrer Meinung zu den Nationalsozialisten";
    choice3.innerHTML = "Verabschiede dich und gehe weiter";
    break;
  case "a22":
    loreOut.innerHTML = "Die Dame erklärt dir ihre Abneigung gegen die Nationalsozialisten und ihre Politik.";
    choice1.innerHTML = "Danke ihr für das Gespräch";
    choice2.innerHTML = "Frage sie nach ihrer Meinung zu den Rassengesetzen";
    choice3.innerHTML = "Verabschiede dich und gehe weiter";
    break;
  case "a23":
    sceneCode = "##1";
    makeScene();
    break;
  case "a211":
  case "a212":
  case "a221":
  case "a222":
    sceneCode = "##1";
    makeScene();
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
  
  case "c":
    loreOut.innerHTML = "Du bist ein Österreicher in einem gerade annektierten Dorf und triffst auf einen deutschen Soldaten.";
    choice1.innerHTML = "Beschwere dich über die Annexion";
    choice2.innerHTML = "Frage höflich, wie das Leben im Dritten Reich aussieht";
    choice3.innerHTML = "Gehe einfach weiter";
    break;
  case "c1":
    loreOut.innerHTML = "Der Soldat hört sich deine Beschwerden an, aber er scheint nicht besonders interessiert zu sein.";
    choice1.innerHTML = "Drücke deine Unzufriedenheit weiter aus";
    choice2.innerHTML = "Frage ihn nach den Regeln im Dritten Reich";
    choice3.innerHTML = "Verlasse das Gespräch";
    break;
  case "c11":
    loreOut.innerHTML = "Du drückst deine Unzufriedenheit weiter aus, aber der Soldat bleibt unbeeindruckt.";
    choice1.innerHTML = "Beende das Gespräch";
    choice2.innerHTML = "Frage ihn nach den Regeln im Dritten Reich";
    choice3.innerHTML = "Verlasse das Gespräch";
    break;
  case "c12":
  case "c13":
    sceneCode = "c2";
    makeScene();
    break;
  case "c2":
    loreOut.innerHTML = "Der Soldat erklärt dir, wie das Leben im Dritten Reich aussieht und was du als normaler Bürger beachten und tun solltest.";
    choice1.innerHTML = "Danke ihm für die Informationen";
    choice2.innerHTML = "Frage ihn nach seiner Meinung zur Annexion";
    choice3.innerHTML = "Verlasse das Gespräch";
    break;
  case "c21":
    loreOut.innerHTML = "Du dankst dem Soldaten für die Informationen. Er nickt und geht weiter.";
    choice1.innerHTML = "Gehe nach Hause";
    choice2.innerHTML = "Bleibe stehen und denke nach";
    choice3.innerHTML = "Verlasse das Gespräch";
    sceneCode = "##1";
    break;
  case "c22":
    loreOut.innerHTML = "Der Soldat zuckt mit den Schultern und sagt, dass er nur Befehle befolgt.";
    choice1.innerHTML = "Danke ihm für das Gespräch";
    choice2.innerHTML = "Bleibe stehen und denke nach";
    choice3.innerHTML = "Verlasse das Gespräch";
    sceneCode = "##1";
    break;
  case "c23":
    sceneCode = "##1";
    makeScene();
    break;
  case "c111":
  case "c112":
  case "c113":
    sceneCode = "##1";
    makeScene();
    break;
  
  case "d":
    loreOut.innerHTML = "Du bist ein normaler deutscher Bürger und triffst beim Spazierengehen auf einen Mann.";
    choice1.innerHTML = "Sprich über die Invasion Polens";
    choice2.innerHTML = "Frage ihn nach dem Nichtangriffspakt";
    choice3.innerHTML = "Gehe einfach weiter";
    break;
  case "d1":
    loreOut.innerHTML = "Der Mann erzählt von Gerüchten, dass die Invasion bereits im Nichtangriffspakt geplant wurde.";
    choice1.innerHTML = "Frage ihn nach mehr Details";
    choice2.innerHTML = "Zeige Skepsis gegenüber den Gerüchten";
    choice3.innerHTML = "Beende das Gespräch";
    break;
  case "d11":
    loreOut.innerHTML = "Er teilt weitere Gerüchte und Spekulationen, aber nichts Konkretes.";
    choice1.innerHTML = "Danke ihm für das Gespräch";
    choice2.innerHTML = "Zeige weiterhin Skepsis";
    choice3.innerHTML = "Beende das Gespräch";
    break;
  case "d12":
    loreOut.innerHTML = "Er verteidigt seine Ansichten, aber bietet keine weiteren Beweise an.";
    choice1.innerHTML = "Frage ihn nach mehr Details";
    choice2.innerHTML = "Danke ihm für das Gespräch";
    choice3.innerHTML = "Beende das Gespräch";
    break;
  case "d13":
    sceneCode = "##1";
    makeScene();
    break;
  case "d2":
    loreOut.innerHTML = "Er spricht über den Nichtangriffspakt und die damit verbundenen Gerüchte.";
    choice1.innerHTML = "Frage ihn nach der Invasion Polens";
    choice2.innerHTML = "Zeige Skepsis gegenüber den Gerüchten";
    choice3.innerHTML = "Beende das Gespräch";
    break;
  case "d21":
  case "d22":
    sceneCode = "d1";
    makeScene();
    break;
  case "d23":
    sceneCode = "##1";
    makeScene();
    break;
  case "d111":
  case "d112":
  case "d113":
  case "d121":
  case "d122":
  case "d123":
    sceneCode = "##1";
    makeScene();
    break;
 
  case "e":
    loreOut.innerHTML = "Du bist ein deutscher Bürger und sprichst mit einer Jüdin, die du die letzten zwei Jahre in deinem Haus versteckt hast.";
    choice1.innerHTML = "Erinnere dich an die Durchsuchung durch die Gestapo";
    choice2.innerHTML = "Verabschiede dich von ihr";
    choice3.innerHTML = "Frage sie nach ihren Zukunftsplänen";
    break;
  case "e1":
    loreOut.innerHTML = "Du erinnerst dich an die Durchsuchung durch die Gestapo und wie du es geschafft hast, die Jüdin zu verstecken.";
    choice1.innerHTML = "Teile deine Erinnerungen mit ihr";
    choice2.innerHTML = "Verabschiede dich von ihr";
    choice3.innerHTML = "Frage sie nach ihren Zukunftsplänen";
    break;
  case "e11":
    loreOut.innerHTML = "Ihr teilt eure Erinnerungen und Gefühle über die vergangenen Jahre.";
    choice1.innerHTML = "Verabschiede dich von ihr";
    choice2.innerHTML = "Frage sie nach ihren Zukunftsplänen";
    choice3.innerHTML = "Bleibe still und denke nach";
    break;
  case "e12":
  case "e13":
    sceneCode = "e2";
    makeScene();
    break;
  case "e2":
    loreOut.innerHTML = "Nachdem du dich von ihr verabschiedet hast, triffst du einen schwer kriegsgeschädigten Soldaten, der glücklich über das Ende des Krieges ist.";
    choice1.innerHTML = "Frage ihn nach seinen Erlebnissen im Krieg";
    choice2.innerHTML = "Zeige Mitgefühl für seine Verluste";
    choice3.innerHTML = "Verabschiede dich und gehe weiter";
    break;
  case "e21":
    loreOut.innerHTML = "Der Soldat erzählt dir von einigen Schlachten, unter anderem den Kämpfen in Westeuropa, der Operation Barbarossa und der Schlacht um Stalingrad, in der er seinen Arm und sein Auge verloren hat.";
    choice1.innerHTML = "Frage ihn nach seinen Gefühlen zu diesen Erlebnissen";
    choice2.innerHTML = "Zeige Mitgefühl für seine Verluste";
    choice3.innerHTML = "Verabschiede dich und gehe weiter";
    break;
  case "e211":
    loreOut.innerHTML = "Er teilt seine Gefühle und Gedanken über den Krieg und seine Erlebnisse.";
    choice1.innerHTML = "Danke ihm für das Gespräch";
    choice2.innerHTML = "Zeige Mitgefühl für seine Verluste";
    choice3.innerHTML = "Verabschiede dich und gehe weiter";
    break;
  case "e212":
  case "e213":
    sceneCode = "##1";
    makeScene();
    break;
  case "e22":
    loreOut.innerHTML = "Du zeigst Mitgefühl für seine Verluste und er dankt dir für deine Freundlichkeit.";
    choice1.innerHTML = "Frage ihn nach seinen Erlebnissen im Krieg";
    choice2.innerHTML = "Danke ihm für das Gespräch";
    choice3.innerHTML = "Verabschiede dich und gehe weiter";
    break;
  case "e221":
  case "e222":
  case "e223":
    sceneCode = "##1";
    makeScene();
    break;
  case "e23":
    sceneCode = "##1";
    makeScene();
    break;
  case "e111":
  case "e112":
  case "e113":
  case "e121":
  case "e122":
  case "e123":
    sceneCode = "##1";
    makeScene();
    break;
 
  case "f":
    loreOut.innerHTML = "Als junge Japanerin gehst du mit einem älteren Herren spazieren und unterhältst dich über den Angriff auf Pearl Harbor, als du einen Bomber der USA siehst.";
    choice1.innerHTML = "Höre auf den Rat des älteren Herrn und verstecke dich";
    choice2.innerHTML = "Ignoriere den Rat und bleibe stehen";
    choice3.innerHTML = "Laufe weg";
    break;
  case "f1":
    loreOut.innerHTML = "Du versteckst dich in einem nahen Haus. Wo genau möchtest du dich verstecken?";
    choice1.innerHTML = "Im Keller";
    choice2.innerHTML = "Im Erdgeschoss";
    choice3.innerHTML = "Im Obergeschoss";
    break;
  case "f11":
  case "f12":
    loreOut.innerHTML = "Du versteckst dich, aber die Atombombe explodiert und du stirbst sofort.";
    sceneCode = "delta";
    makeScene();
    break;
  case "f13":
    loreOut.innerHTML = "Du versteckst dich im Obergeschoss. Die Atombombe explodiert, aber du überlebst zunächst. Einige Zeit später stirbst du jedoch an zu hoher Radioaktivität.";
    sceneCode = "delta";
    makeScene();
    break;
  case "f2":
  case "f3":
    loreOut.innerHTML = "Du ignorierst den Rat des älteren Herrn oder versuchst wegzulaufen, aber die Atombombe explodiert und du stirbst sofort.";
    sceneCode = "delta";
    makeScene();
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
