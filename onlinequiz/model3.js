let quizData3;
let currentQuestion = 0;
let score = 0;

async function fetchQuizData() {
    const response = await fetch("quiz3.json");
    const data3 = await response.json();
    quizData3 = data3.Quiz3;
}

function getCurrentQuestion() {
    return quizData3[currentQuestion];
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
    return quizData3.length;
}

function getScorePercentage() {
    return ((score/getTotalQuestions())*100).toFixed(2);
}

