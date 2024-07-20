const express = require('express');
const app = express();
const port = 3000;

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

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
});
