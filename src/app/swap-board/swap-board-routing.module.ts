import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { swapBoardRouterConfig } from './swap-board.routes';

@NgModule({
  imports: [RouterModule.forRoot(swapBoardRouterConfig, { useHash: false })],
  exports: [RouterModule]
})
export class SwapBoardRoutingModule {}
