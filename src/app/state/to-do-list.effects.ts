import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { actions } from "./to-do-list.actions";
import { tap, withLatestFrom } from "rxjs";
import { Store } from "@ngrx/store";
import { allToDosSelector } from "./to-do-list.selectors";

@Injectable()
export class ToDoListEffects {

  public constructor(
    private readonly actions$: Actions,
    private readonly store: Store
  ) {}

  public persistToLocalStorage = createEffect(
    () => this.actions$.pipe(
      ofType(actions.doneTodosDeleted, actions.todoDeleted, actions.todoSubmitted, actions.todoToggled),
      withLatestFrom(this.store.select(allToDosSelector)),
      tap((allToDos) => localStorage.setItem('to-do-items', JSON.stringify((allToDos))))
    ),
    { dispatch: false }
  )
}
