import { Todo } from '@models/todo.interface';
import { createAction, props } from '@ngrx/store';

export const add = createAction(
  '[Todo Component] Add',
  props<{ content: string }>(),
);

export const remove = createAction(
  '[Todo Component] Remove',
  props<{ id: number }>(),
);

export const loadList = createAction('[Todo Component] Load List');

export const loadListSuccess = createAction(
  '[Todo API] Load List Success',
  props<{ list: Todo[] }>(),
);

export const loadListFailure = createAction(
  '[Todo API] Load List Failure',
  props<{ err: string }>(),
);
