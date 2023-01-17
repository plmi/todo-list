export class ArgumentNullError extends Error {
    public constructor(message: string) {
        super(message);
        this.name = 'ArgumentNull';
        this.message = message;
    }
}