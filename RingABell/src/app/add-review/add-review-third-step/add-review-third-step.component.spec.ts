import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddReviewThirdStepComponent } from './add-review-third-step.component';

describe('AddReviewThirdStepComponent', () => {
  let component: AddReviewThirdStepComponent;
  let fixture: ComponentFixture<AddReviewThirdStepComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddReviewThirdStepComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddReviewThirdStepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
