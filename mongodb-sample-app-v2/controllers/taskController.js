// controllers/taskController.js
const TaskModel = require('../models/taskModel');

const taskModel = new TaskModel();

exports.getAllTasks = async (req, res) => {
    try {
        const tasks = await taskModel.getAllTasks();
        res.json(tasks);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Server Error' });
    }
};

exports.getTaskById = async (req, res) => {
    const taskId = req.params.id;
    try {
        const task = await taskModel.getTaskById(taskId);
        if (!task) {
            return res.status(404).json({ error: 'Task not found' });
        }
        res.json(task);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Server Error' });
    }
};

exports.createTask = async (req, res) => {
    const taskData = req.body;
    try {
        const result = await taskModel.createTask(taskData);
        res.status(201).json(result);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Server Error' });
    }
};

exports.updateTask = async (req, res) => {
    const taskId = req.params.id;
    const newData = req.body;
    try {
        const result = await taskModel.updateTask(taskId, newData);
        if (result.modifiedCount === 0) {
            return res.status(404).json({ error: 'Task not found' });
        }
        res.json({ message: 'Task updated successfully' });
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Server Error' });
    }
};

exports.deleteTask = async (req, res) => {
    const taskId = req.params.id;
    try {
        const result = await taskModel.deleteTask(taskId);
        if (result.deletedCount === 0) {
            return res.status(404).json({ error: 'Task not found' });
        }
        res.json({ message: 'Task deleted successfully' });
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Server Error' });
    }
};
