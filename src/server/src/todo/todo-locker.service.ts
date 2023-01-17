import { Injectable } from "@nestjs/common";
import { ArgumentNullError } from "src/exceptions/argument-null";
import { TodoListItemAlreadyDoneError as TodoItemAlreadyDoneError } from "src/exceptions/todo-item-already-done";
import { TodoItem } from "src/models/todo/todo-item";

@Injectable()
export class TodoLocker {
  public lockItem(todoListItem: TodoItem): void {
    if (todoListItem == null) {
      throw new ArgumentNullError('todoListItem');
    }

    if (todoListItem.done) {
      throw new TodoItemAlreadyDoneError(`Can't lock an already done item.`);
    }

    todoListItem.locked = true;
  }
}