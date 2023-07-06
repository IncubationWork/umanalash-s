let quizData2;
let currentQuestion = 0;
let score = 0;

async function fetchQuizData() {
    const response = await fetch("quiz2.json");
    const data2 = await response.json();
    quizData2 = data2.Quiz2;
}

function getCurrentQuestion() {
    return quizData2[currentQuestion];
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
    return quizData2.length;
}

function getScorePercentage() {
    return ((score/getTotalQuestions())*100).toFixed(2);
}

