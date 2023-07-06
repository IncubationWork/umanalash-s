const questionA1 = document.getElementById('question');
const optionsA1 = document.getElementById('options');
const resultA1 = document.getElementById('result');
const submitButton = document.getElementById('submit');

function hideContainer() {
    questionA1.style.display = 'none';
    optionsA1.style.display = 'none';
}

function showContainer() {
    questionA1.style.display = 'block';
    optionsA1.style.display = 'block';
}

function renderQuestion(question) {
    questionA1.textContent = question.Question;
    hideContainer();
    setTimeout(() => {
        optionsA1.innerHTML ='';
        for(let answer in question.Answer) {
            const option = document.createElement('button');
            option.type = 'button';
            option.value = answer;
            option.addEventListener('click',checkAnswer);
            option.textContent = question.Answer[answer];
            const br = document.createElement('br');
            optionsA1.appendChild(option);
            optionsA1.appendChild(br);
        }
        showContainer();
    },400);
}

function renderResult(score,totalQuestions,percentage) {
    resultA1.textContent = `Quiz Completed! Your Score: ${score}/${totalQuestions} (${percentage}%)`;
}
