import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'todo-list',
    loadComponent: () =>
      import('@components/todo/todo.component').then((c) => c.TodoComponent),
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/todo-list',
  },
];
