const express = require('express');
const cors = require('cors');
const path = require('path');
const app = express();
const port = 5000;

app.use(express.json());
app.use(cors());
app.use(express.static(path.join(__dirname, 'public')));


app.get('/1test', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/python/1test.html'));
});

// Default route
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
