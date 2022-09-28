import { createReducer, on } from '@ngrx/store';
import { Status } from 'src/app/constants';
import { create, remove, updateStatus } from '../actions/task.actions';

export type BoardTaskId = string;

export interface BoardTask {
  id: BoardTaskId;
  description: string;
  status: Status;
}

export interface AppState {
  tasks: Array<BoardTask>;
}

export const initialState: Array<BoardTask> = [];

export const taskReducer = createReducer(
  initialState,
  on(create, (state, { task }) => [...state, task]),
  on(remove, (state, { id }) => state.filter((task) => task.id !== id)),
  on(updateStatus, (state, { id, newStatus }) =>
    state.map((task) => {
      if (task.id === id) {
        return {
          ...task,
          status: newStatus,
        };
      }
      return task;
    })
  )
);
