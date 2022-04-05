export function handleToDoListSort(): void {
    let languages: string[] = [];
    let items: HTMLCollectionOf<HTMLLIElement> = document.getElementsByTagName("li");
    for(let i: number = 0; i < items.length; i++) {
        languages.push(items[i].innerHTML);
    }
    languages.sort();
    for(let k: number = 0; k < items.length; k++) {
        items[k].innerHTML = languages[k];
    }
}