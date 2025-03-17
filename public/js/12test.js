const questions = [
    { num: 1, question: "विद्युत धारा की SI इकाई क्या है?", options: ["वोल्ट", "एम्पीयर", "ओम", "वाट"], answer: "एम्पीयर" },
    { num: 2, question: "पानी का रासायनिक सूत्र क्या है?", options: ["H2O", "CO2", "NaCl", "O2"], answer: "H2O" },
    { num: 3, question: "न्यूटन के गति के प्रथम नियम को किस नाम से जाना जाता है?", options: ["जड़त्व का नियम", "बल का नियम", "क्रिया-प्रतिक्रिया का नियम", "गुरुत्वाकर्षण का नियम"], answer: "जड़त्व का नियम" },
    { num: 4, question: "भारत का राष्ट्रीय फूल कौन सा है?", options: ["गुलाब", "कमल", "सूरजमुखी", "गेंदा"], answer: "कमल" },
    { num: 5, question: "किस तत्व को जीवन का आधार माना जाता है?", options: ["ऑक्सीजन", "हाइड्रोजन", "कार्बन", "नाइट्रोजन"], answer: "कार्बन" },
    { num: 6, question: "संविधान में कितने अनुच्छेद हैं?", options: ["395", "448", "370", "500"], answer: "448" },
    { num: 7, question: "भारत में सबसे लंबी नदी कौन सी है?", options: ["गंगा", "ब्रह्मपुत्र", "यमुना", "नर्मदा"], answer: "गंगा" },
    { num: 8, question: "पृथ्वी का सबसे बड़ा महाद्वीप कौन सा है?", options: ["अफ्रीका", "यूरोप", "एशिया", "ऑस्ट्रेलिया"], answer: "एशिया" },
    { num: 9, question: "सौरमंडल में सबसे बड़ा ग्रह कौन सा है?", options: ["पृथ्वी", "मंगल", "बृहस्पति", "शुक्र"], answer: "बृहस्पति" },
    { num: 10, question: "भारत के प्रथम राष्ट्रपति कौन थे?", options: ["डॉ. राजेंद्र प्रसाद", "डॉ. सर्वपल्ली राधाकृष्णन", "जवाहरलाल नेहरू", "सरदार पटेल"], answer: "डॉ. राजेंद्र प्रसाद" },
    { num: 11, question: "संगीत के क्षेत्र में दिया जाने वाला सर्वोच्च पुरस्कार कौन सा है?", options: ["भारत रत्न", "ग्रामोफी अवॉर्ड", "भारतीय संगीत रत्न", "संगीत नाटक अकादमी पुरस्कार"], answer: "संगीत नाटक अकादमी पुरस्कार" },
    { num: 12, question: "भारतीय संविधान किस वर्ष लागू हुआ?", options: ["1947", "1950", "1949", "1952"], answer: "1950" },
    { num: 13, question: "वायुमंडल में सबसे अधिक मात्रा में कौन सी गैस पाई जाती है?", options: ["ऑक्सीजन", "कार्बन डाइऑक्साइड", "नाइट्रोजन", "हीलियम"], answer: "नाइट्रोजन" },
    { num: 14, question: "हिमालय की सबसे ऊँची चोटी कौन सी है?", options: ["कंचनजंगा", "एवरेस्ट", "नंदा देवी", "धौलागिरी"], answer: "एवरेस्ट" },
    { num: 15, question: "भारत का राष्ट्रीय पशु कौन सा है?", options: ["हाथी", "शेर", "बाघ", "गेंडा"], answer: "बाघ" },
    // 25 और प्रश्न यहाँ जोड़ें
];

let currentQuestion = 0;
let timeLeft = 30 * 60; // 30 मिनट का टाइमर

const timer = setInterval(() => {
    timeLeft--;
    updateTimerDisplay();
    if (timeLeft <= 0) {
        clearInterval(timer);
        alert('समय समाप्त! टेस्ट सबमिट किया जा रहा है।');
        submitQuiz();
    }
}, 1000);

function updateTimerDisplay() {
    document.getElementById('timer').innerText = `शेष समय: ${Math.floor(timeLeft / 60)}:${(timeLeft % 60).toString().padStart(2, '0')}`;
}

document.addEventListener("DOMContentLoaded", () => {
    const timerElement = document.createElement("div");
    timerElement.id = "timer";
    timerElement.style.fontSize = "18px";
    timerElement.style.fontWeight = "bold";
    timerElement.style.marginBottom = "10px";
    document.querySelector(".container").prepend(timerElement);
    updateTimerDisplay();
});

function loadQuestion(index) {
    document.getElementById("question").textContent = questions[index].question;
    document.getElementById("questionCounter").textContent = `प्रश्न ${index + 1} / ${questions.length}`;
    const optionsElement = document.getElementById("options");
    optionsElement.innerHTML = "";
    questions[index].options.forEach(option => {
        optionsElement.innerHTML += `<li><input type="radio" name="option" value="${option}" onclick="markAttempted(${index}, '${option}')"> ${option}</li>`;
    });
    updateCircles();
}

function markAttempted(index, selectedAnswer) {
    questions[index].attempted = true;
    questions[index].selected = selectedAnswer;
    updateCircles();
}

function nextQuestion() {
    if (currentQuestion < questions.length - 1) {
        currentQuestion++;
        loadQuestion(currentQuestion);
    }
}

function prevQuestion() {
    if (currentQuestion > 0) {
        currentQuestion--;
        loadQuestion(currentQuestion);
    }
}

function updateCircles() {
    const circleContainer = document.getElementById("circleContainer");
    circleContainer.innerHTML = "";
    questions.forEach((q, i) => {
        let status = i === currentQuestion ? "active" : q.attempted ? "answered" : "not-attempted";
        circleContainer.innerHTML += `<div class="circle ${status}" onclick="jumpToQuestion(${i})">${i + 1}</div>`;
    });
}

function jumpToQuestion(index) {
    currentQuestion = index;
    loadQuestion(index);
}

function submitQuiz() {
    let confirmation = confirm("क्या आप वाकई में टेस्ट सबमिट करना चाहते हैं?");
    if (!confirmation) return;
    
    let attempted = 0;
    let score = 0;
    questions.forEach(q => {
        if (q.attempted) {
            attempted++;
            if (q.selected === q.answer) {
                score++;
            }
        }
    });
    
    localStorage.setItem("score", score);
    localStorage.setItem("attempted", attempted);
    // window.location.href = "/test/submit-test.html";
    window.location.href="/public/test/12th/mpboard/result.html";
}

window.onload = () => {
    loadQuestion(currentQuestion);
    updateTimerDisplay();
};



function submitQuiz() {
    let confirmation = confirm("क्या आप वाकई में टेस्ट सबमिट करना चाहते हैं?");
    if (!confirmation) return;

    let attempted = 0;
    let score = 0;
    let correctAnswers = [];

    questions.forEach(q => {
        if (q.attempted) {
            attempted++;
            if (q.selected === q.answer) {
                score++;
            }
        }
        correctAnswers.push(q.answer); // सभी सही उत्तर सेव करें
    });

    let testResults = JSON.parse(localStorage.getItem("testResults")) || [];

    testResults.push({
        name: "MP Board Class 12 Quiz",
        totalQuestions: questions.length,
        attempted: attempted,
        score: score,
        correctAnswers: correctAnswers // सही उत्तरों को स्टोर करें
    });

    localStorage.setItem("testResults", JSON.stringify(testResults));

    window.location.href = "/public/test/12th/mpboard/result.html";
}

