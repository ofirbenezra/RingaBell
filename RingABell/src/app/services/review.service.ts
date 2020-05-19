import { Injectable } from '@angular/core';
import { Review } from '../models/review.model';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class ReviewService {

  private data: Review;

  constructor(private firestore: AngularFirestore) {
    this.data = {
      age: 25,
      firstName: '',
      lastName: '',
      hebFirstName: '',
      hebLastName: '',
      nickName: '',
      numOfReports: 0,
      behaviorChar: {
        shouts: false,
        accusesOfBeingUnfaithful: false,
        criticizem: false,
        destroysProperty: false,
        forcesToHaveSex: false,
        threatens: false
      },
      physicalChar: {
      }
    }
  }

  public addReview(review: Review) {
    return this.firestore.collection('reviews').add(review);
  }

  public getReviewData(): Review {
    return this.data;
  }

  public getReviews() {
    return this.firestore.collection('reviews').snapshotChanges();
  }
}
