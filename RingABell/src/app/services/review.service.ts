import { Injectable } from '@angular/core';
import { Review } from '../models/review.model';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class ReviewService {

  constructor(private firestore: AngularFirestore) { }

  public addReview(review: Review) {
    return this.firestore.collection('reviews').add(review);
  }
}
