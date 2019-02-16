import { Component, OnInit, Inject } from '@angular/core';
import {
  MatDialogRef,
  MAT_DIALOG_DATA,
  MatTab,
  MatTabGroup
} from '@angular/material';
import { SwapItem } from '../../core/services/board.service';

@Component({
  selector: 'app-add-edit-item-dialog',
  templateUrl: './add-edit-item-dialog.component.html',
  styleUrls: ['./add-edit-item-dialog.component.scss']
})
export class AddEditItemDialogComponent implements OnInit {
  public packageSizes: { value: number; label: string }[];
  public teirs: { value: number; label: string }[];
  public priceDivisors: { value: number; label: string }[];

  // id: 17,
  // owner: 'Alex McLean',
  // name: 'Better Half',
  // brewery: 'Founders',
  // packageSize: 12,
  // numAvailable: 1,
  // desiredSwap: 'any',
  // teir: 3,
  // price: 8.99,
  // priceDivisor: 6,
  // style: 'Oatmeal Stout',
  // minTeirAccepted: 0

  constructor(
    public dialogRef: MatDialogRef<AddEditItemDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data
  ) {
    this.packageSizes = [
      { value: 8.4, label: '8.4 oz Can' },
      { value: 12, label: '12 oz Bottle/Can' },
      { value: 16, label: '16 oz Can' },
      { value: 19.2, label: '19.2 oz Can' },
      { value: 22, label: '22 oz Bomber' },
      { value: 25.3605, label: '750ml Bottle' }
    ];
    this.teirs = [
      { value: 1, label: 'Teir 1' },
      { value: 2, label: 'Teir 2' },
      { value: 3, label: 'Teir 3' }
    ];
    this.priceDivisors = [
      { value: 1, label: 'Single' },
      { value: 2, label: '2 Pack' },
      { value: 4, label: '4 Pack' },
      { value: 6, label: '6 Pack' },
      { value: 12, label: '12 Pack' },
      { value: 24, label: '24 Pack' }
    ];
  }

  ngOnInit() {
    this.data.newItem = {
      owner: this.data.currentUser,
      ownerDisplayName: this.data.currentUserName,
      name: '',
      brewery: '',
      packageSize: 12,
      numAvailable: 1,
      desiredSwap: '',
      price: null,
      priceDivisor: 4,
      style: '',
      minTeirAccepted: null,
      status: 'available'
    };
  }

  public onAdd = (newItem) => {
    // tslint:disable-next-line:prefer-const
    let returnItem: SwapItem = newItem;
    let pricePerOz: number =
      newItem.price / newItem.priceDivisor / newItem.packageSize;

    // marked as seasonal gets you a 10 cent/oz bump to pPerO
    pricePerOz = newItem.isSeasonal ? pricePerOz + 0.1 : pricePerOz;

    // <0.15 teir 1, 0.16-0.70 teir 2, >0.70 teir 3
    returnItem.teir = pricePerOz >= 0.71 ? 3 : pricePerOz > 0.15 ? 2 : 1;

    // Bump up a teir for one-off/ non-yearly beers
    if (newItem.isLimitedRlease) {
      returnItem.teir += 1;
    }

    this.dialogRef.close(returnItem);
  }
  public onCancel = () => {
    this.dialogRef.close();
  }
}
