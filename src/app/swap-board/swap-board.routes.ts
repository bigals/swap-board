import { Routes } from '@angular/router';

import { MainBoardComponent } from './main-board/main-board.component';
import { ItemDetailComponent } from './item-detail/item-detail.component';
import { UserResolver } from '../core/user.resolver';

export const swapBoardRouterConfig: Routes = [
  {
    path: 'swap-board',
    component: MainBoardComponent,
    resolve: { data: UserResolver }
  },
  {
    path: 'swap-board/detail/:id',
    component: ItemDetailComponent,
    resolve: { data: UserResolver }
  }
];
