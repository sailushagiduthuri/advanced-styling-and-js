// Quiz Answer Checker
function checkAnswer(btn) {
  const answer = btn.textContent;
  const result = document.getElementById("result");
  if (answer === "Paris") {
    result.textContent = "Correct!";
    result.style.color = "green";
  } else {
    result.textContent = "Wrong Answer. Try Again!";
    result.style.color = "red";
  }
}

// Fetch Joke from Joke API
function getJoke() {
  fetch("https://official-joke-api.appspot.com/random_joke")
    .then(res => res.json())
    .then(data => {
      document.getElementById("joke").textContent = ${data.setup} 😂 ${data.punchline};
    })
    .catch(() => {
      document.getElementById("joke").textContent = "Failed to load joke.";
    });
}
