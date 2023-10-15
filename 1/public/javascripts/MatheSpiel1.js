    // Get elements
    const answer = document.getElementById("answer");
    const lives = document.getElementById("lives");
    const score = document.getElementById("score");
    const button = document.getElementById("submit");
    
    // Initialize variables
    let scoreInt = 0;
    let livesInt = 3;
    
    // Add event listener to submit button
    document.querySelector(".submitButtonMathe1").addEventListener("click", () => {
      // Increment score or decrement lives
      if (answer.value == 1) {
        scoreInt += 1;
      } else {
        livesInt -= 1;
      }
      
      // Reset score and lives if lives are 0
      if (livesInt == 0) {
        scoreInt = 0;
        livesInt = 3;
      }
      
      // Update HTML elements
      lives.innerHTML = livesInt;
      score.innerHTML = scoreInt;
    });