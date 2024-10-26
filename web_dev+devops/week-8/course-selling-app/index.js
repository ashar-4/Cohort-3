const express = require("express");

const app = express();

app.use(express.json());

app.get("/", function (req, res) {
    res.send("Hi there");
})

app.post("/admin/signup", function (req, res) {
    const username = req.body.username;
    const password = req.body.password;
})

app.listen(3000);