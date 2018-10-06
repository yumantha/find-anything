import {Component, OnInit, Inject} from '@angular/core';
import {MatDialogRef, MAT_DIALOG_DATA} from "@angular/material";
import {ReviewService} from "../../../../services/reviews/review.service";

@Component({
  selector: 'app-confirm-review-delete',
  templateUrl: './confirm-review-delete.component.html',
  styleUrls: ['./confirm-review-delete.component.css']
})
export class ConfirmReviewDeleteDialog implements OnInit {
  review: any = this.data.review;

  constructor(
    private dialogRef: MatDialogRef<ConfirmReviewDeleteDialog>,
    @Inject(MAT_DIALOG_DATA) private data: any,
    private reviewService: ReviewService
  ) {
  }

  ngOnInit() {
  }

  onDialogConfirm() {
    this.reviewService.deleteReview(this.review.id, this.review.item.id, this.review.item.type)
      .subscribe(data => {
        this.dialogRef.close(data);
      });
  }

  onDialogCancel() {
    this.dialogRef.close({
      success: false
    });
  }
}
