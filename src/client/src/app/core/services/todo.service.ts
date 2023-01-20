import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { TodoItem } from "src/app/shared/models/todo-item";

@Injectable({providedIn: 'root'})
export class TodoService {
  private readonly _endpoint: string = 'http://localhost:3002';

  constructor(private _http: HttpClient) {}

  public get defaultHttpOptions() {
    return { 
      headers: new HttpHeaders({'Content-Type': 'application/json'})
    };
  }

  public getTodoItems(): Observable<TodoItem[]> {
    return this._http
      .get<TodoItem[]>(`${this._endpoint}/todo`);
  }

  public createTodoItem(todoItem: TodoItem): Observable<void> {
    return this._http
      .post<void>(`${this._endpoint}/todo`,
        JSON.stringify(todoItem),
        this.defaultHttpOptions);
  }

  public deleteTodoIdem(id: number): Observable<void> {
    return this._http
      .delete<void>(`${this._endpoint}/todo/${id}`);
  }
}
