import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';
import {delay} from 'rxjs/operators';
import {Todo} from '../types/todo.type';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  ctr = 0;
  todos = this._generateFakeTodos(2);

  fetchAll(): Observable<Todo[]> {
    return of(this.todos);
  }

  removeTodo(id: number): Observable<boolean> {
    this.todos = this.todos.filter(v => v.id !== id);
    return of(true).pipe(delay(1000));
  }

  addTodo(description: string): Observable<Todo> {
    this.ctr++;
    const newTodo: Todo = {description: description, pinned: false, id: this.ctr};
    this.todos = [...this.todos, newTodo]
    return of({...newTodo}).pipe(delay(1000));
  }

  pinTodo(id: number): Observable<boolean> {
    this.todos = this.todos.map(todo => todo.id === id ? {...todo, pinned: !todo.pinned} : todo);
    return of(true).pipe(delay(1000));
  }

  private _generateFakeTodos(amount: number): Todo[] {
    const todos = [];
    for (let i = 0; i < amount; i++) {
      this.ctr++;
      todos.push({description: 'free falasteen', pinned: false, id: this.ctr});
      this.ctr++;
      todos.push({description: 'sutun nenjutsu', pinned: false, id: this.ctr});
      this.ctr++;
      todos.push({description: 'comeback to side project', pinned: true, id: this.ctr});
      this.ctr++;
      todos.push({description: 'be lieve me u need to comeback', pinned: false, id: this.ctr});
    }
    return todos;
  }
}
