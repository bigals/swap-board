import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminProposalsComponent } from './admin-proposals.component';

describe('AdminProposalsComponent', () => {
  let component: AdminProposalsComponent;
  let fixture: ComponentFixture<AdminProposalsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminProposalsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminProposalsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
