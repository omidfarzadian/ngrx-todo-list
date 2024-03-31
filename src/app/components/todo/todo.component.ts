import { CommonModule } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Todo } from '@models/todo.interface';
import { Store } from '@ngrx/store';
import { add, loadList, remove } from '@state/actions/todo.action';
import { selectAllTodoList } from '@state/selectors/todo.selector';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-todo',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './todo.component.html',
})
export class TodoComponent implements OnInit {
  private _store = inject(Store);

  todoList: Observable<Todo[]>;
  todoInput: string;

  constructor() {
    this.todoList = this._store.select(selectAllTodoList);
    this.todoInput = '';
  }

  ngOnInit(): void {
    this._store.dispatch(loadList());
  }

  onAddTodo(): void {
    if (this.todoInput.length > 0) {
      this._store.dispatch(add({ content: this.todoInput }));
      this.todoInput = '';
    }
  }

  onRemoveTodo({ id }: Todo): void {
    this._store.dispatch(remove({ id }));
  }
}
