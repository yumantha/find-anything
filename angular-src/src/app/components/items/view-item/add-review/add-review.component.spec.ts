import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddReviewDialog } from './add-review.component';

describe('AddReviewDialog', () => {
  let component: AddReviewDialog;
  let fixture: ComponentFixture<AddReviewDialog>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddReviewDialog ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddReviewDialog);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
