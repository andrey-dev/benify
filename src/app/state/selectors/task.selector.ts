import { createSelector } from '@ngrx/store';
import { Status } from 'src/app/constants';
import { AppState, BoardTask } from '../reducers/task.reducer';

export const selectAllTasks = (state: AppState) => state.tasks;

export const selectToDoTasks = createSelector(
  selectAllTasks,
  (tasks: Array<BoardTask>) => {
    return tasks.filter((task: BoardTask) => task.status === Status.ToDo);
  }
);

export const selectImplementingTasks = createSelector(
  selectAllTasks,
  (tasks: Array<BoardTask>) => {
    return tasks.filter(
      (task: BoardTask) => task.status === Status.Implementing
    );
  }
);

export const selectDoneTasks = createSelector(
  selectAllTasks,
  (tasks: Array<BoardTask>) => {
    return tasks.filter((task: BoardTask) => task.status === Status.Done);
  }
);
