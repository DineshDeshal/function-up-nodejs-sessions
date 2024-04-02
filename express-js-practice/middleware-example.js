const http = require('http');

const express = require('express');

const app = express();

app.use((req, res, next) => {
    console.log("I am in the first middleware");
})

app.use((req, res, next) => {
    console.log("I am in the second middleware");
})

app.listen(3002);