import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppContainer} from './containers/app/app.container';
import {SidebarComponent} from './components/sidebar/sidebar.component';
import {TopbarComponent} from './components/topbar/topbar.component';
import {FormsModule} from '@angular/forms';
import {TodosComponent} from './components/todos/todos.component';
import {NgxsModule} from '@ngxs/store';
import {NgxsLoggerPluginModule} from '@ngxs/logger-plugin';
import {NgxsReduxDevtoolsPluginModule} from '@ngxs/devtools-plugin';
import {TodoState} from '../state-management/todo/state';

@NgModule({
  declarations: [
    AppContainer,
    SidebarComponent,
    TopbarComponent,
    TodosComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    NgxsModule.forRoot([TodoState]),
    NgxsLoggerPluginModule.forRoot(),
    NgxsReduxDevtoolsPluginModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppContainer]
})
export class AppModule {
}
