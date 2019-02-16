import { Injectable } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';

@Injectable()
export class UserService {
  constructor(
    public firestore: AngularFirestore,
    public angularFireAuth: AngularFireAuth
  ) {}

  public getCurrentUser = () => {
    return new Promise<any>((resolve, reject) => {
      // tslint:disable-next-line:no-shadowed-variable prefer-const
      let user = this.angularFireAuth.auth.onAuthStateChanged((user) => {
        if (user) {
          resolve(user);
        } else {
          resolve(false);
        }
      });
    });
  }

  public updateCurrentUser = value => {
    return new Promise<any>((resolve, reject) => {
      // tslint:disable-next-line:prefer-const
      let user = this.angularFireAuth.auth.currentUser;
      user
        .updateProfile({
          displayName: value.name,
          photoURL: user.photoURL
        })
        .then(res => {
          resolve(res);
        })
        .catch(err => {
          reject(err);
        });
    });
  }
}
