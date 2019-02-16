import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { rootRouterConfig } from './app.routes';

@NgModule({
  imports: [RouterModule.forRoot(rootRouterConfig, { useHash: false })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
