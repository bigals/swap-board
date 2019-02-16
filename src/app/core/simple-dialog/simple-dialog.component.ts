import { Component, OnInit, Inject } from '@angular/core';
import {
  MatDialogRef,
  MAT_DIALOG_DATA,
  MatTab,
  MatTabGroup
} from '@angular/material';
import { SwapItem } from '../../core/services/board.service';

@Component({
  selector: 'app-simple-dialog',
  templateUrl: './simple-dialog.component.html',
  styleUrls: ['./simple-dialog.component.scss']
})
export class SimpleDialogComponent implements OnInit {
  constructor(
    public dialogRef: MatDialogRef<SimpleDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data
  ) {}

  ngOnInit() {
    this.data.inputValue = '';
  }

  public onAccept = () => {
    this.dialogRef.close(this.data.inputValue);
  }
  public onCancel = () => {
    this.dialogRef.close();
  }
}
