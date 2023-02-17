import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Todo} from '../../types/todo.type';

@Component({
  selector: 'amk-todos',
  styleUrls: ['./tweets.component.scss'],
  template: `
    <h1>Todos</h1>
    <input type="text"
           placeholder="search"
           (keyup)="toSearch($event)"/>
    <table>
      <tbody>
      <tr *ngFor="let todo of todos">
        <td>{{todo.id}}</td>
        <td>{{todo.description}}</td>
        <td>
          <button *ngIf="todo.pinned" (click)="pinTodo.emit(todo.id)">❤️</button>
          <button *ngIf="!todo.pinned" (click)="pinTodo.emit(todo.id)">🤍</button>
        </td>
        <td>
          <button (click)="remove.emit(todo.id)">❌</button>
        </td>
      </tr>
      </tbody>
    </table>
  `
})
export class TweetsComponent {
  @Input() todos!: Todo[] | null;
  @Output() pinTodo = new EventEmitter<number>();
  @Output() remove = new EventEmitter<number>();
  @Output() search = new EventEmitter<string>();

  toSearch(event: Event) {
    this.search.emit((event.target as HTMLInputElement).value);
  }
}
