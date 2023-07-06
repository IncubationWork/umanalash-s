let quizData1;
let currentQuestion = 0;
let score = 0;

async function fetchQuizData() {
    const response = await fetch("quiz1.json");
    const data1 = await response.json();
    quizData1 = data1.Quiz1;
}

function getCurrentQuestion() {
    return quizData1[currentQuestion];
}

function incrementScore() {
    score++;
}

function incrementCurrentQuestion() {
    currentQuestion++;
}
setTimeout(() => {

},400)
function getTotalQuestions() {
    return quizData1.length;
}

function getScorePercentage() {
    return ((score/getTotalQuestions())*100).toFixed(2);
}

