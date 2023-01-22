export class TodoItemDto {
  constructor(
    public id: number,
    public content: string,
    public done: boolean) { }
}
