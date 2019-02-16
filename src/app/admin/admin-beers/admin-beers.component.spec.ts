import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminBeersComponent } from './admin-beers.component';

describe('AdminBeersComponent', () => {
  let component: AdminBeersComponent;
  let fixture: ComponentFixture<AdminBeersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminBeersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminBeersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
