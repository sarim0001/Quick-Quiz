const highScoresList = document.getElementById("highScoresList");
const highScores = JSON.parse(localStorage.getItem("highScores")) || [];

// Improve display of high scores with formatted percentages
highScoresList.innerHTML = highScores
  .map((score, index) => {
    // Add rank and format score with fixed decimals if it's a percentage
    return `<li class="high-score">${index + 1}. ${score.name} - ${
      score.score
    } points</li>`;
  })
  .join("");
