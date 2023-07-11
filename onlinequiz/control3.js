function  loadQuestion() {
    const currentQuestionData = getCurrentQuestion();
    renderQuestion(currentQuestionData);
  }
  
function checkAnswer(event) {
  const selectedOption = event.target;
  const selectedValue = selectedOption.value;
  const currentQuestionData = getCurrentQuestion();
  const correctAnswer = currentQuestionData.correctAnswer;

  if (selectedValue === correctAnswer) {
    selectedOption.classList.add('correct');
    resultA3.style.background = "white";
    resultA3.textContent = 'Correct!';
    incrementScore();
  } else {
    selectedOption.classList.add('incorrect');
    resultA3.style.background = "white";
    resultA3.textContent = `Incorrect. The correct answer is: ${currentQuestionData.Answer[correctAnswer]}`;
  }

  incrementCurrentQuestion();

  if (currentQuestion < getTotalQuestions()) {
    setTimeout(loadQuestion, 900);
  } else {
    submitButton.style.visibility = 'visible';
    submitButton.addEventListener('click', showResults);
  }
}
  
function showResults() {
  const totalQuestions = getTotalQuestions();
  const percentage = getScorePercentage();
  renderResult(score, totalQuestions, percentage);
  submitButton.style.visibility = 'hidden';
}
  
// Initialize the quiz
fetchQuizData().then(loadQuestion);

submitButton.style.visibility = 'hidden';
submitButton.addEventListener('click', checkAnswer);

