let answer = document.getElementById("answer");
let lives = document.getElementById("lives");
let score = document.getElementById("score");
let question = document.getElementById("question");
let button = document.getElementById("submit");
let scoreInt = 0;
let livesInt = 3;
let difficulty = "incremental";

// Function to generate random questions based on the selected difficulty level
function generateRandomQuestion() {
    let operand1, operand2, operator, answer;

    switch (difficulty) {
        case "incremental":
            operand1 = Math.floor(Math.random() * 10) + 1;
            operand2 = Math.floor(Math.random() * 10) + 1;
            operator = ['+', '-', '*', '/'][Math.floor(Math.random() * 4)];
            break;
        case "easy":
            operand1 = Math.floor(Math.random() * 10) + 1;
            operand2 = Math.floor(Math.random() * 10) + 1;
            operator = ['+', '-'][Math.floor(Math.random() * 2)];
            break;
        case "hard":
            operand1 = Math.floor(Math.random() * 100) + 1;
            operand2 = Math.floor(Math.random() * 100) + 1;
            operator = ['+', '-', '*', '/'][Math.floor(Math.random() * 4)];
            break;
        default:
            break;
    }

    // Calculate the answer based on the generated question
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
            if (operand2 === 0) {
                operand2 = 1; // Prevent division by zero
            }
            answer = operand1 / operand2;
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

button.addEventListener("click", function () {
    const playerAnswer = parseFloat(answer.value);
    const correctAnswer = parseFloat(currentQuestion.answer);

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
restartButton.addEventListener("click", function () {
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
    // Additional actions after game over
}

const incrementalButton = document.getElementById("incremental-btn");
const easyButton = document.getElementById("easy-btn");
const hardButton = document.getElementById("hard-btn");

// Function to remove the "selected" class from all difficulty buttons
function clearSelectedDifficulty() {
    const difficultyButtons = document.querySelectorAll(".difficulty-btn");
    difficultyButtons.forEach(button => {
        button.classList.remove("selected");
    });
}

incrementalButton.addEventListener("click", function () {
difficulty = "incremental";
clearSelectedDifficulty();
incrementalButton.classList.add("selected");
displayRandomQuestion();
});

easyButton.addEventListener("click", function () {
difficulty = "easy";
clearSelectedDifficulty();
easyButton.classList.add("selected");
displayRandomQuestion();
});

hardButton.addEventListener("click", function () {
difficulty = "hard";
clearSelectedDifficulty();
hardButton.classList.add("selected");
displayRandomQuestion();
});

const settingsButton = document.getElementById("settings-btn");
const settingsMenu = document.getElementById("settings-menu");

settingsButton.addEventListener("click", function () {
settingsMenu.style.display = (settingsMenu.style.display === "none") ? "block" : "none";
});

// Close the settings menu when clicking outside of it
window.addEventListener("click", function (event) {
if (!settingsButton.contains(event.target) && !settingsMenu.contains(event.target)) {
  settingsMenu.style.display = "none";
}
});

answer.addEventListener("keypress", function (event) {
if (event.keyCode === 13) { // 13 is the key code for Enter
    button.click();
}
});