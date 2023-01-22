import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { TodoItem } from "src/entities/todo-item.entity";
import { TodoItemNotFoundError } from "src/exceptions/todo-item-not-found";
import { Repository } from "typeorm";
import { TodoItemDto } from "./dto/todo-item.dto";
import { UpdateDoneDto } from "./dto/update-done.dto";

@Injectable()
export class TodoService {
  constructor(
    @InjectRepository(TodoItem)
    private readonly todoItemRepository: Repository<TodoItem>) { }

  public async getTodoItems(): Promise<TodoItemDto[]> {
    return await this.todoItemRepository.find().then(entities => {
      return entities.map(x => {
        return new TodoItemDto(x.id, x.content, x.done);
      });
    });
  }

  public async getTodoItemById(id: number): Promise<TodoItemDto> {
    const item = await this.todoItemRepository.findOneBy({id});

    if (item === null) {
      throw new TodoItemNotFoundError(`Can't find item with id ${id}`);
    }

    // TODO: add mapper
    return new TodoItemDto(item!.id, item!.content, item!.done);
  }

  public async createTodoItem(item: TodoItemDto): Promise<void> {
    const entity = new TodoItemDto(item.id, item.content, false);

    await this.todoItemRepository.save(entity);
  }

  public async updateDoneState(updateDoneDto: UpdateDoneDto): Promise<void> {
    const entity = await this.todoItemRepository.findOneBy({id: updateDoneDto.id});

    if (entity === null) {
      throw new TodoItemNotFoundError(`Can't update done. Item with id ${updateDoneDto.id} not found.`);
    }

    entity.done = updateDoneDto.done;
    await this.todoItemRepository.update(entity.id, entity);
  }

  public async deleteTodoItem(id: number): Promise<void> {
    const item = await this.todoItemRepository.findOneBy({id});

    if (item === null) {
      throw new TodoItemNotFoundError(`Can't delete item. Item with id ${id} not found.`);
    }


    await this.todoItemRepository.remove(item as TodoItem);
  }
}
