import { Component, OnInit } from '@angular/core';
import { Review } from '../models/review.model';
// import { MatDialog } from '@angular/material/dialog';
import { AddReviewDialogComponent } from '../add-review-dialog/add-review-dialog.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  addReview() {
    // const review: Review = {
    //   age: 25,
    //   firstName: '',
    //   lastName: '',
    //   hebFirstName: '',
    //   hebLastName: '',
    //   characteristics: {
    //     shouts: false,
    //     accusesOfBeingUnfaithful: false,
    //     criticizem: false,
    //     destroysProperty: false,
    //     forcesToHaveSex: false,
    //     threatens: false
    //   }
    // }
    // const dialogRef = this.dialog.open(AddReviewDialogComponent, {
    //   // width: '250px',
    //   data: review
    // });

    // dialogRef.afterClosed().subscribe(result => {
    //   console.log('The dialog was closed');
    //   // this.animal = result;
    // });
  }

}
