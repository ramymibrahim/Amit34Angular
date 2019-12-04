export class ToDo {
    id:number;
    name:string;
    dueDate:Date;
    isCompleted?:boolean;

    public constructor(){
        this.isCompleted=false;
    }
}
