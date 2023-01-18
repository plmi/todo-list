import { Injectable } from "@nestjs/common";
import { TodoItem } from "src/entities/todo-item.entity";
import { ArgumentNullError } from "src/exceptions/argument-null";
import { TodoItemAlreadyDoneError as TodoItemAlreadyDoneError } from "src/exceptions/todo-item-already-done";

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