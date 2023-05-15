import { CommonModule } from "@angular/common";
import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from "@angular/core";
import { ToDo } from "../types";

@Component({
  selector: 'app-list-to-dos',
  standalone: true,
  imports: [ CommonModule ],
  templateUrl: './list-to-dos.component.html',
  styleUrls: ['./list-to-dos.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ListToDosComponent {
  @Input() toDos: ToDo[] | null = [];

  @Output() toggleToDo: EventEmitter<ToDo> = new EventEmitter();
  @Output() deleteToDo: EventEmitter<ToDo> = new EventEmitter();
}
