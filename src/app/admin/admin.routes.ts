import { Routes } from '@angular/router';

import { UserResolver } from '../core/user.resolver';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';

export const adminRouterConfig: Routes = [
  {
    path: 'admin',
    component: AdminDashboardComponent,
    resolve: { data: UserResolver }
  }
];