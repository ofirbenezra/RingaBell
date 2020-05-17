import { Component, OnInit } from '@angular/core';
import { Review } from 'src/app/models/review.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-review-first-step',
  templateUrl: './add-review-first-step.component.html',
  styleUrls: ['./add-review-first-step.component.scss']
})
export class AddReviewFirstStepComponent implements OnInit {
  
  data: Review;
  
  constructor(private router: Router) { }

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

  gotoNextStep() {
    this.router.navigate(['add-review2']);
  }
}
