import { Component, EventEmitter, Output } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { firstValueFrom } from 'rxjs';
import { TodoService } from 'src/app/core/services/todo.service';
import { TodoForm } from './todo.form';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.scss']
})
export class TodoFormComponent {
  @Output() public created: EventEmitter<void>
  public todoForm: TodoForm;
  
  constructor(
    private _todoService: TodoService,
    private _toastrService: ToastrService) {
    this.todoForm = new TodoForm();
    this.created = new EventEmitter();
  }

  public async onSubmit(): Promise<void> {
    if (!this.todoForm.valid) {
      return;
    }

    await firstValueFrom(this._todoService.createTodoItem(this.todoForm.value));
    this._toastrService.success('Created todo item');
    this.created.emit();
    this.todoForm.reset();
  }
}
