import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { TodoItem } from "src/entities/todo-item.entity";
import { TodoItemNotFoundError } from "src/exceptions/todo-item-not-found";
import { TodoItemDto } from "src/models/todo/todo-item";
import { Repository } from "typeorm";
import { TodoLocker } from "./todo-locker.service";

@Injectable()
export class TodoService {
  constructor(
    private readonly todoLocker: TodoLocker,
    @InjectRepository(TodoItem)
    private readonly todoItemRepository: Repository<TodoItem>) { }

  public async getTodoItems(): Promise<TodoItemDto[]> {
    return await this.todoItemRepository.find().then(entities => {
      return entities.map(x => {
        return new TodoItemDto(x.id, x.content, x.priority);
      });
    });
  }

  public async getTodoItemById(id: number): Promise<TodoItemDto> {
    const item = await this.todoItemRepository.findOneBy({id});

    if (item === null) {
      throw new TodoItemNotFoundError(`Can't find item with id ${id}`);
    }

    // TODO: add mapper
    return new TodoItemDto(item!.id, item!.content, item!.priority);
  }

  public async lockTodoItem(id: number): Promise<void> {
    const entity = await this.getTodoItemById(id);

    this.todoLocker.lockItem(entity);
    await this.todoItemRepository.save(entity);
  }

  public async createTodoItem(item: TodoItemDto): Promise<void> {
    const entity = new TodoItemDto(item.id, item.content, item.priority || 0);

    await this.todoItemRepository.save(entity);
  }

  public async deleteTodoItem(id: number): Promise<void> {
    const item = await this.todoItemRepository.findOneBy({id});

    if (item === null) {
      throw new TodoItemNotFoundError(`Can't find item with id ${id}`);
    }


    await this.todoItemRepository.remove(item as TodoItem);
  }
}
