import {
  Component,
  OnInit,
  ViewChild,
  QueryList,
  ViewChildren,
  AfterViewInit
} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SelectionModel } from '@angular/cdk/collections';
import {
  MatPaginator,
  MatSort,
  MatDialog,
  MatDialogRef,
  MatTableDataSource,
  MatTable,
  MAT_DIALOG_DATA
} from '@angular/material';

import { SwapItem, BoardService } from '../../core/services/board.service';
import { AddEditItemDialogComponent } from '../add-edit-item-dialog/add-edit-item-dialog.component';
import { ProposeTradeDialogComponent } from '../propose-trade-dialog/propose-trade-dialog.component';
import { Proposal } from 'src/app/core/services/proposal.service';
import { UserService } from 'src/app/core/services/user.service';

@Component({
  selector: 'app-main-board',
  templateUrl: './main-board.component.html',
  styleUrls: ['./main-board.component.scss']
})
export class MainBoardComponent implements OnInit, AfterViewInit {
  public title: string;
  public displayedColumns: string[];
  public swapItems: any;
  public availableSwapItemsDS: MatTableDataSource<SwapItem>;
  public pendingSwapItemsDS: MatTableDataSource<SwapItem>;
  public availableSelection: any;
  public pendingSelection: any;
  public currentUid: string;
  public currentUsername: string;
  @ViewChildren(MatPaginator) paginator = new QueryList<MatPaginator>();
  @ViewChildren(MatSort) sort = new QueryList<MatSort>();

  constructor(
    private route: ActivatedRoute,
    private boardService: BoardService,
    private matDialog: MatDialog,
    public userService: UserService
  ) {
    this.displayedColumns = [
      'select',
      'name',
      'brewery',
      'style',
      'teir',
      'numAvailable',
      'packageSize',
      'ownerDisplayName',
      'desiredSwap',
      'minTeirAccepted'
    ];
  }

  ngOnInit() {
    this.boardService.getAllItems().subscribe(result => {
      this.swapItems = result.map(elem => {
        return {
          id: elem.payload.doc.id,
          ...elem.payload.doc.data()
        } as SwapItem;
      });

      this.availableSwapItemsDS = new MatTableDataSource<SwapItem>(
        this.swapItems.filter((item, index) => {
          return item.status !== 'pending';
        })
      );
      this.pendingSwapItemsDS = new MatTableDataSource<SwapItem>(
        this.swapItems.filter((item, index) => {
          return item.status === 'pending';
        })
      );
      this.availableSelection = new SelectionModel<SwapItem>(true, []);
      this.pendingSelection = new SelectionModel<SwapItem>(true, []);

      this.availableSwapItemsDS.paginator = this.paginator.toArray()[0];
      this.availableSwapItemsDS.sort = this.sort.toArray()[0];
      this.pendingSwapItemsDS.paginator = this.paginator.toArray()[1];
      this.pendingSwapItemsDS.sort = this.sort.toArray()[1];

      this.currentUid = this.route.snapshot.data.data.uid;
      this.currentUsername = this.route.snapshot.data.data.name;
    });
  }

