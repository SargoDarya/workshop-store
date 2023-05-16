import { createFeatureSelector, createSelector } from "@ngrx/store";
import { ToDoListState } from "./to-do-list.store";

const toDoListFeatureSelector = createFeatureSelector<ToDoListState>('to-do-list');

export const allToDosSelector = createSelector(toDoListFeatureSelector, (toDoListFeature) => toDoListFeature.toDos);
export const openToDosSelector = createSelector(allToDosSelector, (allToDos) => allToDos.filter(toDo => !toDo.done));
export const doneToDosSelector = createSelector(allToDosSelector, (allToDos) => allToDos.filter(toDo => toDo.done));

