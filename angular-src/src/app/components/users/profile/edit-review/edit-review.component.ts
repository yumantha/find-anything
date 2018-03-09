import {Component, OnInit, Inject} from '@angular/core';
import {MatDialogRef, MAT_DIALOG_DATA} from "@angular/material";
import {ReviewService} from "../../../../services/reviews/review.service";

@Component({
  selector: 'app-edit-review',
  templateUrl: './edit-review.component.html',
  styleUrls: ['./edit-review.component.css']
})
export class EditReviewDialog implements OnInit {
  review: any = this.data.review;

  constructor(
    private dialogRef: MatDialogRef<EditReviewDialog>,
    @Inject(MAT_DIALOG_DATA) private data: any,
    private reviewService: ReviewService
  ) { }

  ngOnInit() {
  }

  onDialogOk() {
    const editedReview = {
      review: this.review.review,
      rating: this.review.rating,
      itemId: this.review.item.id,
      itemType: this.review.item.type
    };

    if(localStorage.getItem('user_type') !== 'customer') {
      return this.dialogRef.close({
        success: false,
        msg: "You must be logged as a customer to add a review"
      });
    }

    if(!(editedReview.review && editedReview.rating)) {
      return this.dialogRef.close({
        success: false,
        msg: "Please enter a review and a rating"
      });
    }

    this.reviewService.editReview(this.review.id, this.review.itemId, this.review.itemType, editedReview)
      .subscribe(data => {
        this.dialogRef.close(data);
      })
  }

  onDialogCancel() {
    this.dialogRef.close({
      success: false
    });
  }

}
