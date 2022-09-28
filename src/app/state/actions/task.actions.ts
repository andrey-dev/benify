import { createAction, props } from '@ngrx/store';
import { Status } from 'src/app/constants';
import { Task, TaskId } from '../reducers/task.reducer';

export const create = createAction('[Task] Create', props<{ task: Task }>());
export const remove = createAction('[Task] Remove', props<{ id: TaskId }>());
export const updateStatus = createAction(
  '[Task] UpdateStatus',
  props<{ id: TaskId; newStatus: Status }>(),
);
