import { NgModule } from "@angular/core";
import { TodoListModule } from "../todo-list/todo-list.module";
import { HomeRoutingModule } from "./home-routing.module";
import { HomeComponent } from "./components/home.component";

@NgModule({
  imports: [HomeRoutingModule, TodoListModule],
  declarations: [HomeComponent],
})
export class HomeModule {}
