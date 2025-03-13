let questions = [];
let currentQuestionIndex = 0;
let answers = [];

async function loadQuestions() {
    try {
        questions = JSON.parse(localStorage.getItem('questions')) || [];
        answers = Array(questions.length).fill(null);
        showQuestion();
        updateIndicators();
    } catch (error) {
        console.error('Failed to load questions', error);
    }
}

function showQuestion() {
    const quizContainer = document.getElementById('quizContainer');
    const question = questions[currentQuestionIndex];
    quizContainer.innerHTML = `
        <p><strong>Q${currentQuestionIndex + 1}/${questions.length}. ${question.question}</strong></p>
        ${question.options.map((opt, i) => `
            <label>
                <input type="radio" name="answer" value="${opt}" ${answers[currentQuestionIndex] === opt ? 'checked' : ''}>
                ${opt}
            </label><br>
        `).join('')}
    `;
}

function saveAnswer() {
    const selectedOption = document.querySelector('input[name="answer"]:checked');
    answers[currentQuestionIndex] = selectedOption ? selectedOption.value : null;
}

function nextQuestion() {
    saveAnswer();
    if (currentQuestionIndex < questions.length - 1) {
        currentQuestionIndex++;
        showQuestion();
        updateIndicators();
    }
}

function previousQuestion() {
    saveAnswer();
    if (currentQuestionIndex > 0) {
        currentQuestionIndex--;
        showQuestion();
        updateIndicators();
    }
}

function updateIndicators() {
    const statusIndicators = document.getElementById('statusIndicators');
    statusIndicators.innerHTML = '';
    answers.forEach((answer, index) => {
        let statusClass = answer !== null ? 'attempted' : 'unattempted';
        if (index === currentQuestionIndex) statusClass = 'visited';
        statusIndicators.innerHTML += `<div class="indicator ${statusClass}" onclick="jumpToQuestion(${index})">${index + 1}</div>`;
    });
}

function jumpToQuestion(index) {
    currentQuestionIndex = index;
    showQuestion();
    updateIndicators();
}

function submitQuiz() {
    saveAnswer();
    const resultsContainer = document.getElementById('resultsContainer');
    let resultHTML = `<h3>Quiz Results:</h3>
                      <p>Total Questions: ${questions.length}</p>`;
    questions.forEach((q, index) => {
        const userAnswer = answers[index] || 'Not Attempted';
        const isCorrect = userAnswer === q.answer;
        resultHTML += `<p><strong>Q${index + 1}:</strong> ${q.question}<br>
        <strong>Your Answer:</strong> ${userAnswer}<br>
        <strong>Correct Answer:</strong> ${q.answer}<br>
        <span style="color:${isCorrect ? 'green' : 'red'}">${isCorrect ? 'Correct' : 'Incorrect'}</span>
        </p>`;
    });
    resultsContainer.innerHTML = resultHTML;
}

window.onload = loadQuestions;