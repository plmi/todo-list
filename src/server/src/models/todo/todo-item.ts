export class TodoItemDto {
  public locked: boolean;
  public done: boolean;

  constructor(
    public id: number,
    public content: string,
    public priority: number) {
      this.locked = false;
      this.done = false;
  }
}