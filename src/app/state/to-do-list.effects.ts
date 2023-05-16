import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { actions, apiActions } from "./to-do-list.actions";
import { of, catchError, map, mergeMap, retry, switchMap, tap } from "rxjs";
import { Store } from "@ngrx/store";
import { allToDosSelector } from "./to-do-list.selectors";
import { RemoteApi } from "../remote-api";

@Injectable()
export class ToDoListEffects {

  public constructor(
    private readonly actions$: Actions,
    private readonly store: Store,
    private readonly api: RemoteApi
  ) {}

  public persistToLocalStorage = createEffect(
    () => this.actions$.pipe(
      ofType(actions.doneTodosDeleted, actions.todoDeleted, actions.todoSubmitted, actions.todoToggled),
      mergeMap(() => this.store.select(allToDosSelector)),
      tap((allToDos) => localStorage.setItem('to-do-items', JSON.stringify((allToDos))))
    ),
    { dispatch: false }
  )

  public persistToRemoteStorage = createEffect(
    () => this.actions$.pipe(
      ofType(actions.doneTodosDeleted, actions.todoDeleted, actions.todoSubmitted, actions.todoToggled),
      mergeMap(() => this.store.select(allToDosSelector)),
      switchMap((toDos) => this.api.persistToDos(toDos).pipe(
        map(() => apiActions.persistingSuccess()),
        catchError(() => of(apiActions.persistingFailed()))
      )),
      retry(3)
    )
  )
}
