import { Component, importProvidersFrom } from '@angular/core';
import { CreateToDoComponent } from './create-to-do/create-to-do.component';
import { ListToDosComponent } from './list-to-dos/list-to-dos.component';
import { ToDo } from './types';
import { BehaviorSubject } from 'rxjs';
import { CommonModule } from '@angular/common';
import { Store, StoreModule } from '@ngrx/store';
import { reducer } from './state/to-do-list.store';
import { doneToDosSelector, openToDosSelector } from './state/to-do-list.selectors';
import { actions } from './state/to-do-list.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: true,
  imports: [
    CommonModule,
    CreateToDoComponent,
    ListToDosComponent,
  ]
})
export class AppComponent {
  // Replace with proper selectors
  public openToDos$ = this.store.select(openToDosSelector);
  public doneToDos$ = this.store.select(doneToDosSelector);

  public constructor(
    private readonly store: Store
  ) {}

  public createToDo(title: string): void {
    this.store.dispatch(actions.todoSubmitted({ title }))
  }

  public toggleToDo(toDo: ToDo): void {
    this.store.dispatch(actions.todoToggled({ toDo }))
  }

  public deleteToDo(toDo: ToDo): void {
    this.store.dispatch(actions.todoDeleted({ toDo }))
  }

  public deleteDoneToDos(): void {
    this.store.dispatch(actions.doneTodosDeleted())
  }

}
