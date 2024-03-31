import { Injectable } from '@angular/core';
import { TodoService } from '@components/todo/todo.service';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import {
  add,
  loadList,
  loadListFailure,
  loadListSuccess,
  remove,
} from '@state/actions/todo.action';
import { AppState } from '@state/apps.state';
import { selectAllTodoList } from '@state/selectors/todo.selector';
import { catchError, from, map, switchMap, withLatestFrom } from 'rxjs';

@Injectable()
export class TodoEffect {
  constructor(
    private actions$: Actions,
    private store: Store<AppState>,
    private todoService: TodoService,
  ) {}

  loadTodoList$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadList),
      switchMap(() =>
        from(this.todoService.getTodoList()).pipe(
          map((list) => loadListSuccess({ list })),
          catchError(async (err) => loadListFailure({ err })),
        ),
      ),
    ),
  );

  saveTodoList$ = createEffect(
    () => 
      this.actions$.pipe(
        ofType(add, remove),
        withLatestFrom(this.store.select(selectAllTodoList)),
        switchMap(([_, todoList]) =>
          from(this.todoService.saveTodoList(todoList)),
        ),
      ),
    { dispatch: false },
  );
}
