import { Component, Input } from '@angular/core';
import { TodoProps } from '../todo.model';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.scss'
})
export class TodoListComponent {
  @Input() todo:TodoProps = {
    heading : "",
    note : "",
    taskDone : false,
    toggleDone(){
      this.taskDone = !this.taskDone
    }
  }
}
