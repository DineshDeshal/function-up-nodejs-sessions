const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.json());

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true, //mandatory
        minlength: 5,
        maxlength: 20
    },
    email: {
        type: String,
        required: true, //mandatory
        unique: true,
        match: [/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, 'Invalid email format']
        // regex = regular expression
    },
    age: {
        type: Number,
        min: 18,
        max: 50,
        required: true //mandatory
    },
    status: {
        type: String,
        enum: ['active', 'inactive', 'failed'],
    },
    createdAt: {
        type: Date,
        default: Date.now()
    }
});

const User = mongoose.model('User', userSchema);

app.post('/user', async (req, res) => {
    try {
        const newUser = new User(req.body);
        await newUser.save();
        res.status(200).json(newUser);
    }
    catch (e) {
        res.status(500).json(e.message);
    }
});

app.get('/users', async (req, res) => {
    try {
        const { age, email } = req.query;

        const query = {};

        if (age) query.age = { $and: [{ $eq: 10 }, { $eq: 21 }] }; // age===10 && age ===21
        if (email) query.email = { $eq: email }


        const users = await User.find(query);
        res.status(200).json(users);
        // filter the data from valid documents
    }
    catch (e) {
        res.status(500).json(e.message);
    }
});

mongoose.connect('mongodb+srv://vishal-thakre-db-1:53y0CBVhOiPdpWEc@democluster.a6ar2ia.mongodb.net/users?retryWrites=true&w=majority&appName=demoCluster').then(res => {
    app.listen(3000);
    console.log("PORT IS RUNNING");
})
    .catch(e => {
        console.log(e)
    })