import { Component, OnInit } from '@angular/core';
import { TodoModel } from '../../models/todo-model';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-todo-page',
  templateUrl: './todo-page.component.html',
  styleUrls: ['./todo-page.component.scss']
})
export class TodoPageComponent implements OnInit {

  public todos: Array<TodoModel>;
  public currentTodo: FormControl;

  protected lsTodoString: string = 'todos';

  constructor() {
    this.extractTodos();
    this.currentTodo = new FormControl('', Validators.required);
  }

  ngOnInit() {

  }

  public addTodo() {
    if (this.currentTodo.valid) {
      this.todos.push({
        label: this.currentTodo.value,
        finished: false
      });
      this.currentTodo.reset();
      this.writeTodos();
    }
  }

  public toggleAllFinished() {
    let atLeastOneChecked = this.todos.filter(todo => todo.finished).length > 0;
    if (atLeastOneChecked) {
      this.todos.map(todo => todo.finished = false);
    } else {
      this.todos.map(todo => todo.finished = true);
    }
  }

  public clearFinishedTodos() {
    this.todos = this.todos.filter(todo => !todo.finished);
    this.writeTodos();
  }

  protected writeTodos() {
    localStorage.setItem(this.lsTodoString, JSON.stringify(this.todos));
  }

  protected extractTodos() {
    let todos = localStorage.getItem(this.lsTodoString);
    console.log(this.todos)
    if (todos !== null) {
      this.todos = JSON.parse(todos);
    } else {
      this.todos = [];
    }
  }

}
