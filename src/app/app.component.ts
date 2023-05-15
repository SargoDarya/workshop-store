import { Component } from '@angular/core';
import { CreateToDoComponent } from './create-to-do/create-to-do.component';
import { ListToDosComponent } from './list-to-dos/list-to-dos.component';
import { ToDo } from './types';
import { BehaviorSubject } from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: true,
  imports: [CommonModule, CreateToDoComponent, ListToDosComponent]
})
export class AppComponent {
  // Replace with proper selectors
  public toDos$ = new BehaviorSubject<ToDo[]>([ { title: 'A ToDo not yet done', done: false } ]);
  public doneToDos$ = new BehaviorSubject<ToDo[]>([ { title: 'A ToDo that is done', done: true } ]);

  public createToDo(title: string): void {
    // TODO: Add Store calls
    console.log('Create ToDo', title);
  }

  public toggleToDo(toDo: ToDo): void {
    // TODO: Add Store calls
    console.log('Toggle ToDo', toDo);
  }

  public deleteToDo(toDo: ToDo): void {
    // TODO: Add Store calls
    console.log('Delete ToDo', toDo);
  }

  public deleteDoneToDos(): void {
    // TODO: Add Store calls
    console.log('Delete done ToDos');
  }

}
