import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TodoItem } from 'src/entities/todo-item.entity';
import { TodoController } from './todo.controller';
import { TodoService } from './todo.service';

@Module({
  imports: [TodoModule, TypeOrmModule.forFeature([TodoItem])],
  controllers: [TodoController],
  providers: [TodoService],
  exports: [TypeOrmModule]
})
export class TodoModule {}