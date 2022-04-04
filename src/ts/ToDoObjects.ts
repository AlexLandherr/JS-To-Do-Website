export class ToDo {
    toDoMsg: string;
    isCompleted: boolean;

    constructor(msg: string, status: boolean) {
        this.toDoMsg = msg;
        this.isCompleted = status;
    }

    public set setToDoMsg(text: string) {
        this.toDoMsg = text;
    }
    
    public get getToDoMsg(): string {
        return this.toDoMsg;
    }

    public set setIsCompleted(completion: boolean) {
        this.isCompleted = completion;
    }

    
    public get getIsCompleted(): boolean {
        return this.isCompleted;
    }
    
}