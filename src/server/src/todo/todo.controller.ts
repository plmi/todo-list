import { Controller, Get, HttpException, HttpStatus, Param, Put } from "@nestjs/common";
import { TodoItemAlreadyDoneError } from "src/exceptions/todo-item-already-done";
import { TodoItemNotFoundError } from "src/exceptions/todo-item-not-found";
import { TodoService } from "./todo.service";

@Controller('todo')
export class TodoController {
  constructor(
    private readonly todoService: TodoService
  ) {}

  @Get()
  getTodoItems() {
    return this.todoService.getTodoItems();
  }

  @Get(':id')
  getTodoItem(@Param() params) {
    try {
      return this.todoService.getTodoItemById(params.id);
    }
    catch (error) {
      if (error instanceof TodoItemNotFoundError) {
        throw new HttpException(error.message, HttpStatus.NOT_FOUND);
      }

      throw error;
    }
  }

  @Put('lock/:id')
  lockItem(@Param() params): void {
    try {
      this.todoService.lockItem(params.id);
    }
    catch (error) {
      if (error instanceof TodoItemNotFoundError) {
        throw new HttpException(error.message, HttpStatus.NOT_FOUND);
      }

      if (error instanceof TodoItemAlreadyDoneError) {
        throw new HttpException(error.message, HttpStatus.BAD_REQUEST);
      }

      throw error;
    }
  }
}