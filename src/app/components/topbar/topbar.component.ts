import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'amk-topbar',
  styleUrls: ['./topbar.component.scss'],
  template: `
    <div class="container-fluid">
      <h1>Create a new todo</h1>
      <div class="container">
        <input class="post-wrapper" [(ngModel)]="description"/>
        <button class="btn btn-primary" (click)="post()">New</button>
      </div>
    </div>
  `
})
export class TopbarComponent {
  @Output() addTodo = new EventEmitter<string>();

  description: string = '';

  post(): void {
    this.addTodo.emit(this.description);
    this.description = '';
  }
}
