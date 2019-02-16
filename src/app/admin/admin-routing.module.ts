import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { adminRouterConfig } from './admin.routes';

@NgModule({
  imports: [RouterModule.forRoot(adminRouterConfig, { useHash: false })],
  exports: [RouterModule]
})
export class AdminRoutingModule {}
