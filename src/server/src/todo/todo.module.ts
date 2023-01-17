import { Module } from '@nestjs/common';
import { TodoLocker } from './todo-locker.service';
import { TodoController } from './todo.controller';
import { TodoService } from './todo.service';

@Module({
  imports: [TodoModule],
  controllers: [TodoController],
  providers: [TodoService, TodoLocker],
})
export class TodoModule {}
