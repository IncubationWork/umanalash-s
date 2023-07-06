const questionA2 = document.getElementById('question');
const optionsA2 = document.getElementById('options');
const resultA2 = document.getElementById('result');
const submitButton = document.getElementById('submit');

function hideContainer() {
    questionA2.style.display = 'none';
    optionsA2.style.display = 'none';
}

function showContainer() {
    questionA2.style.display = 'block';
    optionsA2.style.display = 'block';
}

function renderQuestion(question) {
    questionA2.textContent = question.Question;
    hideContainer();
    setTimeout(() => {
        optionsA2.innerHTML ='';
        for(let answer in question.Answer) {
            const option = document.createElement('button');
            option.type = 'button';
            option.value = answer;
            option.addEventListener('click',checkAnswer);
            option.textContent = question.Answer[answer];
            const br = document.createElement('br');
            optionsA2.appendChild(option);
            optionsA2.appendChild(br);
        }
        showContainer();
    },400);
}

function renderResult(score,totalQuestions,percentage) {
    resultA2.textContent = `Quiz Completed! Your Score: ${score}/${totalQuestions} (${percentage}%)`;
}
