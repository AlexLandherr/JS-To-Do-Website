import {handleToDoClick} from "./handleToDoClick"

//Hard-coded todo items.
let ToDoItm_1: HTMLLIElement = document.createElement("li");
ToDoItm_1.setAttribute("id", "ToDoItm_1");
ToDoItm_1.addEventListener("click", () => {
    handleToDoClick("ToDoItm_1");
})
ToDoItm_1.innerHTML = "Perform warp core maintenance.";
document.getElementById("to-do-list").appendChild(ToDoItm_1);

let ToDoItm_2: HTMLLIElement = document.createElement("li");
ToDoItm_2.setAttribute("id", "ToDoItm_2");
ToDoItm_2.addEventListener("click", () => {
    handleToDoClick("ToDoItm_2");
})
ToDoItm_2.innerHTML = "Purge plasma intake manifold.";
document.getElementById("to-do-list").appendChild(ToDoItm_2);

let ToDoItm_3: HTMLLIElement = document.createElement("li");
ToDoItm_3.setAttribute("id", "ToDoItm_3");
ToDoItm_3.addEventListener("click", () => {
    handleToDoClick("ToDoItm_3");
})
ToDoItm_3.innerHTML = "Check EPS conduits.";
document.getElementById("to-do-list").appendChild(ToDoItm_3);

let ToDoItm_4 = document.createElement("li");
ToDoItm_4.setAttribute("id", "ToDoItm_4");
ToDoItm_4.addEventListener("click", () => {
    handleToDoClick("ToDoItm_4");
})
ToDoItm_4.innerHTML = "Take the con.";
document.getElementById("to-do-list").appendChild(ToDoItm_4);

//Set all hardcoded todo items to red as default.
ToDoItm_1.style.backgroundColor = "red";
ToDoItm_2.style.backgroundColor = "red";
ToDoItm_3.style.backgroundColor = "red";
ToDoItm_4.style.backgroundColor = "red";