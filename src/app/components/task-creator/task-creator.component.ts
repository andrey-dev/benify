import { ChangeDetectionStrategy, Component, OnDestroy } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { filter, Subject, takeUntil } from 'rxjs';

import { CreateTaskDialog } from '../create-task-dialog/create-task-dialog.component';
import { UUIDService } from 'src/app/services/uuid.service';
import { create } from 'src/app/state/actions/task.actions';
import { BoardTask } from 'src/app/state/reducers/task.reducer';
import { Status } from 'src/app/constants';

@Component({
  selector: 'app-task-creator',
  templateUrl: './task-creator.component.html',
  styleUrls: ['./task-creator.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TaskCreatorComponent implements OnDestroy {
  private destroy$ = new Subject<void>();
  constructor(
    private dialog: MatDialog,
    private uuidService: UUIDService,
    private store: Store<{ tasks: Array<BoardTask> }>
  ) {}

  public ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  public onCreateClick(): void {
    const dialogRef = this.dialog.open(CreateTaskDialog, {
      width: '450px',
    });

    dialogRef
      .afterClosed()
      .pipe(
        filter((v) => !!v),
        takeUntil(this.destroy$)
      )
      .subscribe((taskDescription: string) => {
        this.createTask(taskDescription);
      });
  }

  private createTask(description: string): void {
    const task: BoardTask = {
      description,
      id: this.uuidService.generateUUID(),
      status: Status.ToDo,
    };
    this.store.dispatch(create({ task }));
  }
}
