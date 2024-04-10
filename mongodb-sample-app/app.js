const express = require('express');
const mongoConnect = require('./database');

const app = express();

app.use((req, res, next) => {
    console.log("I am in the first middleware");
    next();
})

app.use((req, res, next) => {
    res.send("<h1>HELLO  FROM SECOND MIDDLEWARE</h2>")
})

mongoConnect((resp) => {
    console.log(resp);
    app.listen(3003);
})