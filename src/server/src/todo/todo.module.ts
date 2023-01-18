import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TodoItem } from 'src/entities/todo-item.entity';
import { TodoLocker } from './todo-locker.service';
import { TodoController } from './todo.controller';
import { TodoService } from './todo.service';

@Module({
  imports: [TodoModule, TypeOrmModule.forFeature([TodoItem])],
  controllers: [TodoController],
  providers: [TodoService, TodoLocker],
  exports: [TypeOrmModule]
})
export class TodoModule {}