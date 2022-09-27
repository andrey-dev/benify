import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Status } from '../../constants';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BoardComponent implements OnInit {
  public statuses = Object.values(Status);
  constructor() {}

  ngOnInit(): void {}
}
