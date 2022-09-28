import {
  ChangeDetectionStrategy,
  Component,
  Input,
  Output,
  EventEmitter,
} from '@angular/core';
import { BoardTask, BoardTaskId } from 'src/app/state/reducers/task.reducer';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TaskComponent {
  @Input() task: BoardTask | null = null;
  @Output() removeTask = new EventEmitter<BoardTaskId>();

  constructor() {}

  public onRemove(): void {
    this.removeTask.emit(this.task?.id);
  }
}
