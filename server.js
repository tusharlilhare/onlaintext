


// const express = require('express');
// const cors = require('cors');
// const path = require('path');

// const app = express();
// const port = 5000;

// app.use(express.json());
// app.use(cors());

// // Serve static files from public and root directory
// app.use(express.static(path.join(__dirname, 'public')));
// app.use(express.static(__dirname));

// // Route test folders dynamically
// const testFolders = [
//     '10th', '12th', 'jee', 'mppsc', 'neet', 'python',
//     'railway', 'ssc', 'technical&coding'
// ];

// testFolders.forEach(folder => {
//     app.get(`/${folder}`, (req, res) => {
//         res.sendFile(path.join(__dirname, `test/${folder}/index.html`));
//     });
// });

// // Default route
// app.get('/', (req, res) => {
//     res.sendFile(path.join(__dirname, 'onlain-index.html'));
// });







// // Serve JEE Test Files
// app.get('/jee/all-sub-tes-main', (req, res) => {
//     res.sendFile(path.join(__dirname, 'public/test/jee/all-sub-tes-main.html'));
// });

// app.get('/jee/JEE-Advanced', (req, res) => {
//     res.sendFile(path.join(__dirname, 'public/test/jee/JEE-Advanced.html'));
// });

// app.get('/jee/jee-main', (req, res) => {
//     res.sendFile(path.join(__dirname, 'public/test/jee/jee-main.html'));
// });

// app.get('/jee/test', (req, res) => {
//     res.sendFile(path.join(__dirname, 'public/test/jee/test.html'));
// });



// app.get('/jee/:file', (req, res) => {
//     const fileName = req.params.file;
//     res.sendFile(path.join(__dirname, `public/test/jee/${fileName}.html`));
// });


// // Start the server
// app.listen(port, () => {
//     console.log(`✅ Server running at http://localhost:${port}`);
// });




 ///

 // use code all 
// const express = require('express');
// const cors = require('cors');
// const path = require('path');

// const app = express();
// const port = 5000;

// app.use(express.json());
// app.use(cors());

// // ✅ Serve static files from 'public' and root directory
// app.use(express.static(path.join(__dirname, 'public')));
// app.use(express.static(__dirname));

// // ✅ Route test folders dynamically (if you have index.html inside)
// const testFolders = [
//     '10th', '12th', 'jee', 'mppsc', 'neet', 'python',
//     'railway', 'ssc', 'technical&coding'
// ];

// testFolders.forEach(folder => {
//     app.get(`/test/${folder}`, (req, res) => {
//         res.sendFile(path.join(__dirname, `public/test/${folder}/index.html`));
//     });
// });

// // ✅ Default route
// app.get('/', (req, res) => {
//     res.sendFile(path.join(__dirname, 'onlain-index.html'));
// });

// // ✅ JEE Test Files Routing Dynamically
// app.get('/jee/:file', (req, res) => {
//     const fileName = req.params.file;
//     res.sendFile(path.join(__dirname, `public/test/jee/${fileName}`));
// });







// // ✅ Example Category Page if needed
// app.get('/category', (req, res) => {
//     res.sendFile(path.join(__dirname, 'public/category.html'));
// });



// app.get('/jee/:file', (req, res) => {
//     const fileName = req.params.file;
//     res.sendFile(path.join(__dirname, `public/test/jee/te${test}`));
// });


// // ✅ Start the server
// app.listen(port, () => {
//     console.log(`✅ Server running at http://localhost:${port}`);
// });















const express = require('express');
const cors = require('cors');
const path = require('path');

const app = express();
const port = 5000;

app.use(express.json());
app.use(cors());

// ✅ Serve static files
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(__dirname));

// ✅ Home Route
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'onlain-index.html'));
});

// ✅ Category Page Route
app.get('/category', (req, res) => {
    res.sendFile(path.join(__dirname, 'category.html'));
});

// ✅ Result Pages Routes
app.get('/results', (req, res) => {
    res.sendFile(path.join(__dirname, 'results.html'));
});
app.get('/submit-test', (req, res) => {
    res.sendFile(path.join(__dirname, 'submit-test.html'));
});
app.get('/view-result', (req, res) => {
    res.sendFile(path.join(__dirname, 'view-result.html'));
});

// ✅ JEE Test Routes
app.get('/jee/:file', (req, res) => {
    const fileName = req.params.file;
    res.sendFile(path.join(__dirname, `public/test/jee/${fileName}`));
});

// ✅ NEET Test Routes
app.get('/neet/:file', (req, res) => {
    const fileName = req.params.file;
    res.sendFile(path.join(__dirname, `public/test/neet/${fileName}`));
});

// ✅ MPPSC Test Routes
app.get('/mppsc/:file', (req, res) => {
    const fileName = req.params.file;
    res.sendFile(path.join(__dirname, `public/test/mppsc/${fileName}`));
});

// ✅ Python Test Routes
app.get('/python/:file', (req, res) => {
    const fileName = req.params.file;
    res.sendFile(path.join(__dirname, `public/test/python/${fileName}`));
});

// ✅ Railway Test Routes
app.get('/railway/:file', (req, res) => {
    const fileName = req.params.file;
    res.sendFile(path.join(__dirname, `public/test/railway/${fileName}`));
});

// ✅ SSC Test Routes
app.get('/ssc/:file', (req, res) => {
    const fileName = req.params.file;
    res.sendFile(path.join(__dirname, `public/test/ssc/${fileName}`));
});

// ✅ Technical & Coding Test Routes
app.get('/technical&coding/:file', (req, res) => {
    const fileName = req.params.file;
    res.sendFile(path.join(__dirname, `public/test/technical&coding/${fileName}`));
});

// ✅ 10th Test Routes
app.get('/10th/:file', (req, res) => {
    const fileName = req.params.file;
    res.sendFile(path.join(__dirname, `public/test/10th/${fileName}`));
});

// ✅ 12th Test Routes
app.get('/12th/:file', (req, res) => {
    const fileName = req.params.file;
    res.sendFile(path.join(__dirname, `public/test/12th/${fileName}`));
});

// ✅ Start the server
app.listen(port, () => {
    console.log(`✅ Server running at http://localhost:${port}`);
});
