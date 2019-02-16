import {
  Component,
  OnInit,
  OnChanges,
  Input,
  SimpleChange,
  SimpleChanges
} from '@angular/core';
import { MatDrawer } from '@angular/material';
import { UserService } from './core/services/user.service';
import { AuthService } from './core/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnChanges {
  @Input() isUserLoggedIn: boolean;
  public title: string;
  public navBtns: any[];
  public currentUserName: string;
  public userPictureSrc: string;

  constructor(
    private router: Router,
    private userService: UserService,
    private authService: AuthService
  ) {
    this.title = 'Swap Board';
    this.navBtns = [
      {
        label: 'Swap Board',
        route: '/swap-board',
        action: ''
      },
      {
        label: 'Pending Swaps',
        route: '/pending-swaps',
        action: ''
      },
      {
        label: 'My Profile',
        route: '/profile',
        action: ''
      },
      {
        label: 'Logout',
        route: '',
        action: (callback) => {
          this.authService
            .doLogout()
            .then(() => {
              // clear user data/redirect to login
              this.currentUserName = '';
              this.userPictureSrc = '';
              //callback();
              this.router.navigate(['/login']);
            })
            .catch(() => {
              // idk do nothing
              // alert logout failed
              window.alert('Logout Failed');
            });
        }
      }
    ];
    this.isUserLoggedIn = this.authService.getUserLoggedIn();
  }
  ngOnInit() {
    this.userService.getCurrentUser().then(userObj => {
      this.currentUserName = userObj.displayName;
      this.userPictureSrc = userObj.photoURL;
    });
    this.authService.authed.subscribe(authed => {
      this.refreshUserInfo();
    });
  }
  ngOnChanges(changes: SimpleChanges) {
    for (const property in changes) {
      if (property === 'isUserLoggedIn') {
        const change = changes[property];
        if (change.currentValue === 'true') {
          // we are just logged in now, refresh header
          this.refreshUserInfo();
        } else {
          // we are logging out, hide/clear banner
          this.refreshUserInfo();
        }
      }
    }
  }

  public onAuthedEvent = event => {
    if (event) {
      this.refreshUserInfo();
    }
  }

  private refreshUserInfo = () => {
    this.userService.getCurrentUser().then(userObj => {
      this.currentUserName = userObj.displayName;
      this.userPictureSrc = userObj.photoURL;
    });
  }
}
