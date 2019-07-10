import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProposalService, Proposal } from 'src/app/core/services/proposal.service';
import { SwapItem, BoardService } from 'src/app/core/services/board.service';
import { forkJoin } from 'rxjs';

@Component({
  selector: 'app-proposal-detail',
  templateUrl: './proposal-detail.component.html',
  styleUrls: ['./proposal-detail.component.scss']
})
export class ProposalDetailComponent implements OnInit {
  public proposal: Proposal;
  public itemFromBy: SwapItem;
  public itemFromTo: SwapItem;

  constructor(private route: ActivatedRoute,
    private proposalService: ProposalService,
    private boardService: BoardService) {
    this.proposal = {} as Proposal;
    this.itemFromBy = {} as SwapItem;
    this.itemFromTo = {} as SwapItem;
  }

  ngOnInit() {
    // this.proposalService.getProposal(this.route.snapshot.params.id).subscribe((result) => {
    //   this.proposal = result.payload.data() as Proposal;
    //   let itemByObs = this.boardService.getItem(this.proposal.itemFromBy);
    //   let itemToObs = this.boardService.getItem(this.proposal.itemFromTo);

    //   forkJoin([
    //     itemByObs,
    //     itemToObs
    //   ]).subscribe((result) => {
    //     this.itemFromBy = result[0].payload.data() as SwapItem;
    //     this.itemFromTo = result[1].payload.data() as SwapItem;
    //   })
    // });
  }

}
