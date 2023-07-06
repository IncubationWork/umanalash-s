let quizData3;
let currentQuestion = 0;
let score = 0;
let timer;

const questionA3 = document.getElementById('question');
const optionsA3 = document.getElementById('options');
const submitButton = document.getElementById('submit');
const resultA3 = document.getElementById('result');
const timerElement = document.getElementById('timer');

fetch("quiz3.json")
.then(response => response.json())
.then(data3 => {
   quizData3 = data3.Quiz3;
  loadQuestion();
});

function loadQuestion() {
  const currentQuestionData = quizData3[currentQuestion];
  questionA3.textContent = currentQuestionData.Question;
  hideContainer();
  setTimeout(() => {
    optionsA3.innerHTML = '';
    for(let answer in currentQuestionData.Answer) {
   
    
    const option = document.createElement('button');
    option.type = 'button';
    option.value = answer;
    option.addEventListener('click',checkAnswer);
    option.textContent = currentQuestionData.Answer[answer];

    const br = document.createElement('br');
    optionsA3.appendChild(option);
    optionsA3.appendChild(br);

  }
  showContainer();
},400);
}
function hideContainer() {
  questionA3.style.display = 'none';
  optionsA3.style.display = 'none';
}

function showContainer() {
  questionA3.style.display = 'block';
  optionsA3.style.display = 'block';
}

function checkAnswer(event) {
  const selectedOption = this;
  const selectedValue = selectedOption.value;
  const currentQuestionData =quizData3[currentQuestion];
  const correctAnswer = currentQuestionData.correctAnswer;

    if(selectedValue === correctAnswer) {
      selectedOption.classList.add('correct');
      resultA3.textContent = 'Correct!';
      score++;
    } else {
      selectedOption.classList.add('incorrect');
      resultA3.textContent = `Incorrect. The correct answer is: ${currentQuestionData.Answer[correctAnswer]}`;
    }

   
    currentQuestion++;

    if (currentQuestion < quizData3.length) {
      setTimeout(loadQuestion, 900);
    }else {
      submitButton.style.visibility ="visible";
      submitButton.addEventListener('click',showResults);
    } 
  }



function showResults() {

  const totalQuestions = quizData3.length;
  const percentage = ((score/totalQuestions)*100).toFixed(2);
  resultA3.textContent = `Quiz completed! Your score : ${score}/${totalQuestions} (${percentage}%)`;
  submitButton.style.visibility ="hidden";
}
    submitButton.style.visibility ="hidden";
    submitButton.addEventListener('click',checkAnswer);

