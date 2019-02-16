import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProposalBoardComponent } from './proposal-board/proposal-board.component';
import { ProposalDetailComponent } from './proposal-detail/proposal-detail.component';
import {
  MatPaginatorModule,
  MatSortModule,
  MatFormFieldModule,
  MatInputModule,
  MatTableModule,
  MatButtonModule,
  MatIconModule,
  MatCheckboxModule
} from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CoreModule } from '../core/core.module';

@NgModule({
  declarations: [ProposalBoardComponent, ProposalDetailComponent],
  imports: [
    CommonModule,
    MatButtonModule,
    MatCheckboxModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatPaginatorModule,
    MatSortModule,
    MatTableModule,
    FormsModule,
    ReactiveFormsModule,
    CoreModule
  ]
})
export class ProposalModule {}
