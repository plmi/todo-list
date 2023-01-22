import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { TodoItem } from "src/app/shared/models/todo-item";
import { UpdateDone } from "src/app/shared/models/update-done";
import { environment } from "src/environments/environment";

@Injectable({providedIn: 'root'})
export class TodoService {
  constructor(private _http: HttpClient) {}

  public get defaultHttpOptions() {
    return { 
      headers: new HttpHeaders({'Content-Type': 'application/json'})
    };
  }

  public getTodoItems(): Observable<TodoItem[]> {
    return this._http
      .get<TodoItem[]>(`${environment.apiUrl}/todo`);
  }

  public createTodoItem(todoItem: TodoItem): Observable<void> {
    return this._http
      .post<void>(`${environment.apiUrl}/todo`,
        JSON.stringify(todoItem),
        this.defaultHttpOptions);
  }

  public deleteTodoIdem(id: number): Observable<void> {
    return this._http
      .delete<void>(`${environment.apiUrl}/todo/${id}`);
  }

  public updateDone(updateDone: UpdateDone): Observable<void> {
    return this._http
      .put<void>(`${environment.apiUrl}/todo/done`,
        updateDone,
        this.defaultHttpOptions);
  }
}
