import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Review, EyeColor, Height, HairColor, Physique } from 'src/app/models/review.model';
import { ReviewService } from 'src/app/services/review.service';

@Component({
  selector: 'app-add-review-second-step',
  templateUrl: './add-review-second-step.component.html',
  styleUrls: ['./add-review-second-step.component.scss']
})
export class AddReviewSecondStepComponent implements OnInit {
  data: Review;  
  selectedEyeColor: string;
  selectedHairColor: string;
  selectedPhysique: string;
  selectedHeight: string;

  constructor(private router: Router, private reviewService: ReviewService) { }

  ngOnInit(): void {
    this.data = this.reviewService.getReviewData();
  }

  gotoPrevStep() {
    this.router.navigate(['add-review']);
  }

  gotoNextStep() {
    this.router.navigate(['add-review3']);
  }

  onHeightCheck(event: any) {
    this.data.physicalChar.height = this.selectedHeight[0] as Height;
  }

  onEyeColorCheck(event: any) {
    this.data.physicalChar.eyeColor = this.selectedEyeColor[0] as EyeColor;
  }

  onHairColorCheck(event: any) {
    this.data.physicalChar.hairColor = this.selectedHairColor[0] as HairColor;
  }

  onPhysiqueCheck(event: any) {
    this.data.physicalChar.physique = this.selectedPhysique[0] as Physique;
  }

}
