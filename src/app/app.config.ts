import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideState, provideStore } from '@ngrx/store';
import { metaReducers, reducers } from '@state/reducers';
import { provideEffects } from '@ngrx/effects';
import { TodoEffect } from '@state/effects/todo.effect';
import { todoReducer } from '@state/reducers/todo.reducer';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideStore(reducers, { metaReducers }),
    provideState('todoList', todoReducer),
    provideEffects([TodoEffect]),
  ],
};
