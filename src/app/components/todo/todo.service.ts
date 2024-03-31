import { Injectable } from '@angular/core';
import { Todo } from '@models/todo.interface';

@Injectable({ providedIn: 'root' })
export class TodoService {
  constructor() {}

  getTodoList(): Promise<Todo[]> {
    return Promise.resolve(JSON.parse(localStorage.getItem('todoList')!) || []);
  }

  saveTodoList(todoList: Todo[]) {
    return Promise.resolve(
      localStorage.setItem('todoList', JSON.stringify(todoList)),
    );
  }
}
