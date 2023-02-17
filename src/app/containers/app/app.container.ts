import {Component, OnInit} from '@angular/core';
import {BehaviorSubject, combineLatest, debounceTime, distinctUntilChanged, map, Observable} from 'rxjs';
import {AppSandbox} from '../../app.sandbox';
import {Todo} from '../../types/todo.type';

@Component({
  selector: 'amk-root',
  styleUrls: ['./app.container.scss'],
  template: `
    <amk-topbar (addTodo)="onAddTodo($event)"></amk-topbar>

    <div class="bottom">
      <amk-sidebar [todos]="pinnedTodos$ | async"></amk-sidebar>

      <amk-todos [todos]="filteredTodos$ | async"
                 (search)="search$.next($event)"
                 (remove)="onRemoveTodo($event)"
                 (pinTodo)="onPinTodo($event)">
      </amk-todos>
    </div>
  `
})
export class AppContainer implements OnInit {
  todo$: Observable<Todo[]> = this.sb.todos$;

  pinnedTodos$: Observable<Todo[]> = this.todo$.pipe(
    map((todos: Todo[]) => todos.filter(todo => todo.pinned))
  );
  search$: BehaviorSubject<string> = new BehaviorSubject('');
  optimizedTerm$: Observable<string> = this.search$.pipe(
    debounceTime(200),
    distinctUntilChanged()
  );
  filteredTodos$: Observable<Todo[]> = combineLatest([this.optimizedTerm$, this.todo$],
    (search: string, todos: Todo[]) => {
      return todos.filter((todo: Todo) => todo.description.includes(search));
    }
  );

  constructor(private sb: AppSandbox) {
  }

  ngOnInit(): void {
    this.sb.loadTodos().subscribe();
  }

  onRemoveTodo(todoId: number): void {
    this.sb.removeTodo(todoId).subscribe();
  }

  onPinTodo(todoId: number): void {
    this.sb.pinTodo(todoId).subscribe();
  }

  onAddTodo(description: string): void {
    this.sb.addTodo(description).subscribe();
  }
}
