import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireDatabase, AngularFireList, AngularFireObject } from 'angularfire2/database';

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
  // constructor(private firestore: AngularFirestore) {}

  // public getAllProposals = () => {
  //   return this.firestore.collection('proposals').snapshotChanges();
  // }
  // public getProposal = (id: number) => {
  //   return this.firestore.doc(`proposals/${id}`).snapshotChanges();
  // }
  // public putProposal = (proposal: Proposal) => {
  //   return this.firestore.collection('proposals').add(proposal);
  // }
  // public deleteProposal = (id: string) => {
  //   this.firestore.doc(`proposals/${id}`).delete();
  // }
  private dbPath: string;
  public proposals: AngularFireList<Proposal>;
  public proposal: AngularFireObject<Proposal>;

  constructor(private db: AngularFireDatabase) {
    this.dbPath = '/proposals';
    this.proposals = null;
    this.proposal = null;
  }

  public getAllProposals = () => {
    this.proposals = this.db.list(this.dbPath);
    return this.proposals;
  }

  public getProposal = (id: number) => {
    const proposalPath = `${this.dbPath}/${id}`;
    this.proposal = this.db.object(proposalPath);
    return this.proposal;
  }

  public createProposal = (proposal: Proposal) => {
    this.proposals.push(proposal).catch((error) => {
      console.log(error);
    });
  }

  public updateProposal = (proposal: Proposal) => {
    this.proposals.update(proposal.id, proposal).catch((error) => {
      console.log(error);
    });
  }

  public deleteProposal = (id: string) => {
    this.proposals.remove(id).catch((error) => {
      console.log(error);
    });
  }
}
