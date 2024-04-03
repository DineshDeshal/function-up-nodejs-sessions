const express = require('express');
const app = express();
const bodyParser = require('body-parser');

// Middleware to parse JSON bodies
app.use(bodyParser.json());

// GET - Get data
// POST - push new data
// PUT - modify existing data
// DELETE - delete existing data

// --save
// --save-dev

// Mock database (for demonstration purposes)
const tasks = [];
const users = [];

// POST endpoint for creating a new task
app.post('/api/tasks', (req, res) => {
    const { title, description } = req.body; //payload

    // Validate request body
    if (!title || !description) {
        return res.status(400).json({ error: 'Title and description are required' });
    }

    // Create a new task
    const newTask = {
        id: tasks.length + 1,
        title,
        description
    };

    // Add the new task to the mock database
    tasks.push(newTask);

    // Respond with the newly created task
    res.send(newTask);
});

app.get('/api/tasks', (req, res) => {
    res.send(tasks);
});

// POST endpoint for creating a new user
app.post('/api/users', (req, res) => {
    const { username, email } = req.body;

    // Validate request body
    if (!username || !email) {
        return res.status(400).json({ error: 'Username and email are required' });
    }

    // Create a new user
    const newUser = {
        id: users.length + 1,
        username,
        email
    };

    // Add the new user to the mock database
    users.push(newUser);

    // Respond with the newly created user
    res.status(201).json(newUser);
});

// Start the server
const PORT = 3003;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
