import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import {
  MatButtonModule,
  MatCheckboxModule,
  MatDialogModule,
  MatIconModule,
  MatInputModule,
  MatPaginatorModule,
  MatSortModule,
  MatTableModule,
  MatTabsModule,
  MatSelectModule
} from '@angular/material';
import { ItemDetailComponent } from './item-detail/item-detail.component';
import { MainBoardComponent } from './main-board/main-board.component';
import { AddEditItemDialogComponent } from './add-edit-item-dialog/add-edit-item-dialog.component';
import { ProposeTradeDialogComponent } from './propose-trade-dialog/propose-trade-dialog.component';
import { CoreModule } from '../core/core.module';

@NgModule({
  declarations: [
    AddEditItemDialogComponent,
    ProposeTradeDialogComponent,
    ItemDetailComponent,
    MainBoardComponent
  ],
  entryComponents: [AddEditItemDialogComponent, ProposeTradeDialogComponent],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatDialogModule,
    MatIconModule,
    MatInputModule,
    MatPaginatorModule,
    MatSelectModule,
    MatSortModule,
    MatTableModule,
    MatTabsModule,
    CoreModule,
    CommonModule
  ]
})
export class SwapBoardModule {}
