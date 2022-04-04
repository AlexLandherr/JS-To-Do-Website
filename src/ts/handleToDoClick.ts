import {ToDo} from "./ToDoObjects";

export function handleToDoClick(listItemID: string, toDoObj: ToDo): void {
    let color: HTMLElement = document.getElementById(listItemID);
    let bgColor: string = color.style.backgroundColor;
    color.style.backgroundColor = bgColor === "red" ? "green" : "red";
    toDoObj.setIsCompleted = toDoObj.getIsCompleted === false ? true : false;
}