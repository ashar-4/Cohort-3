const {Command} = require('commander');
const fs = require('fs');

const program = new Command();

program.name('todo')
    .description("Add/ Update/ Delete/ Read to ToDo!")
    .version("0.0.1");


function addTodo(contents) {
    let newContent = {
        "todo": contents
    };

    fileContents = JSON.parse(fs.readFileSync("todo.json", "utf-8"));
    if (fileContents.length == 0) {
        fileContents = [];
    }
    fileContents.push(newContent);
    fs.writeFileSync("todo.json", JSON.stringify(fileContents, null, 2));
}

function updateTodo() {

}

function deleteTodo(content) {
    fileContents = JSON.parse(fs.readFileSync("todo.json", "utf-8"));
    for (let i = 0; i < fileContents.length; i++) {
        if (content == fileContents[i].todo) {
            fileContents.splice(i, 1);
            break;
        }
    }
    fs.writeFileSync("todo.json", JSON.stringify(fileContents, null, 2));
}

function readTodo() {
    fileContents = JSON.parse(fs.readFileSync("todo.json", "utf-8"));
    console.log(fileContents);
}

program.command('todo')
    .argument('<op>', "The operation to perform")
    .argument('<contents>', "The content to be added")
    .argument('<new_content>', "New content to update the old one")
    .action((op, contents, new_content) => {
        switch(op) {
            case "add":
                addTodo(contents);
            case "update":
                updateTodo(contents, new_content);
            case "delete":
                deleteTodo(contents);
            case "read":
                readTodo();
        }
    })
    .parse();