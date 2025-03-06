const express = require('express');
const cors = require('cors');
const path = require('path');
const app = express();
const port = 5000;

app.use(express.json());
app.use(cors());
app.use(express.static(path.join(__dirname, 'public')));

let questions = [];

// सही रूट सेट करें
app.get('/1test', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/python/1test.html'));
});

// प्रश्न जोड़ने का API
app.post('/add-question', (req, res) => {
    const { question, options, answer, description } = req.body;
    if (question && options && answer) {
        questions.push({ question, options, answer, description });
        res.json({ message: 'प्रश्न सफलतापूर्वक जोड़ा गया!' });
    } else {
        res.status(400).json({ message: 'सभी फ़ील्ड आवश्यक हैं!' });
    }
});

// सभी प्रश्न लोड करने का API
app.get('/questions', (req, res) => {
    res.json(questions);
});

// उत्तर सबमिट करने का API
app.post('/submit-answers', (req, res) => {
    const { answers } = req.body;
    let correctCount = 0;
    const result = questions.map((q, index) => {
        const isCorrect = q.answer === answers[index];
        if (isCorrect) correctCount++;
        return { question: q.question, isCorrect, description: q.description };
    });
    const rank = `${correctCount} / ${questions.length}`;
    res.json({ rank, result });
});

// Default route
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});