import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddReviewSecondStepComponent } from './add-review-second-step.component';

describe('AddReviewSecondStepComponent', () => {
  let component: AddReviewSecondStepComponent;
  let fixture: ComponentFixture<AddReviewSecondStepComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddReviewSecondStepComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddReviewSecondStepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
