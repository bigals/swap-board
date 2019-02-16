import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';

import {
  Proposal,
  ProposalService
} from '../../core/services/proposal.service';

@Component({
  selector: 'app-propose-trade-dialog',
  templateUrl: './propose-trade-dialog.component.html',
  styleUrls: ['./propose-trade-dialog.component.scss']
})
export class ProposeTradeDialogComponent implements OnInit {
  public title: string;
  public nextId: number;
  constructor(
    private proposalService: ProposalService,
    public dialogRef: MatDialogRef<ProposeTradeDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data
  ) {
    this.title = 'Propose Swap';
  }

  ngOnInit() {
    this.data.proposal = {
      by: this.data.currentUser,
      byName: this.data.currentUserName,
      to: this.data.item.owner,
      toName: this.data.item.ownerDisplayName,
      itemFromBy: 0,
      itemFromTo: this.data.item.id,
      createdDate: new Date().toISOString()
    };
  }
  public onCreate = () => {
    this.proposalService.putProposal(this.data.proposal);
    this.dialogRef.close(this.data.proposal);
  }
  public onCancel = () => {
    this.dialogRef.close();
  }
}
