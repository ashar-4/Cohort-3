
// let ctr = 0;

// setInterval(myCallback, 1000);

// function myCallback() {
//     document.querySelectorAll("h4")[1].innerHTML = ctr.toString() + ". Go out to eat"
//     ctr++;
// }

let index = 0;

function deleteTodo(index) {
    console.log(index);
    const element = document.getElementById("todo-" + index);
    element.parentNode.removeChild(element);
}

function addTodo() {
    let divElement = document.createElement("div");
    divElement.className = "todo-list";
    divElement.id = "todo-" + index;
    
    let h4Element = document.createElement("h4");
    h4Element.innerHTML = document.getElementById("addTodoField").value;

    let buttonElement = document.createElement("button");
    buttonElement.innerHTML = "Delete";
    buttonElement.setAttribute("class", "deleteButton");
    buttonElement.setAttribute("onclick", "deleteTodo(" + index + ")")

    divElement.appendChild(h4Element);
    divElement.appendChild(buttonElement);

    if (document.getElementsByClassName(".todo-list").length == 0) {
        document.querySelectorAll("div")[0].appendChild(divElement);
    }
    else {
        document.getElementById("todo-0").parentNode.appendChild(divElement);
    }
    index = index + 1;
}