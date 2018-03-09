import {Component, OnInit} from '@angular/core';
import {ItemService} from "../../../services/items/item.service";
import {Router} from "@angular/router";
import {FlashMessagesService} from "angular2-flash-messages";
import {MatDialog} from "@angular/material";
import {ConfirmServicedeleteDialog} from "./confirm-servicedelete/confirm-servicedelete.component";
import {ConfirmReviewDeleteDialog} from "../../users/profile/confirm-review-delete/confirm-review-delete.component";
import {AddServiceReviewDialog} from "./add-service-review/add-service-review.component";
import {EditReviewDialog} from "../../users/profile/edit-review/edit-review.component";
import {AuthService} from "../../../services/authenticate/auth.service";
import {ReviewService} from "../../../services/reviews/review.service";

@Component({
  selector: 'app-view-service',
  templateUrl: './view-service.component.html',
  styleUrls: ['./view-service.component.css']
})
export class ViewServiceComponent implements OnInit {
  loggedUser: String = localStorage.getItem('user_id');
  service: any;
  seller: String;
  sellerProfile: String;
  isCustomer: Boolean;
  routeArray: String[] = this.router.url.split("/");
  serviceId: String = this.routeArray[this.routeArray.length - 1];
  dataAvailable: Boolean = false;
  isOwner: Boolean = false;
  isFav: Boolean = false;

  reviewsAvailable: Boolean = false;
  reviewAdded: Boolean = false;

  reviews: any[] = [];

  constructor(
    private itemService: ItemService,
    private authService: AuthService,
    private reviewService: ReviewService,
    private router: Router,
    private flashMessagesService: FlashMessagesService,
    private dialog: MatDialog
  ){ }

  ngOnInit() {
    this.itemService.getService(this.serviceId)
      .subscribe(data => {
        if(data.success) {
          this.service = data.service;
          this.seller = data.seller;
          this.dataAvailable = true;
          this.sellerProfile = '/users/seller/' + data.service.seller;

          if(data.service.seller == localStorage.getItem('user_id')) {
            this.isOwner = true;
          }

          if(localStorage.getItem('user_type') === 'customer') {
            this.isCustomer = true;
          }

          if(this.service.favBy.includes(localStorage.getItem('user_id'))){
            this.isFav = true;
          }

          if(this.service.reviews.length > 0) {
            this.reviewsAvailable = true;

            this.service.reviews.forEach((review) => {
              this.reviewService.getReview(review, 'any', 'any')
                .subscribe(data => {
                  if(data.review.customer.id === this.loggedUser) {
                    this.reviewAdded = true;
                  }

                  this.reviews.push(data.review);
                })
            });
          }
        } else {
          this.flashMessagesService.show(data.msg, {cssClass: 'alert-danger', timeout: 5000});
          return false;
        }
      });
  }

  deleteService() {
    let dialogRef = this.dialog.open(ConfirmServicedeleteDialog, {
      width: '450px',
      data: {
        serviceId: this.serviceId
      }
    });

    dialogRef.afterClosed()
      .subscribe(data => {
        if(data.success) {
          this.flashMessagesService.show('The service was successfully deleted', {cssClass: 'alert-success', timeout: 5000});
          this.router.navigate(['/profile']);
        } else {
          if(data.msg) {
            this.flashMessagesService.show(data.msg, {cssClass: 'alert-success', timeout: 5000});
          }
        }
      });
  }

  editService() {
    this.router.navigate(['/services/' + this.serviceId + '/edit'])
  }

  requestService() {
    console.log('Request Item');
  }

  favService() {
    if(!this.authService.loggedIn()) {
      this.flashMessagesService.show('Please login', {cssClass: 'alert-danger', timeout: 5000});
      return this.router.navigate(['/login']);
    }

    if(!(localStorage.getItem('user_type') === 'customer')) {
      return this.flashMessagesService.show('You must be logged in as a customer to favorite a service', {cssClass: 'alert-danger', timeout: 5000});
    }

    if(!this.serviceId) {
      return this.flashMessagesService.show('Service not found', {cssClass: 'alert-danger', timeout: 5000});
    }

    this.itemService.favService(this.serviceId, localStorage.getItem('user_id'))
      .subscribe(data => {
        if(data.success) {
          this.isFav = true;
          this.flashMessagesService.show(data.msg, {cssClass: 'alert-success', timeout: 5000});
        } else {
          this.flashMessagesService.show(data.msg, {cssClass: 'alert-danger', timeout: 5000});
        }
      });
  }

  unfavService() {
    if(!this.authService.loggedIn()) {
      this.flashMessagesService.show('Please login', {cssClass: 'alert-danger', timeout: 5000});
      return this.router.navigate(['/login']);
    }

    if(!(localStorage.getItem('user_type') === 'customer')) {
      return this.flashMessagesService.show('You must be logged in as a customer to favorite a service', {cssClass: 'alert-danger', timeout: 5000});
    }

    if(!this.serviceId) {
      return this.flashMessagesService.show('Service not found', {cssClass: 'alert-danger', timeout: 5000});
    }

    if(!this.isFav) {
      return this.flashMessagesService.show('This service is not on your favorites', {cssClass: 'alert-danger', timeout: 5000});
    }

    this.itemService.unfavService(this.serviceId,  localStorage.getItem('user_id'))
      .subscribe(data => {
        if(data.success) {
          this.isFav = false;
          this.flashMessagesService.show(data.msg, {cssClass: 'alert-success', timeout: 5000});
        } else {
          this.flashMessagesService.show(data.msg, {cssClass: 'alert-danger', timeout: 5000});
        }
      });
  }

  addReview() {
    let dialogRef = this.dialog.open(AddServiceReviewDialog, {
      width: '600px',
      data: {
        itemId: this.serviceId,
        itemType: 'service'
      }
    });

    dialogRef.afterClosed()
      .subscribe(data => {
        if(data.success) {
          this.flashMessagesService.show('The review and rating were successfully added', {cssClass: 'alert-success', timeout: 5000});
          window.location.reload();
        } else {
          if(data.msg) {
            this.flashMessagesService.show(data.msg, {cssClass: 'alert-danger', timeout: 5000});
          }
        }
      });
  }

  editReview(review) {
    let dialogRef = this.dialog.open(EditReviewDialog, {
      width: '600px',
      data: {
        review: review
      }
    });

    dialogRef.afterClosed()
      .subscribe(data => {
        if(data.success) {
          this.flashMessagesService.show('The review and rating were successfully edited', {cssClass: 'alert-success', timeout: 5000});
          window.location.reload();
        } else {
          if(data.msg) {
            this.flashMessagesService.show(data.msg, {cssClass: 'alert-danger', timeout: 5000});
          }
        }
      });
  }

  deleteReview(review) {
    let dialogRef = this.dialog.open(ConfirmReviewDeleteDialog, {
      width: '450px',
      data: {
        review: review
      }
    });

    dialogRef.afterClosed()
      .subscribe(data => {
        if(data.success) {
          this.flashMessagesService.show('The review was successfully deleted', {cssClass: 'alert-success', timeout: 5000});
          window.location.reload();
        } else {
          if(data.msg) {
            this.flashMessagesService.show(data.msg, {cssClass: 'alert-danger', timeout: 5000});
          }
        }
      });
  }
}
