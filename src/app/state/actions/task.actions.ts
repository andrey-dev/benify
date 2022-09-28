import { createAction, props } from '@ngrx/store';
import { Status } from 'src/app/constants';
import { BoardTask, BoardTaskId } from '../reducers/task.reducer';

export const create = createAction(
  '[Task] Create',
  props<{ task: BoardTask }>()
);
export const remove = createAction(
  '[Task] Remove',
  props<{ id: BoardTaskId }>()
);
export const updateStatus = createAction(
  '[Task] UpdateStatus',
  props<{ id: BoardTaskId; newStatus: Status }>()
);
