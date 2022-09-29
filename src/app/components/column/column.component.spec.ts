import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { BoardTask } from 'src/app/state/reducers/task.reducer';

import { ColumnComponent } from './column.component';

describe('ColumnComponent', () => {
  let component: ColumnComponent;
  let fixture: ComponentFixture<ColumnComponent>;
  let store: MockStore;
  const initialState: Array<BoardTask> = [];

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ColumnComponent],
      providers: [provideMockStore({ initialState })],
    }).compileComponents();

    store = TestBed.inject(MockStore);
    fixture = TestBed.createComponent(ColumnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
