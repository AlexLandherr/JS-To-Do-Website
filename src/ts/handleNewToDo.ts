import {handleToDoClick} from "./handleToDoClick";
import {ToDo} from "./ToDoObjects";

export function handleNewTodo(array: ToDo[]): void {
    let toDoMsg: string = document.getElementById("to-do-msg").value; //Ignore warning for now.

    //Checks if the message text is of zero length.
    if(toDoMsg.length === 0) {
        alert("Your todo message is too short, please try something longer.");
        return;
    }
    let newToDo: ToDo = new ToDo(toDoMsg, false);
    array.push(newToDo);

    //Creates new li element representing todo item.
    let currentToDoIndex: number = array.length - 1;
    let newLIElement: HTMLLIElement = document.createElement("li");
    newLIElement.setAttribute("id", "ToDoItm_" + currentToDoIndex);
    newLIElement.addEventListener("click", () => {
        handleToDoClick("ToDoItm_" + currentToDoIndex, array[currentToDoIndex]);
    })
    newLIElement.innerHTML = array[currentToDoIndex].getToDoMsg;
    document.getElementById("to-do-list").appendChild(newLIElement);

    //Setting the newly created li element background color to red.
    newLIElement.style.backgroundColor = "red";
}