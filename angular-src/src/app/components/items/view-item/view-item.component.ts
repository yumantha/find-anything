import {Component, OnInit} from '@angular/core';
import {ItemService} from "../../../services/items/item.service";
import {Router} from "@angular/router";
import {FlashMessagesService} from "angular2-flash-messages";
import {MatDialog} from "@angular/material";
import {ConfirmDeleteDialog} from "./confirm-delete/confirm-delete.component";
import {AuthService} from "../../../services/authenticate/auth.service";

@Component({
  selector: 'app-view-item',
  templateUrl: './view-item.component.html',
  styleUrls: ['./view-item.component.css']
})
export class ViewItemComponent implements OnInit {
  item: any;
  seller: String;
  sellerProfile: String;
  isCustomer: Boolean;
  routeArray: String[] = this.router.url.split("/");
  itemId: String = this.routeArray[this.routeArray.length - 1];
  dataAvailable: Boolean = false;
  isOwner: Boolean = false;
  isFav: Boolean = false;

  constructor(
    private itemService: ItemService,
    private authService: AuthService,
    private router: Router,
    private flashMessagesService: FlashMessagesService,
    private dialog: MatDialog
  ){ }

  ngOnInit() {
    this.itemService.getItem(this.itemId)
      .subscribe(data => {
        if(data.success) {
          this.item = data.item;
          this.seller = data.seller;
          this.dataAvailable = true;
          this.sellerProfile = '/users/seller/' + data.item.seller;

          if(data.item.seller == localStorage.getItem('user_id')) {
            this.isOwner = true;
          }

          if(localStorage.getItem('user_type') === 'customer') {
            this.isCustomer = true;
          }

          if(this.item.favBy.includes(localStorage.getItem('user_id'))){
            this.isFav = true;
          }

        } else {
          this.flashMessagesService.show(data.msg, {cssClass: 'alert-danger', timeout: 5000});
          return false;
        }
      });
  }

  deleteItem() {
      let dialogRef = this.dialog.open(ConfirmDeleteDialog, {
        width: '450px',
        data: {
          itemId: this.itemId
        }
      });

      dialogRef.afterClosed()
        .subscribe(data => {
          if(data.success) {
            this.flashMessagesService.show('The item was successfully deleted', {cssClass: 'alert-success', timeout: 5000});
            this.router.navigate(['/profile']);
          } else {
            if(data.msg) {
              this.flashMessagesService.show(data.msg, {cssClass: 'alert-danger', timeout: 5000});
            }
          }
        });
  }

  editItem() {
      this.router.navigate(['/items/' + this.itemId + '/edit'])
  }

  requestItem() {
      console.log('Request Item');
  }

  favItem() {
      if(!this.authService.loggedIn()) {
        this.flashMessagesService.show('Please login', {cssClass: 'alert-danger', timeout: 5000});
        return this.router.navigate(['/login']);
      }

      if(!(localStorage.getItem('user_type') === 'customer')) {
        return this.flashMessagesService.show('You must be logged in as a customer to favorite an item', {cssClass: 'alert-danger', timeout: 5000});
      }

      if(!this.itemId) {
        return this.flashMessagesService.show('Item not found', {cssClass: 'alert-danger', timeout: 5000});
      }

      this.itemService.favItem(this.itemId, localStorage.getItem('user_id'))
        .subscribe(data => {
          if(data.success) {
            this.isFav = true;
            this.flashMessagesService.show(data.msg, {cssClass: 'alert-success', timeout: 5000});
          } else {
            this.flashMessagesService.show(data.msg, {cssClass: 'alert-danger', timeout: 5000});
          }
        });
  }

  unfavItem() {
    if(!this.authService.loggedIn()) {
      this.flashMessagesService.show('Please login', {cssClass: 'alert-danger', timeout: 5000});
      return this.router.navigate(['/login']);
    }

    if(!(localStorage.getItem('user_type') === 'customer')) {
      return this.flashMessagesService.show('You must be logged in as a customer to favorite an item', {cssClass: 'alert-danger', timeout: 5000});
    }

    if(!this.itemId) {
      return this.flashMessagesService.show('Item not found', {cssClass: 'alert-danger', timeout: 5000});
    }

    if(!this.isFav) {
      return this.flashMessagesService.show('This item is not on your favorites', {cssClass: 'alert-danger', timeout: 5000});
    }

    this.itemService.unfavItem(this.itemId,  localStorage.getItem('user_id'))
      .subscribe(data => {
        if(data.success) {
          this.isFav = false;
          this.flashMessagesService.show(data.msg, {cssClass: 'alert-success', timeout: 5000});
        } else {
          this.flashMessagesService.show(data.msg, {cssClass: 'alert-danger', timeout: 5000});
        }
      });
  }
}
