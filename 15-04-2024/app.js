const mongoose = require('mongoose');
const express = require('express');
const bodyParser = require('body-parser');
// package imports > file imports > variable imports

const app = express();

app.use(bodyParser.json());

// model
const userSchema = new mongoose.Schema({
    name: String,
    age: {
        type: Number,
    },
    email: String
})

const studentSchema = new mongoose.Schema({
    name: String,
    age: Number,
    email: String
})

const User = mongoose.model('User', userSchema);
const Student = mongoose.model('Student', studentSchema);

//users
// controllers
app.post('/user', async (req, res) => {
    try {
        const newUser = await User.insertMany(req.body);
        res.status(201).json(newUser)
    }
    catch (e) {
        res.status(500).json({ error: e.message })
    }
})

app.get('/users', async (req, res) => {
    // try-catch is used for debugging
    try {
        const users = await User.find();
        res.status(201).json(users)
    }
    catch (e) {
        res.status(500).json({ error: e.message })
    }
})

app.get('/user/:name', async (req, res) => {
    const user = await User.find({ name: req.params.name });
    if (user) {
        res.status(200).json(user);
    } else {
        res.status(500).send('User not found');
    }
})

app.put('/user/:name', async (req, res) => {
    try {
        const updatedUser = await User.updateOne({ name: req.params.name }, { $set: req.body });
        res.status(200).json(updatedUser);
    }
    catch (e) {
        res.status(500).send('User not found');
    }

})

app.delete('/user/:name', async (req, res) => {
    try {
        const deletedUser = await User.deleteOne({ name: req.params.name });
        res.status(200).json(deletedUser);
    }
    catch (e) {
        res.status(500).send('User not found');
    }
})

app.post('/users', async (req, res) => {
    try {
        const newUsers = await User.insertMany(req.body.users);
        res.status(200).json(newUsers);
    }
    catch (e) {
        res.status(500).send('User not found');
    }
})

// deleteMany
// updateMany

// make it full fledged MVC app


mongoose.connect(
    'mongodb+srv://vishal-thakre-db-1:4xOGV3cHrhPZf9yj@democluster.a6ar2ia.mongodb.net/users?retryWrites=true&w=majority&appName=demoCluster'
).then(result => {
    app.listen(3000);
}).catch(e => {
    console.log(e);
})


