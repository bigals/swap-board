import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { proposalRouterConfig } from './proposal.routes';

@NgModule({
  imports: [RouterModule.forRoot(proposalRouterConfig, { useHash: false })],
  exports: [RouterModule]
})
export class ProposalRoutingModule {}
