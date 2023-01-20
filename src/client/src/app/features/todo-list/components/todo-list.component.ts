import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject, switchMap, takeUntil, tap } from 'rxjs';
import { TodoService } from 'src/app/core/services/todo.service';
import { TodoItem } from 'src/app/shared/models/todo-item';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit, OnDestroy {
  protected readonly destroyed = new Subject<void>();

  public todoItems: TodoItem[] = [];
  public refresh$ = new Subject<void>();

  constructor(private _todoService: TodoService) {
    this.refresh$.pipe(
      switchMap(() => this._todoService.getTodoItems()),
      takeUntil(this.destroyed))
    .subscribe((todoItems) => {
      this.todoItems = todoItems;
    });
  }

  public ngOnInit(): void {
    this.refresh$.next();
  }

  public ngOnDestroy(): void {
    this.destroyed.next();
    this.destroyed.complete();
  }

  public onCreated(): void {
    this.refresh$.next();
  }
}
