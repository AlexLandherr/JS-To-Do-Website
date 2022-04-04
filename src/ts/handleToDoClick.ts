export function handleToDoClick(listItemID: string): void {
    let color: HTMLElement = document.getElementById(listItemID);
    let bgColor: string = color.style.backgroundColor;
    color.style.backgroundColor = bgColor === "red" ? "green" : "red";
}