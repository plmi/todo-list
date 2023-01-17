export class TodoListItemAlreadyDoneError extends Error {
    public constructor(message: string) {
        super(message);
        this.name = 'TodoListItemAlreadyDone';
        this.message = message;
    }
}