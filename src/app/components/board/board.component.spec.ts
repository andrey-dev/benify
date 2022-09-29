import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { BoardTask } from 'src/app/state/reducers/task.reducer';
import { ColumnComponent } from '../column/column.component';

import { BoardComponent } from './board.component';

describe('BoardComponent', () => {
  let component: BoardComponent;
  let fixture: ComponentFixture<BoardComponent>;
  let store: MockStore;
  const initialState: Array<BoardTask> = [];

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BoardComponent, ColumnComponent],
      providers: [provideMockStore({ initialState })],
    }).compileComponents();

    store = TestBed.inject(MockStore);
    fixture = TestBed.createComponent(BoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
