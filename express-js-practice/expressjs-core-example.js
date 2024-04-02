const express = require('express');

const app = express();

app.use((req, res, next) => {
    console.log("I am in the first middleware");
    next();
})

app.use((req, res, next) => {
    console.log("I am in the second middleware");
    res.send("<h1>HELLO  FROM SECOND MIDDLEWARE</h2>")
})

app.listen(3000);