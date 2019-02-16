import { Component, OnInit, ViewChild } from '@angular/core';
import {
  Proposal,
  ProposalService
} from 'src/app/core/services/proposal.service';
import {
  MatPaginator,
  MatSort,
  MatTable,
  MatTableDataSource
} from '@angular/material';
import { ActivatedRoute, Router } from '@angular/router';
import { SelectionModel } from '@angular/cdk/collections';
import { BoardService, SwapItem } from 'src/app/core/services/board.service';
import { UserInfoService, UserInfo } from 'src/app/core/services/user-info.service';
import { DocumentSnapshot, Action } from 'angularfire2/firestore';
import { forkJoin, Observable } from 'rxjs';

@Component({
  selector: 'app-proposal-board',
  templateUrl: './proposal-board.component.html',
  styleUrls: ['./proposal-board.component.scss']
})
export class ProposalBoardComponent implements OnInit {
  public isDetailView: boolean;
  public detailItemFromBy: SwapItem;
  public detailItemFromTo: SwapItem;
  public displayedColumns: string[];
  public proposals: Proposal[];
  public proposalsDS: MatTableDataSource<Proposal>;
  public selection: SelectionModel<Proposal>;
  public currentUserName: string;
  public currentUid: string;
  public swapItems: any;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatTable) table: MatTable<any>;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private proposalService: ProposalService,
    private boardService: BoardService,
    private userInfoService: UserInfoService
  ) {
    this.proposals = [];
    this.displayedColumns = [
      'select',
      'by',
      'itemFromTo',
      'itemFromBy',
      'createdDate'
    ];
    this.isDetailView = false;
  }

  ngOnInit() {
    let needProposalIds = [];
    this.currentUserName = this.route.snapshot.data.data.name;
    this.currentUid = this.route.snapshot.data.data.uid;
    this.initGrid();
  }

  public initGrid = () => {
    this.proposalService.getAllProposals().subscribe(result => {
      for (const docChange of result) {
        if ((<Proposal>docChange.payload.doc.data()).to === this.currentUid) {
          this.proposals.push({
            id: docChange.payload.doc.id,
            ...docChange.payload.doc.data()
          } as Proposal);
        }
        this.boardService.getAllItems().subscribe((result) => {
          this.swapItems = {};
          for (let boardItem of result) {
            this.swapItems[boardItem.payload.doc.id] = boardItem.payload.doc.data();
          }
          this.proposalsDS = new MatTableDataSource<Proposal>(this.proposals);
          this.proposalsDS.paginator = this.paginator;
          this.proposalsDS.sort = this.sort;

          this.selection = new SelectionModel<Proposal>(false, []);
        });
      }
    });
  }

  public onAccept = () => {
    for (let proposal of this.selection.selected) {
      let ownedItemObs = this.boardService.getItem(proposal.itemFromTo);
      let recievedItemObs = this.boardService.getItem(proposal.itemFromBy);

      let foo = forkJoin([
        ownedItemObs,
        recievedItemObs
      ]).subscribe((result) => {
        let ownedItem: SwapItem = result[0].payload.data() as SwapItem;
        let recievedItem: SwapItem = result[1].payload.data() as SwapItem;
        let subjectStr = `Trade Complete: ${ownedItem.name} FOR ${recievedItem.name}`;
        let bodyStr = `Hello ${recievedItem.ownerDisplayName}!, ${this.currentUserName} has` +
          ` accepted the swap for your ${recievedItem.name} for their ${ownedItem.name}. Please` +
          ` arrange to meet in the office and swap your items.`;
        let mailToString = `mailto:test@example.com?subject=${encodeURIComponent(subjectStr)}&body=${encodeURIComponent(bodyStr)}`;

        // send email or something?
        window.open(mailToString);
        // grab the itemFromTo id and use it to delete from the board
        this.boardService.deleteItem(proposal.itemFromTo);
        // grab the itemFromBy id and use it to delete from the board
        this.boardService.deleteItem(proposal.itemFromBy);
        // delete the proposal
        this.proposalService.deleteProposal(proposal.id);
        //refresh grid
        this.initGrid();
        foo.unsubscribe();
      });
    }
  }
  public onDeny = () => {
    for (let proposal of this.selection.selected) {
      let ownedItemObs = this.boardService.getItem(proposal.itemFromTo);
      let recievedItemObs = this.boardService.getItem(proposal.itemFromBy);

      forkJoin([
        ownedItemObs,
        recievedItemObs
      ]).subscribe((result) => {
        let ownedItem: SwapItem = result[0].payload.data() as SwapItem;
        let recievedItem: SwapItem = result[1].payload.data() as SwapItem;

        // grab the itemFromTo id and use it to update the status back to available
        ownedItem.status = 'available';
        this.boardService.editItem(ownedItem);
        // grab the itemFromBy id and use it to update the status back to available
        recievedItem.status = 'available';
        this.boardService.editItem(recievedItem);
        // delete the proposal
        this.proposalService.deleteProposal(proposal.id);
        //refresh grid
        this.initGrid();
      });
    }
  }
  public goToDetail = (proposal: Proposal) => {
    let ownedItemObs = this.boardService.getItem(proposal.itemFromTo);
      let recievedItemObs = this.boardService.getItem(proposal.itemFromBy);

      let foo = forkJoin([
        ownedItemObs,
        recievedItemObs
      ]).subscribe((result) => {
        this.detailItemFromTo = result[0].payload.data() as SwapItem;
        this.detailItemFromBy = result[1].payload.data() as SwapItem;
        this.isDetailView = true;
        foo.unsubscribe();
      });
  };
  public isAllSelected = (whichGrid?: string) => {
    const numSelected = this.selection.selected.length;
    const numRows = this.proposalsDS.data.length;
    return numSelected === numRows;
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  public masterToggle = () => {
    this.isAllSelected()
      ? this.selection.clear()
      : this.proposalsDS.data.forEach(row => {
        return this.selection.select(row);
      });
  }

  public applyFilter = (inputVal: string) => {
    this.proposalsDS.filter = inputVal.trim().toLowerCase();
  }
  public getItemDisplayString = (id: string) => {
    const item = this.swapItems[id];
    return `${item.name} | ${item.brewery}`;
  }
}
