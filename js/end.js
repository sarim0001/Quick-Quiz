const username = document.getElementById("username");
const saveScoreBtn = document.getElementById("saveScoreBtn");
const finalScore = document.getElementById("finalScore");
const mostRecentScore = localStorage.getItem("mostRecentScore");

const highScores = JSON.parse(localStorage.getItem("highScores")) || [];

const MAX_HIGH_SCORES = 5;

finalScore.innerText = mostRecentScore;

username.addEventListener("keyup", () => {
  saveScoreBtn.disabled = !username.value;
});

saveHighScore = (e) => {
  e.preventDefault();

  const score = {
    score: parseInt(mostRecentScore),
    name: username.value,
  };

  // Check if this username already exists in high scores
  const existingUserIndex = highScores.findIndex(
    (highScore) => highScore.name.toLowerCase() === score.name.toLowerCase()
  );

  if (existingUserIndex !== -1) {
    // If user exists, only update if new score is higher
    if (score.score > highScores[existingUserIndex].score) {
      highScores[existingUserIndex] = score;
    }
  } else {
    // Add new score entry
    highScores.push(score);
  }

  // Sort scores and keep only top MAX_HIGH_SCORES
  highScores.sort((a, b) => b.score - a.score);
  highScores.splice(MAX_HIGH_SCORES);

  localStorage.setItem("highScores", JSON.stringify(highScores));
  window.location.assign("index.html");
};
