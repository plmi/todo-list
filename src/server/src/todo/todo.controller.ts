import { Controller, Get, Param, Put } from "@nestjs/common";
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

  @Put(':id')
  lockItem(@Param() params): void {
    this.todoService.lockItem(params.id);
  }
}