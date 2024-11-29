document.addEventListener("DOMContentLoaded", () => {
  const randomNumber = Math.floor(Math.random() * 10) + 1;
  let guessesLeft = 5;
  let hasWon = false;

  const guessesLeftSpan = document.getElementById("guesses-left");
  const guessInput = document.getElementById("guess-input");
  const submitBtn = document.getElementById("submit-btn");
  const feedback = document.getElementById("feedback");
  const restartBtn = document.getElementById("restart-btn");

  submitBtn.addEventListener("click", () => {
    const guess = parseInt(guessInput.value);
    if (isNaN(guess) || guess < 1 || guess > 10) {
      feedback.textContent = "Please enter a number between 1 and 10.";
      return;
    }

    if (guess === randomNumber) {
      feedback.textContent = "CORRECT ... YOU WIN!!! 🎉";
      feedback.style.color = "green";
      hasWon = true;
      endGame();
    } else if (guess < randomNumber) {
      feedback.textContent = `It is greater than ${guess}.`;
    } else {
      feedback.textContent = `It is smaller than ${guess}.`;
    }

    guessesLeft--;
    guessesLeftSpan.textContent = guessesLeft;

    if (guessesLeft === 0 && !hasWon) {
      feedback.textContent = `GAME OVER ... YOU LOSE!! The number was: ${randomNumber}`;
      feedback.style.color = "red";
      endGame();
    }

    guessInput.value = "";
  });

  restartBtn.addEventListener("click", () => {
    window.location.reload();
  });

  function endGame() {
    guessInput.disabled = true;
    submitBtn.disabled = true;
    restartBtn.classList.remove("hidden");
  }
});
