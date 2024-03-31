import { LoadStatus } from '@models/load-status.enum';
import { TodoState } from '@models/todo.state';
import { createReducer, on } from '@ngrx/store';
import {
  add,
  loadList,
  loadListFailure,
  loadListSuccess,
  remove,
} from '@state/actions/todo.action';

export const initialState: TodoState = {
  todoList: [],
  error: '',
  status: LoadStatus.Pending,
};

export const todoReducer = createReducer(
  initialState,
  on(add, (state, { content }) => ({
    ...state,
    todoList: [...state.todoList, { id: Date.now(), content }],
  })),
  on(remove, (state, { id }) => ({
    ...state,
    todoList: state.todoList.filter((todo) => todo.id !== id),
  })),
  on(loadList, (state) => ({
    ...state,
    status: LoadStatus.Loading,
  })),
  on(loadListSuccess, (state) => ({
    ...state,
    status: LoadStatus.Success,
  })),
  on(loadListFailure, (state, { err }) => ({
    ...state,
    error: err,
    status: LoadStatus.Error,
  })),
);
