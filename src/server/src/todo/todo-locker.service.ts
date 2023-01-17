import { Injectable } from "@nestjs/common";
import { ArgumentNullError } from "src/exceptions/argument-null";
import { TodoItemAlreadyDoneError as TodoItemAlreadyDoneError } from "src/exceptions/todo-item-already-done";
import { TodoItem } from "src/models/todo/todo-item";

@Injectable()
export class TodoLocker {
  public lockItem(todoItem: TodoItem): void {
    if (todoItem == null) {
      throw new ArgumentNullError('todoItem');
    }

    if (todoItem.done) {
      throw new TodoItemAlreadyDoneError(`Can't lock an already done item.`);
    }

    todoItem.locked = true;
  }
}