import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-create-task-dialog',
  templateUrl: 'create-task-dialog.component.html',
  styleUrls: ['./create-task-dialog.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CreateTaskDialog {
  public taskDescription = '';
  constructor(public dialogRef: MatDialogRef<CreateTaskDialog>) {}

  public onCancelClick(): void {
    this.dialogRef.close();
  }
}
