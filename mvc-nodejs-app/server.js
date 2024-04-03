// server.js
const express = require('express');
const bodyParser = require('body-parser');

const taskController = require('./controllers/taskController');
const userController = require('./controllers/userController');

const app = express();
const PORT = 3003;

app.use(bodyParser.json());

// Task routes
app.get('/tasks', taskController.getAllTasks);
app.post('/tasks', taskController.createTask);

// User routes
app.get('/users', userController.getAllUsers);
app.post('/users', userController.createUser);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
