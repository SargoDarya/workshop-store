import { Action, createReducer, on } from "@ngrx/store";
import { actions } from './to-do-list.actions';
import { ToDo } from "../types";
import { removeItemFromArray, replaceItemInArray } from "./array-utils";

export interface ToDoListState {
  toDos: ToDo[]
}

const initialState = {
  toDos: JSON.parse(localStorage.getItem('to-do-items') || '[]')
};

const featureReducer = createReducer<ToDoListState>(
  initialState,
  on(actions.todoSubmitted, (state, { title }) => ({
    ...state,
    toDos: [ ...state.toDos, { title, done: false } ]
  })),
  on(actions.todoDeleted, (state, {toDo}) => ({
    ...state,
    toDos: removeItemFromArray(toDo, state.toDos)
  })),
  on(actions.todoToggled, (state, { toDo }) => ({
    ...state,
    toDos: replaceItemInArray(toDo, { ...toDo, done: !toDo.done }, state.toDos)
  })),
  on(actions.doneTodosDeleted, (state) => ({
    ...state,
    toDos: []
  }))
);

export function reducer(state: ToDoListState | undefined, action: Action) {
  return featureReducer(state, action);
}
