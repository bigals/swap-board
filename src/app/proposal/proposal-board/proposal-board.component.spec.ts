import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProposalBoardComponent } from './proposal-board.component';

describe('ProposalBoardComponent', () => {
  let component: ProposalBoardComponent;
  let fixture: ComponentFixture<ProposalBoardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProposalBoardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProposalBoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
