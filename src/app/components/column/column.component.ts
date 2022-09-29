import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Status } from 'src/app/constants';
import { remove, updateStatus, UpdateStatusData } from 'src/app/state/actions/task.actions';
import { BoardTask, BoardTaskId } from 'src/app/state/reducers/task.reducer';
import {
  selectDoneTasks,
  selectImplementingTasks,
  selectToDoTasks,
} from 'src/app/state/selectors/task.selector';

@Component({
  selector: 'app-column',
  templateUrl: './column.component.html',
  styleUrls: ['./column.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ColumnComponent implements OnInit {
  @Input() status: Status | null = null;
  public tasks$: Observable<BoardTask[]> | null = null;
  constructor(private store: Store<{ tasks: Array<BoardTask> }>) {}

  ngOnInit(): void {
    const selector = this.getSelector();
    if (!selector) {
      return;
    }
    this.tasks$ = this.store.select(selector);
  }

  public trackById(index: number, item: BoardTask): string {
    return item.id;
  }

  public onRemoveTask(id: BoardTaskId): void {
    this.store.dispatch(remove({ id }));
  }

  public onUpdateTaskStatus(taskData: UpdateStatusData): void {
    this.store.dispatch(updateStatus({ id: taskData.id, newStatus: taskData.newStatus }));
  }

  private getSelector() {
    switch (this.status) {
      case Status.ToDo:
        return selectToDoTasks;
      case Status.Implementing:
        return selectImplementingTasks;
      case Status.Done:
        return selectDoneTasks;
      default:
        return null;
    }
  }
}
