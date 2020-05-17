import { Component, OnInit, Inject } from '@angular/core';
// import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Review } from '../models/review.model';
import { ReviewService } from '../services/review.service';

@Component({
  templateUrl: './add-review-dialog.component.html',
  styleUrls: ['./add-review-dialog.component.scss']
})
export class AddReviewDialogComponent implements OnInit {

  data: Review;
  // constructor(public dialogRef: MatDialogRef<AddReviewDialogComponent>,
  //   @Inject(MAT_DIALOG_DATA) public data: Review, private reviewService: ReviewService) { }

  constructor(private reviewService: ReviewService) {

  }

  ngOnInit(): void {
    this.data = {
      age: 25,
      firstName: '',
      lastName: '',
      hebFirstName: '',
      hebLastName: '',
      characteristics: {
        shouts: false,
        accusesOfBeingUnfaithful: false,
        criticizem: false,
        destroysProperty: false,
        forcesToHaveSex: false,
        threatens: false
      }
    }
  }

  onNoClick(): void {
    // this.dialogRef.close();
  }

  onSave() {
    this.reviewService.addReview(this.data);
  }

}
