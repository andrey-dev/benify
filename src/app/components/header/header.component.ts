import { ChangeDetectionStrategy, Component, OnDestroy, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { filter, Subject, takeUntil } from 'rxjs';
import { Status } from 'src/app/constants';
import { create } from 'src/app/state/actions/task.actions';
import { Task } from 'src/app/state/reducers/task.reducer';
import { CreateTaskDialog } from '../create-task-dialog/create-task-dialog.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent implements OnDestroy {
  private destroy$ = new Subject<void>();
  constructor(public dialog: MatDialog, private store: Store<{ tasks: Array<Task> }>) {}

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  public onCreateClick(): void {
    // const task: Task = {
    //   id: Math.random() * 10,
    //   description: 'qwerty',
    //   status: Status.ToDo,
    // };
    // this.store.dispatch(create({ task }));
    const dialogRef = this.dialog.open(CreateTaskDialog, {
      width: '450px',
    });

    dialogRef
      .afterClosed()
      .pipe(
        filter((v) => !!v),
        takeUntil(this.destroy$),
      )
      .subscribe((taskDescription) => {
        // Dispatch create action
        console.log('The dialog was closed');
      });
  }
}
