const express = require('express');
const { connectToDatabase, getDB } = require('./db');
const taskController = require('./controllers/taskController')

const app = express();

connectToDatabase()
    .then(
        () => {
            console.log('Connected to mongodb');
            app.use('/', (req, res, next) => {
                console.log("IM IN /");
            })
            app.get('/tasks', taskController.getAllTasks)
            app.listen(3001);
        }
    )
    .catch(e =>
        console.log('Error connecting DB')
    );
