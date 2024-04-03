// userController.js
const User = require('../models/userModel');

const users = [];

function getAllUsers(req, res) {
    res.send(users);
}

function createUser(req, res) {
    const { username, email } = req.body;
    const newUser = new User(users.length + 1, username, email);
    users.push(newUser);
    res.status(201).send(newUser);
}

module.exports = {
    getAllUsers,
    createUser
};
