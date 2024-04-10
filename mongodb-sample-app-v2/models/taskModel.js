// models/taskModel.js
const { getDB } = require('../db');

class TaskModel {
    constructor() {
        this.db = getDB();
    }

    async getAllTasks() {
        return await this.db.collection('tasks').find().toArray();
    }

    async getTaskById(id) {
        return await this.db.collection('tasks').findOne({ id: id });
    }

    async createTask(taskData) {
        return await this.db.collection('tasks').insertOne(taskData);
    }

    async updateTask(id, newData) {
        console.log(newData);
        return await this.db.collection('tasks').updateMany({ id: id }, { $set: newData });
    }

    async deleteTask(id) {
        return await this.db.collection('tasks').deleteOne({ _id: id });
    }
}

module.exports = TaskModel;
