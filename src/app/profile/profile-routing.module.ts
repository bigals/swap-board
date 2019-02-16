import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { profileRouterConfig } from './profile.routes';

@NgModule({
  imports: [RouterModule.forRoot(profileRouterConfig, { useHash: false })],
  exports: [RouterModule]
})
export class ProfileRoutingModule {}
