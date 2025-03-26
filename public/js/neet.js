// const questions = [
//     { num: 1, question: " 1 What is the SI unit of electric current?", options: ["Volt", "Ampere", "Ohm", "Watt"], answer: "Ampere", attempted: false, selected: "" },
//     { num: 2, question: " 2 What is the chemical symbol for water?", options: ["H2O", "CO2", "NaCl", "O2"], answer: "H2O", attempted: false, selected: "" },
//     { num: 3, question: "3 What planet is known as the Red Planet?", options: ["Earth", "Mars", "Jupiter", "Venus"], answer: "Mars", attempted: false, selected: "" },
//     { num: 4, question: "4 Who developed the theory of relativity?", options: ["Isaac Newton", "Albert Einstein", "Nikola Tesla", "Galileo Galilei"], answer: "Albert Einstein", attempted: false, selected: "" },
//     { num: 5, question: " 5 What gas do plants use for photosynthesis?", options: ["Oxygen", "Carbon Dioxide", "Nitrogen", "Hydrogen"], answer: "Carbon Dioxide", attempted: false, selected: "" },
//     { num: 6, question: " 6 Which element has the chemical symbol 'Fe'?", options: ["Iron", "Fluorine", "Lead", "Gold"], answer: "Iron", attempted: false, selected: "" },
//     { num: 7, question: "7 What is the hardest natural substance on Earth?", options: ["Gold", "Diamond", "Quartz", "Iron"], answer: "Diamond", attempted: false, selected: "" },
//     { num: 8, question: "8 Which planet is closest to the sun?", options: ["Mercury", "Venus", "Earth", "Mars"], answer: "Mercury", attempted: false, selected: "" },
//     { num: 9, question: " 9 How many bones are there in the adult human body?", options: ["206", "210", "180", "230"], answer: "206", attempted: false, selected: "" },
//     { num: 10, question: " 10 What is the capital of France?", options: ["Berlin", "Madrid", "Paris", "Rome"], answer: "Paris", attempted: false, selected: "" },
//     { num: 11, question: " 11 Which gas do humans breathe in to survive?", options: ["Oxygen", "Carbon Dioxide", "Nitrogen", "Helium"], answer: "Oxygen", attempted: false, selected: "" },
//     { num: 12, question: " 12 What is the square root of 64?", options: ["6", "7", "8", "9"], answer: "8", attempted: false, selected: "" },
//     { num: 13, question: "13 Who wrote 'Hamlet'?", options: ["William Wordsworth", "William Shakespeare", "Jane Austen", "Mark Twain"], answer: "William Shakespeare", attempted: false, selected: "" },
//     { num: 14, question: " 14 Which planet is known for its rings?", options: ["Mars", "Jupiter", "Saturn", "Neptune"], answer: "Saturn", attempted: false, selected: "" },
//     { num: 15, question: "15 How many continents are there on Earth?", options: ["5", "6", "7", "8"], answer: "7", attempted: false, selected: "" },
//     { num: 16, question: "16 What is the boiling point of water in Celsius?", options: ["90°C", "100°C", "120°C", "150°C"], answer: "100°C", attempted: false, selected: "" },
//     { num: 17, question: " 17 What is the capital of Japan?", options: ["Beijing", "Seoul", "Bangkok", "Tokyo"], answer: "Tokyo", attempted: false, selected: "" },
//     { num: 18, question: " 18 Who painted the Mona Lisa?", options: ["Pablo Picasso", "Vincent van Gogh", "Leonardo da Vinci", "Michelangelo"], answer: "Leonardo da Vinci", attempted: false, selected: "" },
//     { num: 19, question: "19 What is the largest ocean on Earth?", options: ["Atlantic Ocean", "Indian Ocean", "Pacific Ocean", "Arctic Ocean"], answer: "Pacific Ocean", attempted: false, selected: "" },
//     { num: 20, question: "20 What is the smallest prime number?", options: ["0", "1", "2", "3"], answer: "2", attempted: false, selected: "" },
//     { num: 21, question: " 21 Which country is known as the Land of the Rising Sun?", options: ["China", "Japan", "India", "South Korea"], answer: "Japan", attempted: false, selected: "" },
//     { num: 22, question: " 22 What is the speed of light?", options: ["300,000 km/s", "150,000 km/s", "500,000 km/s", "600,000 km/s"], answer: "300,000 km/s", attempted: false, selected: "" },
//     { num: 23, question: " 23 Which gas is used to fill balloons?", options: ["Oxygen", "Nitrogen", "Helium", "Carbon Dioxide"], answer: "Helium", attempted: false, selected: "" },
//     { num: 24, question: " 24 Who is the author of 'Harry Potter'?", options: ["J.R.R. Tolkien", "J.K. Rowling", "George R.R. Martin", "Stephen King"], answer: "J.K. Rowling", attempted: false, selected: "" },
//     { num: 25, question: "25 Which bird is known for its ability to mimic human speech?", options: ["Eagle", "Parrot", "Owl", "Pigeon"], answer: "Parrot", attempted: false, selected: "" },
//     { num: 26, question: "26 Which element is needed for breathing?", options: ["Oxygen", "Carbon", "Nitrogen", "Sulfur"], answer: "Oxygen", attempted: false, selected: "" },
//     { num: 27, question: " 27 What is the main ingredient in chocolate?", options: ["Sugar", "Milk", "Cocoa", "Flour"], answer: "Cocoa", attempted: false, selected: "" },
//     { num: 28, question: "28 Which instrument is used to measure temperature?", options: ["Barometer", "Thermometer", "Hygrometer", "Seismometer"], answer: "Thermometer", attempted: false, selected: "" },
//     { num: 29, question: " 29 How many colors are in a rainbow?", options: ["5", "6", "7", "8"], answer: "7", attempted: false, selected: "" },
//     { num: 30, question: " 30 Which metal is the best conductor of electricity?", options: ["Iron", "Copper", "Gold", "Silver"], answer: "Silver", attempted: false, selected: "" }
// ];

