// controllers/taskController.js
const Task = require('../models/taskModel');

exports.getAllTasks = async (req, res) => {
    try {
        const tasks = await Task.find();
        res.json(tasks);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Server Error' });
    }
};

exports.getTaskById = async (req, res) => {
    const taskId = req.params.id;
    try {
        const task = await Task.findById(taskId);
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
        const task = await Task.create(taskData);
        res.status(201).json(task);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Server Error' });
    }
};

exports.updateTask = async (req, res) => {
    const taskId = req.params.id;
    const newData = req.body;
    try {
        const task = await Task.findByIdAndUpdate(taskId, newData, { new: true });
        if (!task) {
            return res.status(404).json({ error: 'Task not found' });
        }
        res.json({ message: 'Task updated successfully', task });
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Server Error' });
    }
};

exports.deleteTask = async (req, res) => {
    const taskId = req.params.id;
    try {
        const task = await Task.findByIdAndDelete(taskId);
        if (!task) {
            return res.status(404).json({ error: 'Task not found' });
        }
        res.json({ message: 'Task deleted successfully', task });
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Server Error' });
    }
};
