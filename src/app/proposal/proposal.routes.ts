import { Routes } from '@angular/router';

import { ProposalBoardComponent } from './proposal-board/proposal-board.component';
import { ProposalDetailComponent } from './proposal-detail/proposal-detail.component';
import { UserResolver } from '../core/user.resolver';

export const proposalRouterConfig: Routes = [
  {
    path: 'pending-swaps',
    component: ProposalBoardComponent,
    resolve: { data: UserResolver }
  },
  {
    path: 'pending-swaps/detail/:id',
    component: ProposalDetailComponent,
    resolve: { data: UserResolver }
  }
];
