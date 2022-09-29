import {
  ChangeDetectionStrategy,
  Component,
  Input,
  Output,
  EventEmitter,
  OnInit,
} from '@angular/core';
import { Status, Direction } from 'src/app/constants';
import { UpdateStatusData } from 'src/app/state/actions/task.actions';
import { BoardTask, BoardTaskId } from 'src/app/state/reducers/task.reducer';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TaskComponent implements OnInit {
  @Input() task: BoardTask = {} as BoardTask;
  @Input() status: Status | null = null;
  @Output() removeTask = new EventEmitter<BoardTaskId>();
  @Output() updateTaskStatus = new EventEmitter<UpdateStatusData>();

  public isLeftArrowDisabled = false;
  public isRightArrowDisabled = false;
  public direction = Direction;

  constructor() {}

  public ngOnInit(): void {
    if (this.status === Status.ToDo) {
      this.isLeftArrowDisabled = true;
    }
    if (this.status === Status.Done) {
      this.isRightArrowDisabled = true;
    }
  }

  public onRemove(): void {
    this.removeTask.emit(this.task?.id);
  }

  public onMoveClick(direction: Direction): void {
    let newStatus;
    if (direction === Direction.Right) {
      newStatus = this.status === Status.ToDo ? Status.Implementing : Status.Done;
    } else {
      newStatus = this.status === Status.Done ? Status.Implementing : Status.ToDo;
    }
    this.updateTaskStatus.next({ id: this.task?.id, newStatus });
  }
}
