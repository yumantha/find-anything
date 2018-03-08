import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditReviewDialog } from './edit-review.component';

describe('EditReviewDialog', () => {
  let component: EditReviewDialog;
  let fixture: ComponentFixture<EditReviewDialog>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditReviewDialog ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditReviewDialog);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