//     let currentQuestion = 0;

//         function loadQuestion(index) {
//             document.getElementById("question").textContent = questions[index].question;
//             document.getElementById("questionCounter").textContent = `Question ${index + 1} of ${questions.length}`;
//             const optionsElement = document.getElementById("options");
//             optionsElement.innerHTML = "";
//             questions[index].options.forEach(option => {
//                 optionsElement.innerHTML += `<li><input type="radio" name="option" value="${option}" onclick="markAttempted(${index}, '${option}')"> ${option}</li>`;
//             });
//             updateCircles();
//         }

//         function markAttempted(index, selectedAnswer) {
//             questions[index].attempted = true;
//             questions[index].selected = selectedAnswer;
//             updateCircles();
//         }

//         function nextQuestion() {
//             if (currentQuestion < questions.length - 1) {
//                 currentQuestion++;
//                 loadQuestion(currentQuestion);
//             }
//         }

//         function prevQuestion() {
//             if (currentQuestion > 0) {
//                 currentQuestion--;
//                 loadQuestion(currentQuestion);
//             }
//         }

//         function updateCircles() {
//             const circleContainer = document.getElementById("circleContainer");
//             circleContainer.innerHTML = "";
//             questions.forEach((q, i) => {
//                 let status = i === currentQuestion ? "active" : q.attempted ? "answered" : "not-attempted";
//                 circleContainer.innerHTML += `<div class="circle ${status}" onclick="jumpToQuestion(${i})">${i + 1}</div>`;
//             });
//         }

//         function jumpToQuestion(index) {
//             currentQuestion = index;
//             loadQuestion(index);
//         }

//         function submitQuiz() {
//             let confirmation = confirm("Are you sure you want to submit the test?");
            
//             if (!confirmation) {
//                 return; // अगर यूज़र 'Cancel' करता है तो आगे नहीं बढ़ेंगे
//             }

