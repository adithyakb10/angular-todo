import { Component } from '@angular/core';
import { TodoProps } from './todo.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'todo-1';
  navItemsRender = true
  headingInp:string=""
  notesInp:string=""
  setNavItemsRender(state:boolean){
    this.navItemsRender = state
  }
  todoList:TodoProps[] = []
    addTask(){
      this.todoList.push({
        heading:this.headingInp,
        note:this.notesInp,
        taskDone: false,
        toggleDone(){
          this.taskDone = !this.taskDone
        }
      })
    }
}
