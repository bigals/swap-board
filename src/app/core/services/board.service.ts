import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

export interface SwapItem {
  id: string;
  owner: string;
  ownerDisplayName: string;
  name: string;
  brewery: string;
  packageSize: number;
  numAvailable: number;
  desiredSwap: string;
  teir: number;
  price: number;
  priceDivisor: number;
  style: string;
  minTeirAccepted: number;
  select?: boolean;
  status: 'pending' | 'available';
  breweryDBId: string;
  untappedId: string;
}

@Injectable({
  providedIn: 'root'
})
export class BoardService {
  constructor(private firestore: AngularFirestore) {}

  public getAllItems = () => {
    return this.firestore.collection('board-items').snapshotChanges();
  }

  public getItem = (id: string) => {
    return this.firestore.doc(`board-items/${id}`).snapshotChanges();
  }

  public addItem = (item: SwapItem) => {
    return this.firestore.collection('board-items').add(item);
  }

  public deleteItem = (id: string) => {
    this.firestore.doc(`board-items/${id}`).delete();
  }

  public editItem = (item: SwapItem) => {
    this.firestore.doc(`board-items/${item.id}`).set(item);
  }
}
