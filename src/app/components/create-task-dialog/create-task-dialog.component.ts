import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-create-task-dialog',
  templateUrl: 'create-task-dialog.component.html',
  styleUrls: ['./create-task-dialog.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CreateTaskDialog {
  public taskForm = new FormGroup({
    taskDescription: new FormControl('', Validators.required),
  });
  constructor(public dialogRef: MatDialogRef<CreateTaskDialog>) {}

  public get taskDescription(): FormControl {
    return this.taskForm.get('taskDescription') as FormControl;
  }

  public onCancelClick(): void {
    this.dialogRef.close();
  }

  public onSubmit(): void {
    if (this.taskForm.invalid) {
      return;
    }
    this.dialogRef.close(this.taskDescription.value);
  }
}
