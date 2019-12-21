export class TodoModel {
    public label: string;
    public finished: boolean;

    constructor(todo: TodoModel) {
        this.label = todo.label;
        this.finished = todo.finished;
    }
}