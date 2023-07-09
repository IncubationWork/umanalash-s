// Fetch quiz data and initialize the quiz
fetchQuizData()
  .then(() => {
    loadQuestion(); // Load the first question
  })
  .catch(error => {
    console.error('Failed to fetch quiz data:', error);
  });

submitButton.style.visibility = 'hidden';
submitButton.addEventListener('click', showResults);