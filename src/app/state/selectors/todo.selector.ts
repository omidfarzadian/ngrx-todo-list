import { TodoState } from '@models/todo.state';
import { createFeatureSelector, createSelector } from '@ngrx/store';

export const selectTodoList = createFeatureSelector<any>('todoList');
export const selectAllTodoList = createSelector(
  selectTodoList,
  (state: TodoState) => state?.todoList,
);
