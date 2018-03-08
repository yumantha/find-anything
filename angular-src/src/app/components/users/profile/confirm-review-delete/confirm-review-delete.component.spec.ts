import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmReviewDeleteDialog } from './confirm-review-delete.component';

describe('ConfirmReviewDeleteDialog', () => {
  let component: ConfirmReviewDeleteDialog;
  let fixture: ComponentFixture<ConfirmReviewDeleteDialog>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConfirmReviewDeleteDialog ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfirmReviewDeleteDialog);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
