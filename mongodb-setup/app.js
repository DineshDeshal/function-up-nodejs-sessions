const express = require('express');
const { connectToDatabase, getDB } = require('./db');

const app = express();

async function getAllTasks(db) {
    return await db.collection('tasks').find().toArray();
}

connectToDatabase()
    .then(
        () => {
            console.log('Connected to mongodb');
            app.use('/', (req, resp, next) => {
                let db = getDB();
                const tasks = getAllTasks(db);
                resp.json(tasks);
            })
            app.listen(3001);
        }
    )
    .catch(e =>
        console.log('Error connecting DB')
    );
