import { Injectable } from "@nestjs/common";
import { TodoItemNotFoundError } from "src/exceptions/todo-item-not-found";
import { TodoItem } from "src/models/todo/todo-item";
import { TodoLocker } from "./todo-locker.service";

@Injectable()
export class TodoService {
  
  constructor(private readonly todoLocker: TodoLocker) { }

  public getTodoItems(): TodoItem[] {
    // TODO: add repository
    return Array.from(Array(3), (_, id) => {
      return new TodoItem(id, `Item ${id}`, id + 1)
    });
  }

  public lockItem(id: number): void {
    // TODO: add repository
    const item: TodoItem | undefined = this.getTodoItems().find(x => x.id == id);

    if (item === undefined) {
      throw new TodoItemNotFoundError(`Can't find item with id ${id}`);
    }

    this.todoLocker.lockItem(item);
  }
}
