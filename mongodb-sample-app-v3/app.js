// npm install express mongodb body-parser nodemon
// app.js
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const DB_URI = 'mongodb+srv://vishal-thakre-db-1:aXP!Qdn8.r8Bm4b@democluster.a6ar2ia.mongodb.net/?retryWrites=true&w=majority&appName=demoCluster'

const app = express();
app.use(bodyParser.json());

const dbUri = DB_URI;

mongoose.connect(dbUri, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.error('Error connecting to MongoDB:', err));

// Importing Controllers
const taskController = require('./controllers/taskController');

// Routes
app.get('/tasks', taskController.getAllTasks);
app.get('/tasks/:id', taskController.getTaskById);
app.post('/tasks', taskController.createTask);
app.put('/tasks/:id', taskController.updateTask);
app.delete('/tasks/:id', taskController.deleteTask);

const PORT = 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
