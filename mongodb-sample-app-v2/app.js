// npm install express mongodb body-parser nodemon
// app.js
const express = require('express');
const bodyParser = require('body-parser');
const { connectToDatabase } = require('./db');



const app = express();
app.use(bodyParser.json());

// Connect to the database
connectToDatabase()
    .then(() => {
        console.log('Connected to MongoDB');

        // Once connected, import controllers and define routes
        const taskController = require('./controllers/taskController');
        app.get('/tasks', taskController.getAllTasks);
        app.get('/tasks/:id', taskController.getTaskById);
        app.post('/tasks', taskController.createTask);
        app.put('/tasks/:id', taskController.updateTask);
        app.delete('/tasks/:id', taskController.deleteTask);

        const PORT = 3001;
        app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
    })
    .catch(err => {
        console.error('Error connecting to MongoDB:', err);
        process.exit(1); // Exit the process if there's an error connecting to the database
    });
