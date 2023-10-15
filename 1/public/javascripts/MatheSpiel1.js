let answer = document.getElementById("answer");
let lives = document.getElementById("lives");
let score = document.getElementById("score");
let button = document.getElementById("submit");
let scoreInt = 0;
let livesInt = 3;

let submit = document.querySelector(".submitButtonMathe1").addEventListener("click", function () {
  if (answer.value == 1) {
    scoreInt += 1;
  } else {
    livesInt -= 1;
  }
  if (livesInt == 0) {
    scoreInt = 0;
    livesInt = 3;
  }
  
  lives.innerHTML = livesInt;
  score.innerHTML = scoreInt;
});