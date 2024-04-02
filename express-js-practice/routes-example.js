const express = require('express');

const app = express();

app.use('/', (req, res, next) => {
    console.log("I am running.....");
    next();
})

app.use('/add-product', (req, res, next) => {
    console.log("I am in the first middleware");
    res.send("<h1>ADD PRODUCT ON THIS PAGE</h2>")
})

app.use('/', (req, res, next) => {
    console.log("I am in the second middleware");
    res.send("<h1>HELLO  FROM SECOND MIDDLEWARE</h2>")
})

app.listen(3000);