  ngAfterViewInit() {}
  public isAllSelected = (whichGrid?: string) => {
    if (whichGrid && whichGrid === 'pending' && this.pendingSelection) {
      const numSelected = this.pendingSelection.selected.length;
      const numRows = this.pendingSwapItemsDS.data.length;
      return numSelected === numRows;
    } else {
      const numSelected = this.availableSelection.selected.length;
      const numRows = this.availableSwapItemsDS.data.length;
      return numSelected === numRows;
    }
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  public masterToggle = (whichGrid: string = '') => {
    if (whichGrid && whichGrid === 'pending') {
      this.isAllSelected('pending')
        ? this.pendingSelection.clear()
        : this.pendingSwapItemsDS.data.forEach(row =>
            this.pendingSelection.select(row)
          );
    } else {
      this.isAllSelected()
        ? this.availableSelection.clear()
        : this.availableSwapItemsDS.data.forEach(row =>
            this.availableSelection.select(row)
          );
    }
  }

  public applyFilter = (inputVal: string, whichGrid: string) => {
    if (whichGrid === 'pending') {
      this.pendingSwapItemsDS.filter = inputVal.trim().toLowerCase();
    } else {
      this.availableSwapItemsDS.filter = inputVal.trim().toLowerCase();
    }
  }

  public showEditPostingBtn = () => {
    return (
      this.availableSelection &&
      this.availableSelection.selected &&
      this.availableSelection.selected.length &&
      this.isASelectionOwnedByUser(this.availableSelection)
    );
  }
  public showDeleteBtn = () => {
    return (
      this.availableSelection &&
      this.availableSelection.selected &&
      this.availableSelection.selected.length === 1 &&
      this.availableSelection.selected[0].owner === this.currentUid
    );
  }

  public showProposeBtn = () => {
    return (
      this.availableSelection &&
      this.availableSelection.selected &&
      this.availableSelection.selected.length &&
      this.availableSelection.selected.length === 1 &&
      this.isAtleastOneUnOwnedSelection(this.availableSelection)
    );
  }

  private isASelectionOwnedByUser = selects => {
    for (const item of selects.selected) {
      if (item.owner === this.currentUid) {
        return true;
      }
    }
    return false;
  }
  private isAtleastOneUnOwnedSelection = selects => {
    for (const item of selects.selected) {
      if (item.owner !== this.currentUid) {
        return true;
      }
    }
    return false;
  }

  private updateItems = updatedItems => {
    for (const updatedItem of updatedItems) {
      for (let item of this.availableSwapItemsDS.data) {
        if (item.id === updatedItem.id) {
          item = updatedItem;
        }
      }
    }
  }

  private getNextId = () => {
    // this.availableSwapItemsDS.data.sort((item1, item2) => {
    //   return item1.id - item2.id;
    // });
    // return this.availableSwapItemsDS.data[
    //   this.availableSwapItemsDS.data.length - 1
    // ].id++;
  }

  public onDeleteItem = selected => {
    if (selected.length === 1) {
      this.boardService.deleteItem(selected.id);
      for (let i = 0; i < this.availableSwapItemsDS.data.length; i++) {
        if (selected[0].id === this.availableSwapItemsDS.data[i].id) {
          this.availableSwapItemsDS.data.splice(i, 1);
          this.availableSwapItemsDS = new MatTableDataSource<SwapItem>(
            this.availableSwapItemsDS.data
          );
          this.availableSwapItemsDS.paginator = this.paginator.toArray()[0];
          this.availableSwapItemsDS.sort = this.sort.toArray()[0];

          this.availableSelection = new SelectionModel<SwapItem>(true, []);
        }
      }
    } else {
      // must select only one item to delete at a time
      window.alert(
        'Please select only one item to delete at a time; Also you may only delete your posted items'
      );
    }
  }
  public onAddItem = () => {
    this.matDialog
      .open(AddEditItemDialogComponent, {
        width: '35vw',
        data: {
          title: 'Add Item',
          isEdit: false,
          currentUser: this.currentUid,
          currentUserName: this.currentUsername
          // tslint:disable-next-line:arrow-return-shorthand
        }
      })
      .afterClosed()
      .subscribe((result: SwapItem) => {
        if (result) {
          result.untappedId = '';
          result.breweryDBId = '';
          this.boardService.addItem(result);
          // this.swapItemsDS.data.push(result);
          this.availableSwapItemsDS = new MatTableDataSource<SwapItem>(
            this.availableSwapItemsDS.data
          );
          this.availableSwapItemsDS.paginator = this.paginator.toArray()[0];
          this.availableSwapItemsDS.sort = this.sort.toArray()[0];

          this.availableSelection = new SelectionModel<SwapItem>(true, []);
        }
      });
  }
  public onEditItem = () => {
    this.matDialog
      .open(AddEditItemDialogComponent, {
        width: '35vw',
        data: {
          title: 'Edit Item(s)',
          isEdit: true,
          items: this.availableSelection.selected.filter((item, index) => {
            return item.owner === this.currentUid;
          })
        }
      })
      .afterClosed()
      .subscribe(result => {
        this.updateItems(result);
      });
  }
  public onProposeTrade = () => {
    const dialogRef = this.matDialog.open(ProposeTradeDialogComponent, {
      width: '35vw',
      data: {
        title: 'Propose Trade',
        currentUser: this.currentUid,
        currentUserName: this.currentUsername,
        item: this.availableSelection.selected[0],
        ownedItems: this.swapItems.filter((item, index) => {
          return item.owner === this.currentUid && item.status !== 'pending';
        })
      }
    });

    dialogRef.afterClosed().subscribe((result: Proposal) => {
      const proposal = result;
      // remove proposals from main board (mark them pending trade)
      for (let i = 0; i < this.swapItems.length; i++) {
        if (
          result.itemFromBy === this.swapItems[i].id ||
          result.itemFromTo === this.swapItems[i].id
        ) {
          this.swapItems[i].status = 'pending';
          this.boardService.editItem(this.swapItems[i]);
        }
      }
      this.availableSwapItemsDS = new MatTableDataSource<SwapItem>(
        this.swapItems.filter((item, index) => {
          return item.status !== 'pending';
        })
      );
      this.pendingSwapItemsDS = new MatTableDataSource<SwapItem>(
        this.swapItems.filter((item, index) => {
          return item.status === 'pending';
        })
      );
      this.availableSwapItemsDS.paginator = this.paginator.toArray()[0];
      this.availableSwapItemsDS.sort = this.sort.toArray()[0];
      this.availableSelection = new SelectionModel<SwapItem>(true, []);

      this.pendingSwapItemsDS.paginator = this.paginator.toArray()[1];
      this.pendingSwapItemsDS.sort = this.sort.toArray()[1];
      this.pendingSelection = new SelectionModel<SwapItem>(true, []);
    });
  }
}
