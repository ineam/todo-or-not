import {Component, Input} from '@angular/core';
import {Todo} from '../../types/todo.type';

@Component({
  selector: 'amk-sidebar',
  styleUrls: ['./sidebar.component.scss'],
  template: `
    <h1>Pinned</h1>

    <table>
      <tbody>
      <tr *ngFor="let todo of todos">
        <td>{{todo.id}}</td>
        <td>{{todo.description}}</td>
      </tr>
      </tbody>
    </table>
  `
})
export class SidebarComponent {
  @Input() todos!: Todo[] | null;
}
