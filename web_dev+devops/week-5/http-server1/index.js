const express = require('express');

const app = express();

app.use(express.json());

let requestCount = 0;

function requestCounter(req, res, next) {
    requestCount++;
    console.log(`Total number of requests = ${requestCount}`);
    next();
}

function loggerMiddleware(req, res, next) {
    console.log(req.method);
    console.log(new Date());
    console.log(req.hostname +  ":3000" + req.url);
    next();
}

app.get("/admin", function() {
    res.json({
        message: "Total number of requests on the server is " + requestCount
    });
});

app.use(requestCounter);
app.use(loggerMiddleware);

app.get("/multiply", /*requestCounter,*/ (req, res) => {
    // requestCounter()
    a = parseInt(req.query.a);
    b = parseInt(req.query.b);
    res.json({
        "result": a * b
    });
});

app.get("/add", /*requestCounter,*/ (req, res) => {
    // requestCounter()
    a = parseInt(req.query.a);
    b = parseInt(req.query.b);
    res.json({
        "result": a + b
    });
});

app.get("/add2/:a/:b", /*requestCounter,*/ (req, res) => {
    // requestCounter()
    a = parseInt(req.params.a);
    b = parseInt(req.params.b);
    res.json({
        "result": a + b
    });
});

app.get("/divide", /*requestCounter,*/ (req, res) => {
    // requestCounter()
    a = parseInt(req.query.a);
    b = parseInt(req.query.b);
    res.json({
        "result": a / b
    });
});

app.get("/subtract", /*requestCounter,*/ (req, res) => {
    // requestCounter()
    a = parseInt(req.query.a);
    b = parseInt(req.query.b);
    res.json({
        "result": a - b
    });
});

app.listen(3000);