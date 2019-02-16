import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { AdminUsersComponent } from './admin-users/admin-users.component';
import { AdminProposalsComponent } from './admin-proposals/admin-proposals.component';
import { AdminBeersComponent } from './admin-beers/admin-beers.component';
import { MatTabsModule } from '@angular/material';

@NgModule({
  declarations: [AdminDashboardComponent, AdminUsersComponent, AdminProposalsComponent, AdminBeersComponent],
  imports: [
    CommonModule,
    MatTabsModule,
  ],
  exports: [
    AdminUsersComponent,
    AdminProposalsComponent,
    AdminBeersComponent
  ]
})
export class AdminModule { }
