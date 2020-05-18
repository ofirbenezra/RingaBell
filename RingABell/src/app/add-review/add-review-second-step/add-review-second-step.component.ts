import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-review-second-step',
  templateUrl: './add-review-second-step.component.html',
  styleUrls: ['./add-review-second-step.component.scss']
})
export class AddReviewSecondStepComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  gotoPrevStep() {
    this.router.navigate(['add-review']);
  }

  onRelationShipCheck() {
    
  }

}