//             let attempted = 0;
//             let notAttempted = 0;
//             let score = 0;
//             const results = [];

//             questions.forEach(q => {
//                 if (q.attempted) {
//                     attempted++;
//                     if (q.selected === q.answer) {
//                         score++;
//                     }
//                 } else {
//                     notAttempted++;
//                 }
//                 results.push({ question: q.question, selected: q.selected || "Not Answered", correct: q.answer });
//             });

//             localStorage.setItem("attempted", attempted);
//             localStorage.setItem("notAttempted", notAttempted);
//             localStorage.setItem("score", score);
//             localStorage.setItem("results", JSON.stringify(results));

//             // रिजल्ट देखने से पहले एक और कन्फर्मेशन ले सकते हैं
//             let viewResult = confirm("Test submitted successfully! Do you want to view your result?");
//             if (viewResult) {
//                 window.location.href = "/test/submit-test.html";
//             }
//         }

//         window.onload = () => {
//             loadQuestion(currentQuestion);
//         };




const questions = [
    // Physics Questions (1-23)
    { num: 1, question_en: "What is the dimensional formula of Planck's constant?", question_hi: "प्लैंक स्थिरांक का विमीय सूत्र क्या है?", options: ["[ML²T⁻¹]", "[ML²T⁻²]", "[MLT⁻¹]", "[ML²T⁻³]"], answer: "[ML²T⁻¹]", attempted: false, selected: "" },
    { num: 2, question_en: "A particle moves in a straight line with a constant acceleration. If its initial velocity is \( u \) and final velocity is \( v \), what is the distance traveled in time \( t \)?", question_hi: "एक कण स्थिर त्वरण के साथ एक सीधी रेखा में चलता है। यदि इसका प्रारंभिक वेग \( u \) और अंतिम वेग \( v \) है, तो समय \( t \) में तय की गई दूरी क्या है?", options: ["\( ut + \\frac{1}{2}at^2 \)", "\( vt - \\frac{1}{2}at^2 \)", "\( \\frac{u+v}{2}t \)", "\( \\frac{v^2 - u^2}{2a} \)"], answer: "\( ut + \\frac{1}{2}at^2 \)", attempted: false, selected: "" },
    { num: 3, question_en: "What is the SI unit of electric flux?", question_hi: "विद्युत फ्लक्स की SI इकाई क्या है?", options: ["Volt-meter", "Tesla", "Weber", "Coulomb"], answer: "Volt-meter", attempted: false, selected: "" },
    { num: 4, question_en: "Which law states that the force between two charges is directly proportional to the product of their charges and inversely proportional to the square of the distance between them?", question_hi: "कौन सा नियम कहता है कि दो आवेशों के बीच का बल उनके आवेशों के गुणनफल के समानुपाती होता है और उनके बीच की दूरी के वर्ग के व्युत्क्रमानुपाती होता है?", options: ["Ohm's Law", "Coulomb's Law", "Faraday's Law", "Ampere's Law"], answer: "Coulomb's Law", attempted: false, selected: "" },
    { num: 5, question_en: "What is the work done by a force \( F = 10 \, \text{N} \) acting on an object to displace it by \( 5 \, \text{m} \)?", question_hi: "एक वस्तु को \( 5 \, \text{m} \) विस्थापित करने के लिए \( F = 10 \, \text{N} \) बल द्वारा किया गया कार्य क्या है?", options: ["50 J", "25 J", "10 J", "5 J"], answer: "50 J", attempted: false, selected: "" },
    { num: 6, question_en: "What is the frequency of a wave with a time period of \( 0.02 \, \text{s} \)?", question_hi: "\( 0.02 \, \text{s} \) के समय अवधि वाली तरंग की आवृत्ति क्या है?", options: ["50 Hz", "100 Hz", "20 Hz", "200 Hz"], answer: "50 Hz", attempted: false, selected: "" },
    { num: 7, question_en: "What is the speed of light in a vacuum?", question_hi: "निर्वात में प्रकाश की गति क्या है?", options: ["\( 3 \\times 10^8 \, \\text{m/s} \)", "\( 3 \\times 10^6 \, \\text{m/s} \)", "\( 3 \\times 10^5 \, \\text{m/s} \)", "\( 3 \\times 10^3 \, \\text{m/s} \)"], answer: "\( 3 \\times 10^8 \, \\text{m/s} \)", attempted: false, selected: "" },
    { num: 8, question_en: "What is the unit of resistance?", question_hi: "प्रतिरोध की इकाई क्या है?", options: ["Ohm", "Volt", "Ampere", "Watt"], answer: "Ohm", attempted: false, selected: "" },
    { num: 9, question_en: "What is the formula for kinetic energy?", question_hi: "गतिज ऊर्जा का सूत्र क्या है?", options: ["\( \\frac{1}{2}mv^2 \)", "\( mgh \)", "\( \\frac{1}{2}kx^2 \)", "\( Fd \)"], answer: "\( \\frac{1}{2}mv^2 \)", attempted: false, selected: "" },
    { num: 10, question_en: "What is the principle behind a transformer?", question_hi: "ट्रांसफार्मर का सिद्धांत क्या है?", options: ["Ohm's Law", "Faraday's Law of Electromagnetic Induction", "Coulomb's Law", "Ampere's Law"], answer: "Faraday's Law of Electromagnetic Induction", attempted: false, selected: "" },
    { num: 11, question_en: "What is the unit of power?", question_hi: "शक्ति की इकाई क्या है?", options: ["Watt", "Joule", "Newton", "Pascal"], answer: "Watt", attempted: false, selected: "" },
    { num: 12, question_en: "What is the formula for gravitational force between two masses?", question_hi: "दो द्रव्यमानों के बीच गुरुत्वाकर्षण बल का सूत्र क्या है?", options: ["\( F = \\frac{Gm_1m_2}{r^2} \)", "\( F = ma \)", "\( F = \\frac{mv^2}{r} \)", "\( F = kx \)"], answer: "\( F = \\frac{Gm_1m_2}{r^2} \)", attempted: false, selected: "" },
    { num: 13, question_en: "What is the unit of electric charge?", question_hi: "विद्युत आवेश की इकाई क्या है?", options: ["Coulomb", "Ampere", "Volt", "Ohm"], answer: "Coulomb", attempted: false, selected: "" },
    { num: 14, question_en: "What is the formula for Ohm's Law?", question_hi: "ओम के नियम का सूत्र क्या है?", options: ["\( V = IR \)", "\( P = IV \)", "\( F = ma \)", "\( E = mc^2 \)"], answer: "\( V = IR \)", attempted: false, selected: "" },
    { num: 15, question_en: "What is the unit of frequency?", question_hi: "आवृत्ति की इकाई क्या है?", options: ["Hertz", "Second", "Meter", "Joule"], answer: "Hertz", attempted: false, selected: "" },
    { num: 16, question_en: "What is the formula for potential energy?", question_hi: "स्थितिज ऊर्जा का सूत्र क्या है?", options: ["\( mgh \)", "\( \\frac{1}{2}mv^2 \)", "\( \\frac{1}{2}kx^2 \)", "\( Fd \)"], answer: "\( mgh \)", attempted: false, selected: "" },
    { num: 17, question_en: "What is the unit of pressure?", question_hi: "दाब की इकाई क्या है?", options: ["Pascal", "Newton", "Joule", "Watt"], answer: "Pascal", attempted: false, selected: "" },
    { num: 18, question_en: "What is the formula for work done?", question_hi: "किए गए कार्य का सूत्र क्या है?", options: ["\( W = Fd \)", "\( W = \\frac{1}{2}mv^2 \)", "\( W = mgh \)", "\( W = Pt \)"], answer: "\( W = Fd \)", attempted: false, selected: "" },
    { num: 19, question_en: "What is the unit of force?", question_hi: "बल की इकाई क्या है?", options: ["Newton", "Joule", "Watt", "Pascal"], answer: "Newton", attempted: false, selected: "" },
    { num: 20, question_en: "What is the formula for momentum?", question_hi: "संवेग का सूत्र क्या है?", options: ["\( p = mv \)", "\( p = ma \)", "\( p = Fd \)", "\( p = \\frac{1}{2}mv^2 \)"], answer: "\( p = mv \)", attempted: false, selected: "" },
    { num: 21, question_en: "What is the unit of energy?", question_hi: "ऊर्जा की इकाई क्या है?", options: ["Joule", "Watt", "Newton", "Pascal"], answer: "Joule", attempted: false, selected: "" },
    { num: 22, question_en: "What is the formula for power?", question_hi: "शक्ति का सूत्र क्या है?", options: ["\( P = \\frac{W}{t} \)", "\( P = Fv \)", "\( P = VI \)", "All of the above"], answer: "All of the above", attempted: false, selected: "" },
    { num: 23, question_en: "What is the unit of capacitance?", question_hi: "धारिता की इकाई क्या है?", options: ["Farad", "Ohm", "Henry", "Tesla"], answer: "Farad", attempted: false, selected: "" },

    // Chemistry Questions (24-46)
    { num: 24, question_en: "What is the atomic number of Carbon?", question_hi: "कार्बन की परमाणु संख्या क्या है?", options: ["6", "12", "14", "8"], answer: "6", attempted: false, selected: "" },
    { num: 25, question_en: "What is the chemical formula of water?", question_hi: "पानी का रासायनिक सूत्र क्या है?", options: ["H2O", "CO2", "NaCl", "O2"], answer: "H2O", attempted: false, selected: "" },
    { num: 26, question_en: "What is the pH of a neutral solution?", question_hi: "एक उदासीन विलयन का pH क्या होता है?", options: ["7", "1", "14", "0"], answer: "7", attempted: false, selected: "" },
    { num: 27, question_en: "Which gas is known as laughing gas?", question_hi: "किस गैस को हंसाने वाली गैस कहा जाता है?", options: ["Nitrous Oxide", "Carbon Dioxide", "Oxygen", "Hydrogen"], answer: "Nitrous Oxide", attempted: false, selected: "" },
    { num: 28, question_en: "What is the valency of Oxygen?", question_hi: "ऑक्सीजन की संयोजकता क्या है?", options: ["2", "1", "3", "4"], answer: "2", attempted: false, selected: "" },
    { num: 29, question_en: "What is the formula of Sodium Chloride?", question_hi: "सोडियम क्लोराइड का सूत्र क्या है?", options: ["NaCl", "Na2O", "NaCl2", "Na2Cl"], answer: "NaCl", attempted: false, selected: "" },
    { num: 30, question_en: "What is the molecular formula of Glucose?", question_hi: "ग्लूकोज का आणविक सूत्र क्या है?", options: ["C6H12O6", "C12H22O11", "C6H6O6", "C6H10O5"], answer: "C6H12O6", attempted: false, selected: "" },
    { num: 31, question_en: "What is the SI unit of amount of substance?", question_hi: "पदार्थ की मात्रा की SI इकाई क्या है?", options: ["Mole", "Gram", "Kilogram", "Liter"], answer: "Mole", attempted: false, selected: "" },
    { num: 32, question_en: "What is the chemical symbol for Gold?", question_hi: "सोने का रासायनिक प्रतीक क्या है?", options: ["Au", "Ag", "Fe", "Cu"], answer: "Au", attempted: false, selected: "" },
    { num: 33, question_en: "What is the formula of Sulfuric Acid?", question_hi: "सल्फ्यूरिक एसिड का सूत्र क्या है?", options: ["H2SO4", "HCl", "HNO3", "H2CO3"], answer: "H2SO4", attempted: false, selected: "" },
    { num: 34, question_en: "What is the atomic number of Hydrogen?", question_hi: "हाइड्रोजन की परमाणु संख्या क्या है?", options: ["1", "2", "3", "4"], answer: "1", attempted: false, selected: "" },
    { num: 35, question_en: "What is the chemical formula of Methane?", question_hi: "मीथेन का रासायनिक सूत्र क्या है?", options: ["CH4", "C2H6", "C3H8", "C4H10"], answer: "CH4", attempted: false, selected: "" },
    { num: 36, question_en: "What is the pH of an acidic solution?", question_hi: "एक अम्लीय विलयन का pH क्या होता है?", options: ["Less than 7", "7", "Greater than 7", "14"], answer: "Less than 7", attempted: false, selected: "" },
    { num: 37, question_en: "What is the valency of Nitrogen?", question_hi: "नाइट्रोजन की संयोजकता क्या है?", options: ["3", "5", "2", "4"], answer: "3", attempted: false, selected: "" },
    { num: 38, question_en: "What is the formula of Ammonia?", question_hi: "अमोनिया का सूत्र क्या है?", options: ["NH3", "NH4", "N2H4", "N2O"], answer: "NH3", attempted: false, selected: "" },
    { num: 39, question_en: "What is the molecular formula of Ethanol?", question_hi: "एथेनॉल का आणविक सूत्र क्या है?", options: ["C2H5OH", "CH3OH", "C3H7OH", "C4H9OH"], answer: "C2H5OH", attempted: false, selected: "" },
    { num: 40, question_en: "What is the chemical symbol for Silver?", question_hi: "चांदी का रासायनिक प्रतीक क्या है?", options: ["Ag", "Au", "Fe", "Cu"], answer: "Ag", attempted: false, selected: "" },
    { num: 41, question_en: "What is the formula of Nitric Acid?", question_hi: "नाइट्रिक एसिड का सूत्र क्या है?", options: ["HNO3", "HCl", "H2SO4", "H2CO3"], answer: "HNO3", attempted: false, selected: "" },
    { num: 42, question_en: "What is the atomic number of Oxygen?", question_hi: "ऑक्सीजन की परमाणु संख्या क्या है?", options: ["8", "6", "7", "9"], answer: "8", attempted: false, selected: "" },
    { num: 43, question_en: "What is the chemical formula of Carbon Dioxide?", question_hi: "कार्बन डाइऑक्साइड का रासायनिक सूत्र क्या है?", options: ["CO2", "CO", "C2O", "C2O2"], answer: "CO2", attempted: false, selected: "" },
    { num: 44, question_en: "What is the pH of a basic solution?", question_hi: "एक क्षारीय विलयन का pH क्या होता है?", options: ["Greater than 7", "7", "Less than 7", "0"], answer: "Greater than 7", attempted: false, selected: "" },
    { num: 45, question_en: "What is the valency of Chlorine?", question_hi: "क्लोरीन की संयोजकता क्या है?", options: ["1", "2", "3", "4"], answer: "1", attempted: false, selected: "" },
    { num: 46, question_en: "What is the formula of Hydrochloric Acid?", question_hi: "हाइड्रोक्लोरिक एसिड का सूत्र क्या है?", options: ["HCl", "H2SO4", "HNO3", "H2CO3"], answer: "HCl", attempted: false, selected: "" },

    // Mathematics Questions (47-70)
    { num: 47, question_en: "What is the value of \( \\sin(90^\\circ) \)?", question_hi: "\( \\sin(90^\\circ) \) का मान क्या है?", options: ["1", "0", "0.5", "2"], answer: "1", attempted: false, selected: "" },
    { num: 48, question_en: "What is the derivative of \( x^2 \)?", question_hi: "\( x^2 \) का अवकलन क्या है?", options: ["2x", "x", "2", "0"], answer: "2x", attempted: false, selected: "" },
    { num: 49, question_en: "What is the value of \( \\log_{10}(100) \)?", question_hi: "\( \\log_{10}(100) \) का मान क्या है?", options: ["2", "1", "10", "100"], answer: "2", attempted: false, selected: "" },
    { num: 50, question_en: "What is the area of a circle with radius \( r \)?", question_hi: "त्रिज्या \( r \) वाले वृत्त का क्षेत्रफल क्या है?", options: ["\( \\pi r^2 \)", "\( 2\\pi r \)", "\( \\pi r \)", "\( \\pi r^3 \)"], answer: "\( \\pi r^2 \)", attempted: false, selected: "" },
    { num: 51, question_en: "What is the value of \( \\tan(45^\\circ) \)?", question_hi: "\( \\tan(45^\\circ) \) का मान क्या है?", options: ["1", "0", "0.5", "2"], answer: "1", attempted: false, selected: "" },
    { num: 52, question_en: "What is the integral of \( \\sin(x) \)?", question_hi: "\( \\sin(x) \) का समाकलन क्या है?", options: ["-cos(x)", "cos(x)", "sin(x)", "-sin(x)"], answer: "-cos(x)", attempted: false, selected: "" },
    { num: 53, question_en: "What is the value of \( \\sqrt{64} \)?", question_hi: "\( \\sqrt{64} \) का मान क्या है?", options: ["8", "6", "10", "12"], answer: "8", attempted: false, selected: "" },
    { num: 54, question_en: "What is the formula for the volume of a sphere?", question_hi: "गोले के आयतन का सूत्र क्या है?", options: ["\( \\frac{4}{3}\\pi r^3 \)", "\( \\pi r^2 h \)", "\( \\frac{1}{3}\\pi r^2 h \)", "\( 2\\pi r \)"], answer: "\( \\frac{4}{3}\\pi r^3 \)", attempted: false, selected: "" },
    { num: 55, question_en: "What is the value of \( \\cos(0^\\circ) \)?", question_hi: "\( \\cos(0^\\circ) \) का मान क्या है?", options: ["1", "0", "0.5", "2"], answer: "1", attempted: false, selected: "" },
    { num: 56, question_en: "What is the value of \( \\frac{d}{dx}(e^x) \)?", question_hi: "\( \\frac{d}{dx}(e^x) \) का मान क्या है?", options: ["\( e^x \)", "\( x e^x \)", "\( e^{x+1} \)", "0"], answer: "\( e^x \)", attempted: false, selected: "" },
    { num: 57, question_en: "What is the value of \( \\sin(30^\\circ) \)?", question_hi: "\( \\sin(30^\\circ) \) का मान क्या है?", options: ["0.5", "1", "0.866", "0.707"], answer: "0.5", attempted: false, selected: "" },
    { num: 58, question_en: "What is the derivative of \( \\cos(x) \)?", question_hi: "\( \\cos(x) \) का अवकलन क्या है?", options: ["-sin(x)", "sin(x)", "cos(x)", "-cos(x)"], answer: "-sin(x)", attempted: false, selected: "" },
    { num: 59, question_en: "What is the value of \( \\log_{2}(8) \)?", question_hi: "\( \\log_{2}(8) \) का मान क्या है?", options: ["3", "2", "4", "1"], answer: "3", attempted: false, selected: "" },
    { num: 60, question_en: "What is the perimeter of a square with side length \( a \)?", question_hi: "भुजा लंबाई \( a \) वाले वर्ग का परिमाप क्या है?", options: ["4a", "2a", "a²", "a"], answer: "4a", attempted: false, selected: "" },
    { num: 61, question_en: "What is the value of \( \\tan(90^\\circ) \)?", question_hi: "\( \\tan(90^\\circ) \) का मान क्या है?", options: ["Undefined", "1", "0", "Infinity"], answer: "Undefined", attempted: false, selected: "" },
    { num: 62, question_en: "What is the integral of \( x^2 \)?", question_hi: "\( x^2 \) का समाकलन क्या है?", options: ["\( \\frac{x^3}{3} \)", "\( x^3 \)", "\( 2x \)", "\( \\frac{x^2}{2} \)"], answer: "\( \\frac{x^3}{3} \)", attempted: false, selected: "" },
    { num: 63, question_en: "What is the value of \( \\sqrt{144} \)?", question_hi: "\( \\sqrt{144} \) का मान क्या है?", options: ["12", "14", "16", "18"], answer: "12", attempted: false, selected: "" },
    { num: 64, question_en: "What is the formula for the area of a triangle?", question_hi: "त्रिभुज के क्षेत्रफल का सूत्र क्या है?", options: ["\( \\frac{1}{2}bh \)", "\( bh \)", "\( \\frac{1}{2}ab \\sin(C) \)", "Both A and C"], answer: "Both A and C", attempted: false, selected: "" },
    { num: 65, question_en: "What is the value of \( \\cos(60^\\circ) \)?", question_hi: "\( \\cos(60^\\circ) \) का मान क्या है?", options: ["0.5", "1", "0.866", "0.707"], answer: "0.5", attempted: false, selected: "" },
    { num: 66, question_en: "What is the value of \( \\frac{d}{dx}(\\ln(x)) \)?", question_hi: "\( \\frac{d}{dx}(\\ln(x)) \) का मान क्या है?", options: ["\( \\frac{1}{x} \)", "\( x \)", "\( \\ln(x) \)", "0"], answer: "\( \\frac{1}{x} \)", attempted: false, selected: "" },
    { num: 67, question_en: "What is the value of \( \\sin(0^\\circ) \)?", question_hi: "\( \\sin(0^\\circ) \) का मान क्या है?", options: ["0", "1", "0.5", "Undefined"], answer: "0", attempted: false, selected: "" },
    { num: 68, question_en: "What is the derivative of \( \\tan(x) \)?", question_hi: "\( \\tan(x) \) का अवकलन क्या है?", options: ["\( \\sec^2(x) \)", "\( \\sec(x) \)", "\( \\tan^2(x) \)", "\( \\cos(x) \)"], answer: "\( \\sec^2(x) \)", attempted: false, selected: "" },
    { num: 69, question_en: "What is the value of \( \\log_{10}(1) \)?", question_hi: "\( \\log_{10}(1) \) का मान क्या है?", options: ["0", "1", "10", "Undefined"], answer: "0", attempted: false, selected: "" },
    { num: 70, question_en: "What is the circumference of a circle with radius \( r \)?", question_hi: "त्रिज्या \( r \) वाले वृत्त की परिधि क्या है?", options: ["\( 2\\pi r \)", "\( \\pi r^2 \)", "\( \\pi r \)", "\( 2r \)"], answer: "\( 2\\pi r \)", attempted: false, selected: "" },
];

