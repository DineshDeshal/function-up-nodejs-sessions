// taskController.js
const Task = require('../models/taskModel');

const tasks = [];

function getAllTasks(req, res) {
    res.send(tasks);
}

function createTask(req, res) {
    const { title, description } = req.body;
    const newTask = new Task(tasks.length + 1, title, description);
    tasks.push(newTask);
    res.status(201).send(newTask);
}

module.exports = {
    getAllTasks,
    createTask
};
