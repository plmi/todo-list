import { Body, Controller, Delete, Get, HttpException, HttpStatus, Param, Post, Put } from "@nestjs/common";
import { TodoItemNotFoundError } from "src/exceptions/todo-item-not-found";
import { TodoItemDto } from "./dto/todo-item.dto";
import { UpdateDoneDto } from "./dto/update-done.dto";
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
      // TODO: implement proper error handling:
      // https://docs.nestjs.com/exception-filters
      if (error instanceof TodoItemNotFoundError) {
        throw new HttpException(error.message, HttpStatus.NOT_FOUND);
      }

      throw error;
    }
  }

  @Post()
  async createItem(@Body() item: TodoItemDto): Promise<void> {
    await this.todoService.createTodoItem(item);
  }

  @Put('done')
  public async updateDone(@Body() updateDoneDto: UpdateDoneDto): Promise<void> {
    try {
      await this.todoService.updateDoneState(updateDoneDto);
    }
    catch (error) {
      if (error instanceof TodoItemNotFoundError) {
        throw new HttpException(error.message, HttpStatus.NOT_FOUND);
      }
    }
  }

  @Delete(':id')
  public async deleteTodoItem(@Param() params): Promise<void> {
    try {
      await this.todoService.deleteTodoItem(params.id);
    }
    catch (error) {
      if (error instanceof TodoItemNotFoundError) {
        throw new HttpException(error.message, HttpStatus.NOT_FOUND);
      }

      throw error;
    }
  }
}