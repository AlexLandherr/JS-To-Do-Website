import {handleToDoClick} from "./handleToDoClick"
import {ToDo} from "./ToDoObjects"
import {handleNewTodo} from "./handleNewToDo"
import {handleToDoListSort} from "./handleToDoListSort";

//***Hard-coded todo items.***
//Creating ToDo objects.
let ToDo_0: ToDo = new ToDo("Perform warp core maintenance.", false);
let ToDo_1: ToDo = new ToDo("Purge plasma intake manifold.", false);
let ToDo_2: ToDo = new ToDo("Check EPS conduits.", false);
let ToDo_3: ToDo = new ToDo("Take the con.", false);

//Creating ToDo object array.
let toDoArray: ToDo[] = [ToDo_0, ToDo_1, ToDo_2, ToDo_3];

//Creating the HTML.
let ToDoItm_0: HTMLLIElement = document.createElement("li");
ToDoItm_0.setAttribute("id", "ToDoItm_0");
ToDoItm_0.addEventListener("click", () => {
    handleToDoClick("ToDoItm_0", toDoArray[0]);
})
ToDoItm_0.innerHTML = toDoArray[0].getToDoMsg;
document.getElementById("to-do-list").appendChild(ToDoItm_0);

let ToDoItm_1: HTMLLIElement = document.createElement("li");
ToDoItm_1.setAttribute("id", "ToDoItm_1");
ToDoItm_1.addEventListener("click", () => {
    handleToDoClick("ToDoItm_1", toDoArray[1]);
})
ToDoItm_1.innerHTML = toDoArray[1].getToDoMsg;
document.getElementById("to-do-list").appendChild(ToDoItm_1);

let ToDoItm_2: HTMLLIElement = document.createElement("li");
ToDoItm_2.setAttribute("id", "ToDoItm_2");
ToDoItm_2.addEventListener("click", () => {
    handleToDoClick("ToDoItm_2", toDoArray[2]);
})
ToDoItm_2.innerHTML = toDoArray[2].getToDoMsg;
document.getElementById("to-do-list").appendChild(ToDoItm_2);

let ToDoItm_3 = document.createElement("li");
ToDoItm_3.setAttribute("id", "ToDoItm_3");
ToDoItm_3.addEventListener("click", () => {
    handleToDoClick("ToDoItm_3", toDoArray[3]);
})
ToDoItm_3.innerHTML = toDoArray[3].getToDoMsg;
document.getElementById("to-do-list").appendChild(ToDoItm_3);

//Set all hardcoded todo items to red as default.
ToDoItm_0.style.backgroundColor = "red";
ToDoItm_1.style.backgroundColor = "red";
ToDoItm_2.style.backgroundColor = "red";
ToDoItm_3.style.backgroundColor = "red";

//***Adding a new todo item.***
document.getElementById("add-to-do").addEventListener("click", () => {
    handleNewTodo(toDoArray);
});

//Adding event listener for sorting the todo list.
document.getElementById("sort-btn").addEventListener("click", handleToDoListSort);