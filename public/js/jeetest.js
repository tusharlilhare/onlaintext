const questions = [
    {
        num: 1,
        question_en: "What is the dimensional formula of Planck's constant?",
        question_hi: "प्लैंक स्थिरांक का विमीय सूत्र क्या है?",
        options_en: ["[ML²T⁻¹]", "[ML²T⁻²]", "[MLT⁻¹]", "[ML²T⁻³]"],
        options_hi: ["[ML²T⁻¹]", "[ML²T⁻²]", "[MLT⁻¹]", "[ML²T⁻³]"],
        answer: "[ML²T⁻¹]",
        attempted: false,
        selected: ""
    },
    {
        num: 2,
        question_en: "A particle moves in a straight line with constant acceleration. If initial velocity is (u) and final velocity is (v), what is the distance traveled in time (t)?",
        question_hi: "एक कण स्थिर त्वरण के साथ सीधी रेखा में चलता है। प्रारंभिक वेग (u) और अंतिम वेग (v) हो तो समय (t) में तय की गई दूरी क्या होगी?",
        options_en: [
            "(ut + ½at²)",
            "(vt - ½at²)",
            "((u+v)/2)t",
            "((v² - u²)/2a)"
        ],
        options_hi: [
            "(ut + ½at²) - प्रारंभिक वेग और त्वरण के आधार पर दूरी",
            "(vt - ½at²) - अंतिम वेग और त्वरण का उपयोग",
            "((u+v)/2)t - औसत वेग से दूरी",
            "((v² - u²)/2a) - वेगों के अंतर के आधार पर दूरी"
        ],
        answer: "(ut + ½at²)",
        attempted: false,
        selected: ""
    },
    // Add more questions below
    {
        num: 3,
        question_en: "What is the SI unit of electric charge?",
        question_hi: "विद्युत आवेश का SI मात्रक क्या है?",
        options_en: ["Coulomb", "Ampere", "Volt", "Ohm"],
        options_hi: ["कूलॉम", "एम्पीयर", "वोल्ट", "ओम"],
        answer: "Coulomb",
        attempted: false,
        selected: ""
    },
    {
        num: 4,
        question_en: "Which of the following is a scalar quantity?",
        question_hi: "निम्नलिखित में से कौन सा अदिश राशि है?",
        options_en: ["Force", "Velocity", "Energy", "Momentum"],
        options_hi: ["बल", "वेग", "ऊर्जा", "संवेग"],
        answer: "Energy",
        attempted: false,
        selected: ""
    },
    {
        num: 5,
        question_en: "What is the value of the universal gravitational constant (G)?",
        question_hi: "सार्वत्रिक गुरुत्वाकर्षण स्थिरांक (G) का मान क्या है?",
        options_en: ["6.674 × 10⁻¹¹ N·m²/kg²", "9.81 m/s²", "3.00 × 10⁸ m/s", "1.602 × 10⁻¹⁹ C"],
        options_hi: ["6.674 × 10⁻¹¹ N·m²/kg²", "9.81 m/s²", "3.00 × 10⁸ m/s", "1.602 × 10⁻¹⁹ C"],
        answer: "6.674 × 10⁻¹¹ N·m²/kg²",
        attempted: false,
        selected: ""
    },
    {
        num: 6,
        question_en: "What is the formula for the force between two point charges?",
        question_hi: "दो बिंदु आवेशों के बीच बल का सूत्र क्या है?",
        options_en: ["F = k(q₁q₂)/r²", "F = ma", "F = G(m₁m₂)/r²", "F = qE"],
        options_hi: ["F = k(q₁q₂)/r²", "F = ma", "F = G(m₁m₂)/r²", "F = qE"],
        answer: "F = k(q₁q₂)/r²",
        attempted: false,
        selected: ""
    },
    {
        num: 7,
        question_en: "What is the principle behind the working of a transformer?",
        question_hi: "ट्रांसफॉर्मर के कार्य करने का सिद्धांत क्या है?",
        options_en: ["Faraday's Law of Electromagnetic Induction", "Ohm's Law", "Coulomb's Law", "Ampere's Law"],
        options_hi: ["फैराडे का विद्युत चुम्बकीय प्रेरण का नियम", "ओम का नियम", "कूलॉम का नियम", "एम्पीयर का नियम"],
        answer: "Faraday's Law of Electromagnetic Induction",
        attempted: false,
        selected: ""
    },
    {
        num: 8,
        question_en: "What is the speed of light in a vacuum?",
        question_hi: "निर्वात में प्रकाश की गति क्या है?",
        options_en: ["3.00 × 10⁸ m/s", "1.50 × 10⁸ m/s", "2.25 × 10⁸ m/s", "4.50 × 10⁸ m/s"],
        options_hi: ["3.00 × 10⁸ m/s", "1.50 × 10⁸ m/s", "2.25 × 10⁸ m/s", "4.50 × 10⁸ m/s"],
        answer: "3.00 × 10⁸ m/s",
        attempted: false,
        selected: ""
    },
    {
        num: 9,
        question_en: "What is the formula for kinetic energy?",
        question_hi: "गतिज ऊर्जा का सूत्र क्या है?",
        options_en: ["KE = ½mv²", "KE = mgh", "KE = Fd", "KE = ½kx²"],
        options_hi: ["KE = ½mv²", "KE = mgh", "KE = Fd", "KE = ½kx²"],
        answer: "KE = ½mv²",
        attempted: false,
        selected: ""
    },
    {
        num: 10,
        question_en: "What is the unit of electric potential?",
        question_hi: "विद्युत विभव का मात्रक क्या है?",
        options_en: ["Volt", "Joule", "Watt", "Ohm"],
        options_hi: ["वोल्ट", "जूल", "वाट", "ओम"],
        answer: "Volt",
        attempted: false,
        selected: ""
    },
    // Continue adding more questions up to 30
];

