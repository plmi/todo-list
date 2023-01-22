import { Component, EventEmitter, Input, Output } from '@angular/core';
import { firstValueFrom } from 'rxjs';
import { TodoService } from 'src/app/core/services/todo.service';
import { TodoItem } from 'src/app/shared/models/todo-item';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss']
})
export class TodoListItemComponent {
  @Input()
  public item!: TodoItem;

  @Output()
  public deleted: EventEmitter<void> = new EventEmitter();

  constructor(private _todoService: TodoService) { }

  public async onDelete(id: number): Promise<void> {
    await firstValueFrom(this._todoService.deleteTodoIdem(id));
    this.deleted.emit();
  }

  public async onDoneStateChanged(id: number, done: boolean) {
    await firstValueFrom(this._todoService.updateDone({id, done}));
  }
}
