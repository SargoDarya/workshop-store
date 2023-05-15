import { CommonModule } from "@angular/common";
import { ChangeDetectionStrategy, Component, EventEmitter, Output } from "@angular/core";
import { FormControl, FormsModule, ReactiveFormsModule, Validators } from "@angular/forms";

@Component({
  selector: 'app-create-to-do',
  standalone: true,
  imports: [ CommonModule, FormsModule, ReactiveFormsModule ],
  templateUrl: './create-to-do.component.html',
  styleUrls: ['./create-to-do.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CreateToDoComponent {
  @Output() toDoSubmitted: EventEmitter<string> = new EventEmitter();

  public readonly toDoFormControl = new FormControl('', [ Validators.required, Validators.minLength(1) ]);

  public submitTodo(todoName: string): void {
    this.toDoSubmitted.emit(todoName);
    this.toDoFormControl.reset();
  }
}
