const express = require('express');
const app = express();
const port = 3000;

// Middleware to parse JSON bodies
app.use(express.json());

// Home route
app.get('/', (req, res) => {
    res.send('Welcome to the Home Page');
});

// About route
app.get('/about', (req, res) => {
    res.send('Welcome to the About Page');
});

// Contact route
app.get('/contact', (req, res) => {
    res.send('Welcome to the Contact Page');
});

// Route with parameters
app.get('/user/:id', (req, res) => {
    res.send(`User ID: ${req.params.id}`);
});

// Handle POST request
app.post('/user', (req, res) => {
    const user = req.body;
    res.send(`User ${user.name} added!`);
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
});

//middleware
/* const express = require('express');
const app = express();
const port = 3000;

// Middleware function to log request details
app.use((req, res, next) => {
    console.log(`${req.method} request for '${req.url}'`);
    next();
});

// Middleware to parse JSON bodies
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Welcome to the Home Page');
});

app.get('/about', (req, res) => {
    res.send('Welcome to the About Page');
});

app.get('/contact', (req, res) => {
    res.send('Welcome to the Contact Page');
});

app.get('/user/:id', (req, res) => {
    res.send(`User ID: ${req.params.id}`);
});

app.post('/user', (req, res) => {
    const user = req.body;
    res.send(`User ${user.name} added!`);
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
});
 */


//Error Handling

/* 
const express = require('express');
const app = express();
const port = 3000;

// Middleware to log request details
app.use((req, res, next) => {
    console.log(`${req.method} request for '${req.url}'`);
    next();
});

// Middleware to parse JSON bodies
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Welcome to the Home Page');
});

app.get('/about', (req, res) => {
    res.send('Welcome to the About Page');
});

app.get('/contact', (req, res) => {
    res.send('Welcome to the Contact Page');
});

app.get('/user/:id', (req, res) => {
    res.send(`User ID: ${req.params.id}`);
});

app.post('/user', (req, res) => {
    const user = req.body;
    res.send(`User ${user.name} added!`);
});

// Error-handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something broke!');
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
});

*/

