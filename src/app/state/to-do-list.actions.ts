import { createActionGroup, emptyProps, props } from "@ngrx/store";
import { ToDo } from "../types";

export const actions = createActionGroup({
  source: 'ToDo List',
  events: {
    'ToDo submitted': props<{ title: string }>(),
    'ToDo toggled': props<{ toDo: ToDo }>(),
    'ToDo deleted': props<{ toDo: ToDo }>(),
    'Done ToDos deleted': emptyProps()
  }
});

export const apiActions = createActionGroup({
  source: 'ToDo Api',
  events: {
    'Persisting success': emptyProps(),
    'Persisting failed': emptyProps()
  }
});
