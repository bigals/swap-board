import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, Router } from '@angular/router';
import { UserService } from './services/user.service';
import { SwapBoardUserModel } from './user.model';

@Injectable()
export class UserResolver implements Resolve<SwapBoardUserModel> {
  constructor(public userService: UserService, private router: Router) {}

  resolve(route: ActivatedRouteSnapshot): Promise<SwapBoardUserModel> {
    // tslint:disable-next-line:prefer-const
    let user = new SwapBoardUserModel();

    return new Promise((resolve, reject) => {
      this.userService
        .getCurrentUser()
        .then(res => {
          if (res.providerData[0].providerId === 'password') {
            user.image = '';
            user.uid = res.uid;
            user.name = res.displayName;
            user.provider = res.providerData[0].providerId;
            return resolve(user);
          } else {
            user.image = res.photoURL;
            user.uid = res.uid;
            user.name = res.displayName;
            user.provider = res.providerData[0].providerId;
            return resolve(user);
          }
        })
        .catch(err => {
          this.router.navigate(['/login']);
          return reject(err);
        });
    });
  }
}
