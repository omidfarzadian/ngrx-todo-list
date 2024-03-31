import { LoadStatus } from './load-status.enum';
import { Todo } from './todo.interface';

export interface TodoState {
  todoList: Todo[];
  error: string;
  status: LoadStatus;
}
