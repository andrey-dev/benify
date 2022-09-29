import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideMockStore, MockStore } from '@ngrx/store/testing';
import { MatDialog } from '@angular/material/dialog';

import { TaskCreatorComponent } from './task-creator.component';
import { BoardTask } from 'src/app/state/reducers/task.reducer';
import { UUIDService } from 'src/app/services/uuid.service';

describe('TaskCreatorComponent', () => {
  let component: TaskCreatorComponent;
  let fixture: ComponentFixture<TaskCreatorComponent>;
  let store: MockStore;
  const initialState: Array<BoardTask> = [];

  let matDialogService: jasmine.SpyObj<MatDialog>;
  matDialogService = jasmine.createSpyObj<MatDialog>('MatDialog', ['open']);
  const uuidServiceSpy = jasmine.createSpyObj<UUIDService>(['generateUUID']);

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TaskCreatorComponent],
      providers: [
        provideMockStore({ initialState }),
        {
          provide: MatDialog,
          useValue: matDialogService,
        },
        { provide: UUIDService, useValue: uuidServiceSpy },
      ],
    }).compileComponents();

    store = TestBed.inject(MockStore);
    fixture = TestBed.createComponent(TaskCreatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