// Add more questions as needed...

let currentQuestion = 0;
let language = "en"; // Default English
const circlesPerPage = 70;
let currentCirclePage = 0;
let timeLeft = 300;
let timerInterval;

function loadQuestion(index) {
    const questionText = language === "en" ? questions[index].question_en : questions[index].question_hi;
    const optionsArray = language === "en" ? questions[index].options_en : questions[index].options_hi;

    document.getElementById("question").textContent = `${questions[index].num}. ${questionText}`;
    document.getElementById("questionCounter").textContent = `Question ${index + 1} of ${questions.length}`;

    const optionsElement = document.getElementById("options");
    optionsElement.innerHTML = "";

    optionsArray.forEach(option => {
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
    const start = currentCirclePage * circlesPerPage;
    const end = Math.min(start + circlesPerPage, questions.length);

    for (let i = start; i < end; i++) {
        const q = questions[i];
        let status = i === currentQuestion ? "active" : q.attempted ? "answered" : "not-attempted";
        circleContainer.innerHTML += `<div class="circle ${status}" onclick="jumpToQuestion(${i})">${i + 1}</div>`;
    }
}

function jumpToQuestion(index) {
    currentQuestion = index;
    loadQuestion(index);
}

function prevCirclePage() {
    if (currentCirclePage > 0) {
        currentCirclePage--;
        updateCircles();
    }
}

function nextCirclePage() {
    if ((currentCirclePage + 1) * circlesPerPage < questions.length) {
        currentCirclePage++;
        updateCircles();
    }
}

function changeLanguage() {
    language = document.getElementById("languageSelect").value;
    loadQuestion(currentQuestion);
}

function submitQuiz() {
    let confirmation = confirm("Are you sure you want to submit the test?");
    if (!confirmation) return;

    let attempted = 0, notAttempted = 0, score = 0;
    const results = [];

    questions.forEach(q => {
        if (q.attempted) {
            attempted++;
            if (q.selected === q.answer) score++;
        } else {
            notAttempted++;
        }
        results.push({ question: q.question_en, selected: q.selected || "Not Answered", correct: q.answer });
    });

    localStorage.setItem("attempted", attempted);
    localStorage.setItem("notAttempted", notAttempted);
    localStorage.setItem("score", score);
    localStorage.setItem("results", JSON.stringify(results));

    let viewResult = confirm("Test submitted successfully! Do you want to view your result?");
    if (viewResult) {
        window.location.href = "/test/submit-test.html";
    }
}

function startTimer() {
    const timerElement = document.getElementById("timer");
    timerInterval = setInterval(() => {
        if (timeLeft <= 0) {
            clearInterval(timerInterval);
            alert("Time's up! Submitting the quiz automatically.");
            submitQuiz();
        } else {
            timerElement.textContent = timeLeft;
            timeLeft--;
        }
    }, 1000);
}

window.onload = function () {
    startTimer();
    loadQuestion(currentQuestion);
};
