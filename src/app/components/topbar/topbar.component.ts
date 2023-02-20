import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'amk-topbar',
  styleUrls: ['./topbar.component.scss'],
  template: `
    <h1>Create a new todo</h1>
    <section>
      <input class="nes-input" [(ngModel)]="description"/>
      <button class="nes-btn is-primary" (click)="post()">New</button>
    </section>
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
