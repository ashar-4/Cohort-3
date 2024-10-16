
let todos = [];

function addTodo() {
    todos.push({
        title: document.querySelector("input").value
    });
    render();
}

function deleteTodo(i) {
    todos.splice(i, 1);
    render();
}

function createDivComponent(i) {    
    let h4 = document.createElement("h4");
    h4.innerHTML = todos[i].title;

    let delButton = document.createElement("button");
    delButton.innerHTML = "Delete";
    delButton.setAttribute("onclick", "deleteTodo(" + i +")");

    let childDiv = document.createElement("div");
    childDiv.appendChild(h4);
    childDiv.appendChild(delButton);

    return childDiv;
}

function render() {
    let divEl = document.querySelector("#todo-list");
    divEl.innerHTML = "";
    for (let i = 0; i < todos.length; i++) {
        divEl.appendChild(createDivComponent(i));
    }
}