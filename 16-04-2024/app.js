const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.json());

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true //mandatory
    },
    email: String,
    age: {
        type: Number,
        min: 18,
        max: 50,
        required: true //mandatory
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
        res.status(500).json(e);
    }
});

mongoose.connect('mongodb+srv://vishal-thakre-db-1:53y0CBVhOiPdpWEc@democluster.a6ar2ia.mongodb.net/users?retryWrites=true&w=majority&appName=demoCluster').then(res => {
    app.listen(3000);
    console.log("PORT IS RUNNING");
})
    .catch(e => {
        console.log(e)
    })