let currentQuestion = 0;
let language = "en"; // Default English
const circlesPerPage = 70; // Number of circles to display per page
let currentCirclePage = 0; // Current page of circles

function loadQuestion(index) {
    const questionText = language === "en" ? questions[index].question_en : questions[index].question_hi;
    document.getElementById("question").textContent = `${questions[index].num}. ${questionText}`;
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

    // Calculate the range of circles to display
    const start = currentCirclePage * circlesPerPage;
    const end = Math.min(start + circlesPerPage, questions.length);

    // Display circles for the current page
    for (let i = start; i < end; i++) {
        const q = questions[i];
        let status = i === currentQuestion ? "active" : q.attempted ? "answered" : "not-attempted";
        circleContainer.innerHTML += `<div class="circle ${status}" onclick="jumpToQuestion(${i})">${i + 1}</div>`;
    }

    // Add pagination controls for circles
    // circleContainer.innerHTML += `
    //     <div class="pagination-controls">
    //         <button onclick="prevCirclePage()" ${currentCirclePage === 0 ? "disabled" : ""}>Previous</button>
    //         <button onclick="nextCirclePage()" ${end >= questions.length ? "disabled" : ""}>Next</button>
    //     </div>
    // `;
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

window.onload = () => {
    loadQuestion(currentQuestion);
};