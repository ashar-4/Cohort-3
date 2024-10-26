const bcrypt = require("bcrypt");
const express = require("express");
const jwt = require("jsonwebtoken");
const { UserModel, TodoModel } = require("./db");
const { JWT_SECRET, auth } = require("./auth");
const mongoose = require("mongoose");
const { z } = require("zod");

mongoose.connect("mongodb+srv://ashar_:Ashish%40004@cluster0.dtjys.mongodb.net/todo-app-database");
const app = express();

app.use(express.json());

app.get("/", function (req, res) {
    res.sendFile(__dirname + "/public/index.html");
})

const passwordValidation = new RegExp(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/);

app.post("/signup", async function (req, res) {
    const requiredBody = z.object({
        email: z.string().email().min(5).max(100),
        password: z.string().min(5).max(30).regex(passwordValidation),
        name: z.string().min(5).max(100)
    });

    // Input validations

    // The following function parse() will throw an error if any input validations fail,
    // so we'll have to put it in a try-catch block, so instead we use safeParse
    // const parsedData = requiredBody.parse(req.body);
    const parsedDataWithSuccess = requiredBody.safeParse(req.body);
    if (!parsedDataWithSuccess.success) {
        console.log("Inside if condition");
        console.log(parsedDataWithSuccess.error);
        res.status(422).json({
            message: "Incorrect input!",
            error: parsedDataWithSuccess.error
        });
        return;
    }

    const email = req.body.email;
    const password = req.body.password;
    const name = req.body.name;

    let errorRaised = false
    try{
        const hashedPassword = await bcrypt.hash(password, 5);
        console.log(hashedPassword);

        await UserModel.create({
            email: email,
            password: hashedPassword,
            name: name
        });
    } catch (e) {
        errorRaised = true;
        res.status(400).json({
            message: "Email already exists!"
        });
    }
    // we are using errorRaised flag to ensure that only one response is sent from one request endpoint, 
    // if we try to send >1 response from a single request endpoint then our server will crash
    if(!errorRaised) {
        res.json({
            message: "You are signed up!"
        });
    }
});

app.post("/login", async function (req, res) {
    const email = req.body.email;
    const password = req.body.password;

    const user = await UserModel.findOne({
        email: email,
    });

    if (!user) {
        res.status(403).json({
            message: "User not found!"
        });
    }
    const passwordMatched = await bcrypt.compare(password, user.password);
    if (passwordMatched) {
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