import { Routes } from '@angular/router';

import { ViewProfileComponent } from './view-profile/view-profile.component';
import { EditProfileComponent } from './edit-profile/edit-profile.component';
import { UserResolver } from '../core/user.resolver';

export const profileRouterConfig: Routes = [
  {
    path: 'profile',
    component: ViewProfileComponent,
    resolve: { data: UserResolver }
  },
  {
    path: 'profile/edit',
    component: EditProfileComponent,
    resolve: { data: UserResolver }
  }
];
