import { Injectable } from "@angular/core";
import { ToDo } from "./types";
import { delay, of, switchMap, throwError } from "rxjs";

@Injectable({ providedIn: 'root' })
export class RemoteApi {

  public persistToDos(toDos: ToDo[]) {
    return of(toDos).pipe(
      delay(500),
      switchMap((toDos) => {
        if (Math.random() > 0.2) {
          return of(toDos);
        } else {
          return throwError(() => new Error('Persisting failed'));
        }
      })
    )
  }

}
