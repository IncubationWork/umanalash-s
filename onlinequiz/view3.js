const questionA3 = document.getElementById('question');
const optionsA3 = document.getElementById('options');
const resultA3 = document.getElementById('result');
const submitButton = document.getElementById('submit');

function hideContainer() {
    questionA3.style.display = 'none';
    optionsA3.style.display = 'none';
}

function showContainer() {
    questionA3.style.display = 'block';
    optionsA3.style.display = 'block';
}

function renderQuestion(question) {
    questionA3.textContent = question.Question;
    hideContainer();
    setTimeout(() => {
        optionsA3.innerHTML ='';
        for(let answer in question.Answer) {
            const option = document.createElement('button');
            option.type = 'button';
            option.value = answer;
            option.addEventListener('click',checkAnswer);
            option.textContent = question.Answer[answer];
            const br = document.createElement('br');
            optionsA3.appendChild(option);
            optionsA3.appendChild(br);
        }
        showContainer();
    },400);
}

function renderResult(score,totalQuestions,percentage) {
    resultA3.textContent = `Quiz Completed! Your Score: ${score}/${totalQuestions} (${percentage}%)`;
}
