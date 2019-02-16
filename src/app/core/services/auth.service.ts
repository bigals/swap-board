import { Injectable, Output, EventEmitter } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';

@Injectable()
export class AuthService {
  public isUserLoggedIn: boolean;
  private provider: firebase.auth.GoogleAuthProvider;
  @Output() authed = new EventEmitter<boolean>();
  constructor(public angularFireAuth: AngularFireAuth) {}

  public setUserLoggedIn = (value: boolean) => {
    this.isUserLoggedIn = value;
  }
  public getUserLoggedIn = (): boolean => {
    return this.isUserLoggedIn;
  }

  public doGoogleLogin = () => {
    return new Promise<any>((resolve, reject) => {
      // tslint:disable-next-line:prefer-const
      this.provider = new firebase.auth.GoogleAuthProvider();
      this.provider.addScope('profile');
      this.provider.addScope('email');
      this.angularFireAuth.auth
        .signInWithPopup(this.provider)
        .then(res => {
          this.setUserLoggedIn(true);
          this.authed.emit(true);
          resolve(res);
        })
        .catch(err => {
          console.log(err);
          this.authed.emit(false);
          this.setUserLoggedIn(false);
          reject(err);
        });
    });
  }

  public doRegister = value => {
    return new Promise<any>((resolve, reject) => {
      this.angularFireAuth.auth.createUserWithEmailAndPassword(value.email, value.password)
        .then(res => {
          this.setUserLoggedIn(true);
          this.authed.emit(true);
          resolve(res);
        })
        .catch(err => {
          this.setUserLoggedIn(false);
          this.authed.emit(false);
          reject(err);
        });
    });
  }

  public doLogin = value => {
    return new Promise<any>((resolve, reject) => {
      this.angularFireAuth.auth.signInWithEmailAndPassword(value.email, value.password)
        .then(res => {
          this.setUserLoggedIn(true);
          this.authed.emit(true);
          resolve(res);
        })
        .catch(err => {
          this.setUserLoggedIn(false);
          this.authed.emit(false);
          reject(err);
        });
    });
  }

  public doLogout = () => {
    return new Promise((resolve, reject) => {
        if (this.angularFireAuth.auth.currentUser) {
          this.angularFireAuth.auth.signOut().then(() => {
            this.setUserLoggedIn(false);
            this.authed.emit(false);
            resolve();
          }).catch(() => {

          });
        } else {
          this.setUserLoggedIn(false);
          this.authed.emit(false);
          reject();
        }
    });
  }
}
