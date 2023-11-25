(function() {
  const answer = document.getElementById("answer");
  const lives = document.getElementById("lives");
  const score = document.getElementById("score");
  const question = document.getElementById("question");
  const button = document.getElementById("submit");
  let scoreInt = 0;
  let livesInt = 3;
  let difficulty = "incremental";

  const EASY_MAX = 20;
  const HARD_MAX = 100;
  const INCREMENTAL_MAX = 20;
  const INCREMENTAL_STEP = 10; // Increase the max number every 10 points

  function getRandomNumber(max, min = 0, isDivisor = false, operand1 = 1) {
    let adjustedMax = max;
    if (difficulty === 'incremental') {
      adjustedMax = Math.max(max, INCREMENTAL_MAX + Math.floor(scoreInt / INCREMENTAL_STEP) * INCREMENTAL_STEP);
    }
    let num = Math.floor(Math.random() * (adjustedMax - min + 1) + min) % (max + 1);
    if (isDivisor) {
      while (operand1 % num !== 0) {
        num = Math.floor(Math.random() * (adjustedMax - min + 1) + min) % (max + 1);
      }
    }
    return num;
  }
  
  function getRandomOperator() {
    let operators;
    if (scoreInt >= 25) {
      operators = ['+', '-', '*', '/'];
    } else if (scoreInt >= 15) {
      operators = ['+', '-', '*', '/'];
    } else if (difficulty === 'incremental' && scoreInt >= 10) {
      operators = ['+', '-', '*', '/'];
    } else if (difficulty === 'easy') {
      operators = ['+', '-'];
    } else {
      operators = ['+', '-', '*', '/'];
    }    
    return operators[getRandomNumber(operators.length - 1)];
  }
  
  function generateRandomQuestion() {
    let operand1, operand2, operator, answer, operand3, operator2;  
  
    switch (difficulty) {
      case "incremental":
        operand1 = getRandomNumber(INCREMENTAL_MAX);
        operand2 = getRandomNumber(INCREMENTAL_MAX);
        break;
      case "easy":
        operand1 = getRandomNumber(EASY_MAX);
        operand2 = getRandomNumber(EASY_MAX);
        break;
      case "hard":
        operand1 = getRandomNumber(HARD_MAX);
        operand2 = getRandomNumber(HARD_MAX);
        break;
      default:
        break;
    }
  
    operator = getRandomOperator();
  
    if (operator === '/') {
      operand2 = getRandomNumber(Math.floor(operand1 / 2), 1, true, operand1);
      if (operand2 === 0) operand2 = 2; // Ensure operand2 is not zero
    } else if (operator === '-' && operand2 > operand1) {
      [operand1, operand2] = [operand2, operand1]; // Swap operands
    }
  
    if (scoreInt >= 25) {
      operator2 = getRandomOperator(); // Define operator2 before using it
      operand3 = getRandomNumber(operand1, 1, operator2 === '/');
      if (operator2 === '/' && operand3 === 0) operand3 = 2; // Ensure operand3 is not zero when operator2 is division
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
        answer = Math.round((operand1 / operand2) * 100) / 100;
        break;
      default:
        break;
    }
  
    if (scoreInt >= 25) {
      switch (operator2) {
        case '+':
          answer += operand3;
          break;
        case '-':
          answer -= operand3;
          break;
        case '*':
          answer *= operand3;
          break;
        case '/':
          answer = Math.round((answer / operand3) * 100) / 100;
          break;
        default:
          break;
      }
    }
  
    let questionText = `${operand1} ${operator} ${operand2}`;
    if (scoreInt >= 20) {
      questionText = `(${questionText})`;
    }
    if (scoreInt >= 25) {
      questionText += ` ${operator2} ${operand3}`;
    }
    return { question: questionText, answer };
  }
  
  let currentQuestion = generateRandomQuestion();

  function displayRandomQuestion() {
    currentQuestion = generateRandomQuestion();
    question.textContent = currentQuestion.question;
  }

  displayRandomQuestion();

  function updateScoreAndLives() {
    lives.textContent = `Lives: ${livesInt}`;
    score.textContent = `Score: ${scoreInt}`;
  }

  button.addEventListener("click", () => {
    const playerAnswer = parseFloat(answer.value);
    const correctAnswer = currentQuestion.answer;

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
    updateScoreAndLives();
  });

  const restartButton = document.getElementById("restart");
  restartButton.addEventListener("click", () => {
    scoreInt = 0;
    livesInt = 3;
    displayRandomQuestion();
    answer.value = "";
    updateScoreAndLives();
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

  function setDifficulty(buttonId) {
    difficulty = difficultyButtons[buttonId];
    Object.keys(difficultyButtons).forEach(id => {
      const element = document.getElementById(id);
      if (element) {
        element.classList.remove("selected");
      }
    });
    document.getElementById(buttonId).classList.add("selected");
    displayRandomQuestion();
  }

  Object.keys(difficultyButtons).forEach(buttonId => {
    const button = document.getElementById(buttonId);
    button.addEventListener("click", () => setDifficulty(buttonId));
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
    if (event.key === 'Enter') {
      button.click();
    }
  });
})();
