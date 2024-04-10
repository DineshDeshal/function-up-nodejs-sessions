// models/taskModel.js
const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String },
  completed: { type: Boolean, default: false }
});

module.exports = mongoose.model('Task', taskSchema);
