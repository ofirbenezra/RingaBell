import { Component, OnInit } from '@angular/core';
import { Review, EyeColor, HairColor, Physique, Height } from 'src/app/models/review.model';
import { Router } from '@angular/router';
import { ReviewService } from 'src/app/services/review.service';

@Component({
  selector: 'app-add-review-first-step',
  templateUrl: './add-review-first-step.component.html',
  styleUrls: ['./add-review-first-step.component.scss']
})
export class AddReviewFirstStepComponent implements OnInit {

  data: Review;

  constructor(private router: Router, private reviewService: ReviewService) { }

  ngOnInit() {
    this.reviewService.initData();
    this.data = this.reviewService.getReviewData();    
  }

  gotoNextStep() {
    this.router.navigate(['add-review2']);
  }
}
