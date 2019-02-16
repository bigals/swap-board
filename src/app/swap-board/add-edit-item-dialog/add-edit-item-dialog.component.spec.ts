import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditItemDialogComponent } from './add-edit-item-dialog.component';

describe('AddEditItemDialogComponent', () => {
  let component: AddEditItemDialogComponent;
  let fixture: ComponentFixture<AddEditItemDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddEditItemDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddEditItemDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
