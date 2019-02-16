import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProposeTradeDialogComponent } from './propose-trade-dialog.component';

describe('ProposeTradeDialogComponent', () => {
  let component: ProposeTradeDialogComponent;
  let fixture: ComponentFixture<ProposeTradeDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProposeTradeDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProposeTradeDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
