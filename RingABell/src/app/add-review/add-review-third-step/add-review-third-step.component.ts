import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Review, Relation } from 'src/app/models/review.model';
import { ReviewService } from 'src/app/services/review.service';

@Component({
  selector: 'app-add-review-third-step',
  templateUrl: './add-review-third-step.component.html',
  styleUrls: ['./add-review-third-step.component.scss']
})
export class AddReviewThirdStepComponent implements OnInit {
  data: Review;
  selectedRelation: string;

  constructor(private router: Router, private reviewService: ReviewService) {
    this.data = this.reviewService.getReviewData();
  }

  ngOnInit(): void {

  }

  onRelationShipCheck(event: any) {
    this.data.relation = this.selectedRelation[0] as Relation;
  }

  gotoPrevStep() {
    this.router.navigate(['add-review2']);
  }

  sendReport() {
    this.reviewService.addReview(this.data).then((res) => {
      this.router.navigate(['thank-you']);
    }).catch(function (error) {
      alert('Error');
      
    });
  }

}
