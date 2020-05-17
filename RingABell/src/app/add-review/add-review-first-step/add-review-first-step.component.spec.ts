import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddReviewFirstStepComponent } from './add-review-first-step.component';

describe('AddReviewFirstStepComponent', () => {
  let component: AddReviewFirstStepComponent;
  let fixture: ComponentFixture<AddReviewFirstStepComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddReviewFirstStepComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddReviewFirstStepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
