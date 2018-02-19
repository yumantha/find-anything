import {Component, OnInit} from '@angular/core';
import {ItemService} from "../../../services/items/item.service";
import {Router} from "@angular/router";
import {FlashMessagesService} from "angular2-flash-messages";
import {MatDialog} from "@angular/material";
import {ConfirmServicedeleteDialog} from "./confirm-servicedelete/confirm-servicedelete.component";

@Component({
  selector: 'app-view-service',
  templateUrl: './view-service.component.html',
  styleUrls: ['./view-service.component.css']
})
export class ViewServiceComponent implements OnInit {
  service: any;
  seller: String;
  sellerProfile: String;
  isCustomer: Boolean;
  routeArray: String[] = this.router.url.split("/");
  serviceId: String = this.routeArray[this.routeArray.length - 1];
  dataAvailable: Boolean = false;
  isOwner: Boolean = false;

  constructor(
    private itemService: ItemService,
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
          this.sellerProfile = '/users/' + data.service.seller;

          if(data.service.seller == localStorage.getItem('user_id')) {
            this.isOwner = true;
          }

          if(localStorage.getItem('user_type') === 'customer') {
            this.isCustomer = true;
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
    console.log('Favorite Item');
  }
}
