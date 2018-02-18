import {Component, OnInit} from '@angular/core';
import {ItemService} from "../../../services/items/item.service";
import {Router} from "@angular/router";
import {FlashMessagesService} from "angular2-flash-messages";
import {MatDialog} from "@angular/material";
import {ConfirmDeleteDialog} from "./confirm-delete/confirm-delete.component";

@Component({
  selector: 'app-view-item',
  templateUrl: './view-item.component.html',
  styleUrls: ['./view-item.component.css']
})
export class ViewItemComponent implements OnInit {
  item: any;
  seller: String;
  sellerProfile: String;
  routeArray: String[] = this.router.url.split("/");
  itemId: String = this.routeArray[this.routeArray.length - 1];
  dataAvailable: Boolean = false;
  isOwner: Boolean = false;

  constructor(
    private itemService: ItemService,
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
          this.sellerProfile = '/users/' + data.item.seller;

          if(data.item.seller == localStorage.getItem('user_id')) {
            this.isOwner = true;
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
              this.flashMessagesService.show(data.msg, {cssClass: 'alert-success', timeout: 5000});
            }
          }
        });
  }

  editItem() {
      this.router.navigate(['/items/' + this.itemId + '/edit'])
  }

}
