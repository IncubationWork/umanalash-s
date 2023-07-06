let quizData2;
let currentQuestion = 0;
let score = 0;
let timer;

const questionA2 = document.getElementById('question');
const optionsA2 = document.getElementById('options');
const submitButton = document.getElementById('submit');
const resultA2 = document.getElementById('result');
const timerElement = document.getElementById('timer');

fetch("quiz2.json")
.then(response => response.json())
.then(data2 => {
   quizData2 = data2.Quiz2;
  loadQuestion();
});

function loadQuestion() {
  const currentQuestionData = quizData2[currentQuestion];
  questionA2.textContent = currentQuestionData.Question;
  hideContainer();
  setTimeout(() => {
    optionsA2.innerHTML = '';
    for(let answer in currentQuestionData.Answer) {
   
    
    const option = document.createElement('button');
    option.type = 'button';
    option.value = answer;
    option.addEventListener('click',checkAnswer);
    option.textContent = currentQuestionData.Answer[answer];

    const br = document.createElement('br');
    optionsA2.appendChild(option);
    optionsA2.appendChild(br);

  }
  showContainer();
},400);
}
function hideContainer() {
  questionA2.style.display = 'none';
  optionsA2.style.display = 'none';
}

function showContainer() {
  questionA2.style.display = 'block';
  optionsA2.style.display = 'block';
}

function checkAnswer(event) {
  const selectedOption = this;
  const selectedValue = selectedOption.value;
  const currentQuestionData =quizData2[currentQuestion];
  const correctAnswer = currentQuestionData.correctAnswer;

    if(selectedValue === correctAnswer) {
      selectedOption.classList.add('correct');
      resultA2.textContent = 'Correct!';
      score++;
    } else {
      selectedOption.classList.add('incorrect');
      resultA2.textContent = `Incorrect. The correct answer is: ${currentQuestionData.Answer[correctAnswer]}`;
    }

   
    currentQuestion++;

    if (currentQuestion < quizData2.length) {
      setTimeout(loadQuestion, 900);
    }else {
      submitButton.style.visibility ="visible";
      submitButton.addEventListener('click',showResults);
    } 
  }



function showResults() {

  const totalQuestions = quizData2.length;
  const percentage = ((score/totalQuestions)*100).toFixed(2);
  resultA2.textContent = `Quiz completed! Your score : ${score}/${totalQuestions} (${percentage}%)`;
  submitButton.style.visibility ="hidden";
}
    submitButton.style.visibility ="hidden";
    submitButton.addEventListener('click',checkAnswer);

