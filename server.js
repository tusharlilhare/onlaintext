// const express = require('express');
// const cors = require('cors');
// const path = require('path');
// const app = express();
// const port = 5000;

// app.use(express.json());
// app.use(cors());
// app.use(express.static(path.join(__dirname, 'public')));


// app.get('/1test', (req, res) => {
//     res.sendFile(path.join(__dirname, 'public/python/1test.html'));
// });

// // Default route
// app.get('/', (req, res) => {
//     res.sendFile(path.join(__dirname, 'onlain-index.html'));
// });

// app.listen(port, () => {
//     console.log(`Server running at http://localhost:${port}`);
// });












const express = require('express');
const cors = require('cors');
const path = require('path');

const app = express();
const port = 5000;

app.use(express.json());
app.use(cors());
app.use(express.static(path.join(__dirname, 'public')));

// Function to create routes dynamically
const createRoute = (routePath, filePath) => {
    app.get(routePath, (req, res) => {
        res.sendFile(path.join(__dirname, filePath));
    });
};

// Define all test-related routes
const testFolders = [
    '10th', '12th', 'jee', 'mppsc', 'neet', 'python',
    'railway', 'ssc', 'technical&coding'
];

testFolders.forEach(folder => {
    createRoute(`/${folder}`, `test/${folder}/index.html`);
});

// Define routes for other HTML files
const htmlFiles = [
    'results.html',
    'submit-test.html',
    'view-result.html',
    'category.html'
];

htmlFiles.forEach(file => {
    createRoute(`/${file.replace('.html', '')}`, file);
});

// Default route
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'onlain-index.html'));
});

// Start server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
