import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

export interface Proposal {
  id: string;
  by: string;
  to: string;
  itemFromBy: string;
  itemFromTo: string;
  createdDate: Date;
}

@Injectable({
  providedIn: 'root'
})
export class ProposalService {
  constructor(private firestore: AngularFirestore) {}

  public getAllProposals = () => {
    return this.firestore.collection('proposals').snapshotChanges();
  }
  public getProposal = (id: number) => {
    return this.firestore.doc(`proposals/${id}`).snapshotChanges();
  }
  public putProposal = (proposal: Proposal) => {
    return this.firestore.collection('proposals').add(proposal);
  }
  public deleteProposal = (id: string) => {
    this.firestore.doc(`proposals/${id}`).delete();
  }
}
