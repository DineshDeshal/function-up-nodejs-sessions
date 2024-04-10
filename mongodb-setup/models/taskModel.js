const { getDB } = require("../db");

class TaskModel {
    constructor() {
        this.db = getDB();
    }
    async getAllTasks() {
        return this.db.collection('tasks').find().toArray();
    }
}

module.exports = TaskModel;