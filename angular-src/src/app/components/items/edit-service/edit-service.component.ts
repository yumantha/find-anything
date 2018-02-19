import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {ItemService} from "../../../services/items/item.service";
import {FlashMessagesService} from "angular2-flash-messages";
import {ValidateService} from "../../../services/validate/validate.service";

@Component({
  selector: 'app-edit-service',
  templateUrl: './edit-service.component.html',
  styleUrls: ['./edit-service.component.css']
})
export class EditServiceComponent implements OnInit {
  service: any;
  routeArray: String[] = this.router.url.split("/");
  serviceId: String = this.routeArray[this.routeArray.length - 2];
  dataAvailable: Boolean = false;

  constructor(
    private router: Router,
    private itemService: ItemService,
    private flashMessagesService: FlashMessagesService,
    private validateService: ValidateService
  ) { }

  ngOnInit() {
    this.itemService.getService(this.serviceId)
      .subscribe(data => {
        if(data.success) {
          this.service = data.service;
          this.dataAvailable = true;
        } else {
          this.flashMessagesService.show(data.msg, {cssClass: 'alert-danger', timeout: 5000});
          return false;
        }
      });
  }

  onEditService() {
    if(!this.validateService.validateService(this.service)) {
      this.flashMessagesService.show("Please fill in all necessary fields", {cssClass: 'alert-danger', timeout: 5000});
      return false;
    }

    if(!this.validateService.validateItemSeller(this.service.seller)) {
      this.flashMessagesService.show("User not found", {cssClass: 'alert-danger', timeout: 5000});
      return false;
    }

    if(!this.validateService.validatePrice(this.service.price)) {
      this.flashMessagesService.show("Please enter a valid price", {cssClass: 'alert-danger', timeout: 5000});
      return false;
    }

    if(this.service.startTime){
      if(!this.validateService.validateTime(this.service.startTime)) {
        this.flashMessagesService.show("Please enter a valid start time", {cssClass: 'alert-danger', timeout: 5000});
        return false;
      }
    }

    if(this.service.endTime) {
      if(!this.validateService.validateTime(this.service.endTime)) {
        this.flashMessagesService.show("Please enter a valid end time", {cssClass: 'alert-danger', timeout: 5000});
        return false;
      }
    }

    if(this.service.startTime && this.service.endTime) {
      if(!this.validateService.validateTimeGap(this.service.startTime, this.service.endTime)) {
        this.flashMessagesService.show("Please enter valid start and end times", {cssClass: 'alert-danger', timeout: 5000});
        return false;
      }
    }

    this.itemService.editService(this.serviceId, this.service)
      .subscribe(data => {
        if(data.success) {
          this.flashMessagesService.show("Service successfully edited", {cssClass: 'alert-success', timeout: 5000});
          this.router.navigate(['/services/' + this.serviceId]);
        } else {
          this.flashMessagesService.show(data.msg, {cssClass: 'alert-danger', timeout: 5000});
          this.router.navigate(['/services/' + this.serviceId]);
        }
      });

  }

  onCancel() {
    this.router.navigate(['/services/' + this.serviceId]);
  }
}
