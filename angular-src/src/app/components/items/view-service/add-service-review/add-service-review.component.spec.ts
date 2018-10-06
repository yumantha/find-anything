import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {AddServiceReviewDialog} from './add-service-review.component';

describe('AddServiceReviewDialog', () => {
  let component: AddServiceReviewDialog;
  let fixture: ComponentFixture<AddServiceReviewDialog>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AddServiceReviewDialog]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddServiceReviewDialog);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
