const express = require("express");
const jwt = require("jsonwebtoken");
const { UserModel, TodoModel } = require("./db");
const { JWT_SECRET, auth } = require("./auth");
const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://ashar_:Ashish%40004@cluster0.dtjys.mongodb.net/todo-app-database");
const app = express();

app.use(express.json());

app.get("/", function (req, res) {
    res.sendFile(__dirname + "/public/index.html");
    res.sendFile(__dirname + "/public/style.css");
})

app.post("/signup", async function (req, res) {
    const email = req.body.email;
    const password = req.body.password;
    const name = req.body.name;

    await UserModel.create({
        email: email,
        password: password,
        name: name
    });

    res.json({
        message: "You are signed up!"
    });
});

app.post("/login", async function (req, res) {
    const email = req.body.email;
    const password = req.body.password;

    const user = await UserModel.findOne({
        email: email,
        password: password
    });

    console.log(user);

    if (user) {
        const token = jwt.sign({
            id: user._id
        }, JWT_SECRET);
        
        res.setHeader('authorization', token)
        .json({
            message: "User signed in successfully!"
        });
    } else {
        res.status(403).json({
            message: "Invalid credentials!!"
        });
    }
});

app.post("/todo", auth, async function (req, res) {
    const title = req.body.title;
    const done = req.body.done;
    await TodoModel.create({
        title: title,
        done: done,
        userId: req.userId
    });

    res.json({
        message: "Todo posted successfully"
    });
});

app.get("/todos", auth, async function (req, res) {
    const userId = req.userId;
    const todos = await TodoModel.find({userId: userId});
    res.json({
        todos: todos
    });
});

app.listen(3000);