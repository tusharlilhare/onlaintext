const questions = [
    { num: 1, question: " 1 What is the SI unit of electric current?", options: ["Volt", "Ampere", "Ohm", "Watt"], answer: "Ampere", attempted: false, selected: "" },
    { num: 2, question: " 2 What is the chemical symbol for water?", options: ["H2O", "CO2", "NaCl", "O2"], answer: "H2O", attempted: false, selected: "" },
    { num: 3, question: "3 What planet is known as the Red Planet?", options: ["Earth", "Mars", "Jupiter", "Venus"], answer: "Mars", attempted: false, selected: "" },
    { num: 4, question: "4 Who developed the theory of relativity?", options: ["Isaac Newton", "Albert Einstein", "Nikola Tesla", "Galileo Galilei"], answer: "Albert Einstein", attempted: false, selected: "" },
    { num: 5, question: " 5 What gas do plants use for photosynthesis?", options: ["Oxygen", "Carbon Dioxide", "Nitrogen", "Hydrogen"], answer: "Carbon Dioxide", attempted: false, selected: "" },
    { num: 6, question: " 6 Which element has the chemical symbol 'Fe'?", options: ["Iron", "Fluorine", "Lead", "Gold"], answer: "Iron", attempted: false, selected: "" },
    { num: 7, question: "7 What is the hardest natural substance on Earth?", options: ["Gold", "Diamond", "Quartz", "Iron"], answer: "Diamond", attempted: false, selected: "" },
    { num: 8, question: "8 Which planet is closest to the sun?", options: ["Mercury", "Venus", "Earth", "Mars"], answer: "Mercury", attempted: false, selected: "" },
    { num: 9, question: " 9 How many bones are there in the adult human body?", options: ["206", "210", "180", "230"], answer: "206", attempted: false, selected: "" },
    { num: 10, question: " 10 What is the capital of France?", options: ["Berlin", "Madrid", "Paris", "Rome"], answer: "Paris", attempted: false, selected: "" },
    { num: 11, question: " 11 Which gas do humans breathe in to survive?", options: ["Oxygen", "Carbon Dioxide", "Nitrogen", "Helium"], answer: "Oxygen", attempted: false, selected: "" },
    { num: 12, question: " 12 What is the square root of 64?", options: ["6", "7", "8", "9"], answer: "8", attempted: false, selected: "" },
    { num: 13, question: "13 Who wrote 'Hamlet'?", options: ["William Wordsworth", "William Shakespeare", "Jane Austen", "Mark Twain"], answer: "William Shakespeare", attempted: false, selected: "" },
    { num: 14, question: " 14 Which planet is known for its rings?", options: ["Mars", "Jupiter", "Saturn", "Neptune"], answer: "Saturn", attempted: false, selected: "" },
    { num: 15, question: "15 How many continents are there on Earth?", options: ["5", "6", "7", "8"], answer: "7", attempted: false, selected: "" },
    { num: 16, question: "16 What is the boiling point of water in Celsius?", options: ["90°C", "100°C", "120°C", "150°C"], answer: "100°C", attempted: false, selected: "" },
    { num: 17, question: " 17 What is the capital of Japan?", options: ["Beijing", "Seoul", "Bangkok", "Tokyo"], answer: "Tokyo", attempted: false, selected: "" },
    { num: 18, question: " 18 Who painted the Mona Lisa?", options: ["Pablo Picasso", "Vincent van Gogh", "Leonardo da Vinci", "Michelangelo"], answer: "Leonardo da Vinci", attempted: false, selected: "" },
    { num: 19, question: "19 What is the largest ocean on Earth?", options: ["Atlantic Ocean", "Indian Ocean", "Pacific Ocean", "Arctic Ocean"], answer: "Pacific Ocean", attempted: false, selected: "" },
    { num: 20, question: "20 What is the smallest prime number?", options: ["0", "1", "2", "3"], answer: "2", attempted: false, selected: "" },
    { num: 21, question: " 21 Which country is known as the Land of the Rising Sun?", options: ["China", "Japan", "India", "South Korea"], answer: "Japan", attempted: false, selected: "" },
    { num: 22, question: " 22 What is the speed of light?", options: ["300,000 km/s", "150,000 km/s", "500,000 km/s", "600,000 km/s"], answer: "300,000 km/s", attempted: false, selected: "" },
    { num: 23, question: " 23 Which gas is used to fill balloons?", options: ["Oxygen", "Nitrogen", "Helium", "Carbon Dioxide"], answer: "Helium", attempted: false, selected: "" },
    { num: 24, question: " 24 Who is the author of 'Harry Potter'?", options: ["J.R.R. Tolkien", "J.K. Rowling", "George R.R. Martin", "Stephen King"], answer: "J.K. Rowling", attempted: false, selected: "" },
    { num: 25, question: "25 Which bird is known for its ability to mimic human speech?", options: ["Eagle", "Parrot", "Owl", "Pigeon"], answer: "Parrot", attempted: false, selected: "" },
    { num: 26, question: "26 Which element is needed for breathing?", options: ["Oxygen", "Carbon", "Nitrogen", "Sulfur"], answer: "Oxygen", attempted: false, selected: "" },
    { num: 27, question: " 27 What is the main ingredient in chocolate?", options: ["Sugar", "Milk", "Cocoa", "Flour"], answer: "Cocoa", attempted: false, selected: "" },
    { num: 28, question: "28 Which instrument is used to measure temperature?", options: ["Barometer", "Thermometer", "Hygrometer", "Seismometer"], answer: "Thermometer", attempted: false, selected: "" },
    { num: 29, question: " 29 How many colors are in a rainbow?", options: ["5", "6", "7", "8"], answer: "7", attempted: false, selected: "" },
    { num: 30, question: " 30 Which metal is the best conductor of electricity?", options: ["Iron", "Copper", "Gold", "Silver"], answer: "Silver", attempted: false, selected: "" }
];

    let currentQuestion = 0;

        function loadQuestion(index) {
            document.getElementById("question").textContent = questions[index].question;
            document.getElementById("questionCounter").textContent = `Question ${index + 1} of ${questions.length}`;
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
            let confirmation = confirm("Are you sure you want to submit the test?");
            
            if (!confirmation) {
                return; // अगर यूज़र 'Cancel' करता है तो आगे नहीं बढ़ेंगे
            }

            let attempted = 0;
            let notAttempted = 0;
            let score = 0;
            const results = [];

            questions.forEach(q => {
                if (q.attempted) {
                    attempted++;
                    if (q.selected === q.answer) {
                        score++;
                    }
                } else {
                    notAttempted++;
                }
                results.push({ question: q.question, selected: q.selected || "Not Answered", correct: q.answer });
            });

            localStorage.setItem("attempted", attempted);
            localStorage.setItem("notAttempted", notAttempted);
            localStorage.setItem("score", score);
            localStorage.setItem("results", JSON.stringify(results));

            // रिजल्ट देखने से पहले एक और कन्फर्मेशन ले सकते हैं
            let viewResult = confirm("Test submitted successfully! Do you want to view your result?");
            if (viewResult) {
                window.location.href = "/test/submit-test.html";
            }
        }

        window.onload = () => {
            loadQuestion(currentQuestion);
        };
