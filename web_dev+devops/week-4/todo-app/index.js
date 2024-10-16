const fs = require('fs');
const express = require('express');

const app = express();

app.use(express.json());

app.post('/todo', function (req, res) {
    fs.readFile("todo.json", "utf-8", function(err, data) {
        if (data == "") {
            data = [];
        } else {
            data = JSON.parse(data);
        }
        
        let newTodo = {
            "id": req.body.id,
            "todo": req.body.todo
        }
        data.push(newTodo);
        fs.writeFile("todo.json", JSON.stringify(data), "utf-8", function() {});
    });
    res.send("Added new todo");
})

app.get('/todo', function (req, res) {
    fs.readFile("todo.json", "utf-8", function(err, data) {
        data = JSON.parse(data);
        res.json(data);
    });
})

app.put('/todo', function (req, res) {
    fs.readFile("todo.json", "utf-8", function(err, data) {
        data = JSON.parse(data);
        for (let i = 0; i < data.length; i++) {
            if (req.body.id == data[i].id) {
                data[i].todo = req.body.todo;
            }
        }
        fs.writeFile("todo.json", JSON.stringify(data), "utf-8", function() {});
        res.json(data);
    });
})

app.delete('/todo', function (req, res) {
    fs.readFile("todo.json", "utf-8", function(err, data) {
        data = JSON.parse(data);
        let i;
        for (i = 0; i < data.length; i++) {
            if (data[i].id == req.body.id)
                break;
        }
        if (i < data.length) {
            data.splice(i, 1);
            fs.writeFile("todo.json", JSON.stringify(data), "utf-8", function() {});
            res.json(data);
        }
        res.status(404).send("Todo not found!");
    });
})


app.listen(3000);   // which port