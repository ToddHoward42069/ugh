const answer = document.getElementById("answer");
const lives = document.getElementById("lives");
const score = document.getElementById("score");
const question = document.getElementById("question");
const button = document.getElementById("submit");
let scoreInt = 0;
let livesInt = 3;
let difficulty = "incremental";

// Constants for random number generation
const EASY_MAX = 20;
const HARD_MAX = 100;
const INCREMENTAL_MAX = 10;

function generateRandomQuestion() {
  let operand1, operand2, operator, answer;

  switch (difficulty) {
    case "incremental":
      operand1 = Math.floor(Math.random() * INCREMENTAL_MAX) + 1;
      operand2 = Math.floor(Math.random() * INCREMENTAL_MAX) + 1;
      operator = ['+', '-', '*', '/'][Math.floor(Math.random() * 4)];
      break;
    case "easy":
      operand1 = Math.floor(Math.random() * EASY_MAX) + 1;
      operand2 = Math.floor(Math.random() * operand1) + 1;
      operator = ['+', '-'][Math.floor(Math.random() * 2)];
      break;
    case "hard":
      operand1 = Math.floor(Math.random() * HARD_MAX) + 1;
      operand2 = Math.floor(Math.random() * operand1) + 1;
      operator = ['+', '-', '*', '/'][Math.floor(Math.random() * 4)];
      break;
    default:
      break;
  }

  switch (operator) {
    case '+':
      answer = operand1 + operand2;
      break;
    case '-':
      answer = operand1 - operand2;
      break;
    case '*':
      answer = operand1 * operand2;
      break;
    case '/':
      operand2 = operand2 === 0 ? 1 : operand2;
      answer = operand1 / operand2;
      answer = Math.round(answer * 100) / 100;
      break;
    default:
      break;
  }

  const question = `${operand1} ${operator} ${operand2}`;
  return { question, answer };
}

let currentQuestion = generateRandomQuestion();

function displayRandomQuestion() {
    currentQuestion = generateRandomQuestion();
    question.textContent = currentQuestion.question;
}

displayRandomQuestion();

button.addEventListener("click", () => {
    const playerAnswer = parseFloat(answer.value);
    const correctAnswer = parseFloat(currentQuestion.answer);

    if (isNaN(playerAnswer)) {
        alert("Please enter a valid number");
        return;
    }

    if (playerAnswer === correctAnswer) {
        scoreInt += 1;
        displayRandomQuestion();
    } else {
        livesInt -= 1;
        if (livesInt === 0) {
            gameLost();
        }
    }

    answer.value = "";
    lives.textContent = "Lives: " + livesInt;
    score.textContent = "Score: " + scoreInt;
});

const restartButton = document.getElementById("restart");
restartButton.addEventListener("click", () => {
    scoreInt = 0;
    livesInt = 3;
    displayRandomQuestion();
    answer.value = "";
    lives.textContent = "Lives: " + livesInt;
    score.textContent = "Score: " + scoreInt;
    button.disabled = false;
});

function gameLost() {
    question.textContent = "Game Over";
    button.disabled = true;
}

const difficultyButtons = {
  "incremental-btn": "incremental",
  "easy-btn": "easy",
  "hard-btn": "hard"
};

Object.keys(difficultyButtons).forEach(buttonId => {
  const button = document.getElementById(buttonId);
  button.addEventListener("click", () => {
      difficulty = difficultyButtons[buttonId];
      Object.values(difficultyButtons).forEach(id => document.getElementById(id).classList.remove("selected"));
      button.classList.add("selected");
      displayRandomQuestion();
  });
});

const settingsButton = document.getElementById("settings-btn");
const settingsMenu = document.getElementById("settings-menu");

settingsButton.addEventListener("click", () => {
    settingsMenu.style.display = (settingsMenu.style.display === "none") ? "block" : "none";
});

window.addEventListener("click", (event) => {
    if (!settingsButton.contains(event.target) && !settingsMenu.contains(event.target)) {
        settingsMenu.style.display = "none";
    }
});

answer.addEventListener("keypress", (event) => {
    if (event.keyCode === 13) {
        button.click();
    }
});
