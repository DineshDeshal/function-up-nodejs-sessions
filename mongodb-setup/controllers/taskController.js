const TaskModel = require("../models/taskModel");

const taskModel = new TaskModel();

exports.getAllTasks = async (req, res) => {
    try {
        const tasks = await taskModel.getAllTasks();
        res.json(tasks);
    }
    catch (e) {
        console.error(e);
    }
}