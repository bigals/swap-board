import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

export interface UserInfo {
  id: string;
  favoriteBrewery: string;
  favoriteStyle: string;
  username: string;
  displayName: string;
  userImage: string;
  userAssociatedId: string;
  untappedId: string;
}

@Injectable({
  providedIn: 'root'
})
export class UserInfoService {
  constructor(private firestore: AngularFirestore) {}

  public getAllUserInfo = () => {
    return this.firestore.collection('user-info').snapshotChanges();
  }

  public getUserInfo = (id: string) => {
    return this.firestore
      .collection(`user-info`, ref => ref.where('associatedUserId', '==', id))
      .snapshotChanges();
  }

  public createUserInfo = (item: UserInfo) => {
    return this.firestore.collection('user-info').add(item);
  }

  public deleteUserInfo = (id: string) => {
    this.firestore.doc(`user-info/${id}`).delete();
  }

  public editUserInfo = (item: UserInfo) => {
    this.firestore.doc(`user-info/${item.id}`).set(item);
  }
}
