import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { MaterialModule } from "src/app/shared/material.module";
import { TodoFormComponent } from "./components/todo-form/todo-form.component";
import { TodoListItemComponent } from "./components/todo-item/todo-item.component";
import { TodoListComponent } from "./components/todo-list.component";

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    ReactiveFormsModule
  ],
  declarations: [
    TodoListComponent,
    TodoListItemComponent,
    TodoFormComponent
  ],
  exports: [TodoListComponent]
})
export class TodoListModule {}
