export class TodoItemNotFoundError extends Error {
    public constructor(message: string) {
        super(message);
        this.name = 'TodoItemNotFound';
        this.message = message;
    }
}