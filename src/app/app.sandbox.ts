import {Injectable} from '@angular/core';
import {map, Observable, tap} from 'rxjs';
import {Select, Store} from '@ngxs/store';
import {TodoState} from '../state-management/todo/state';
import {Todo} from './types/todo.type';
import {TodoService} from './services/todo.service';
import {TodoActions} from '../state-management/todo/actions';

import FetchAll = TodoActions.FetchAll;
import Add = TodoActions.Add;
import Remove = TodoActions.Remove;
import Pin = TodoActions.Pin;

@Injectable({
  providedIn: 'root'
})
export class AppSandbox {
  @Select(TodoState) todos$!: Observable<Todo[]>;

  constructor(private store: Store,
              private todoService: TodoService) {
  }

  loadTodos(): Observable<boolean> {
    return this.todoService.fetchAll().pipe(
      tap((todos: Todo[]) => this.store.dispatch(new FetchAll(todos))),
      map(() => true)
    );
  }

  addTodo(description: string): Observable<boolean> {
    return this.todoService.addTodo(description).pipe(
      tap((todo) => this.store.dispatch(new Add(todo))),
      map(() => true)
    );
  }

  removeTodo(todoId: number): Observable<boolean> {
    return this.todoService.removeTodo(todoId).pipe(
      tap(() => this.store.dispatch(new Remove(todoId))),
      map(() => true)
    );
  }

  pinTodo(todoId: number): Observable<boolean> {
    return this.todoService.pinTodo(todoId).pipe(
      tap(() => this.store.dispatch(new Pin(todoId))),
      map(() => true)
    );
  }
}
