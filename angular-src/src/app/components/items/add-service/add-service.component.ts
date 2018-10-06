import {Component, OnInit} from '@angular/core';
import {ValidateService} from "../../../services/validate/validate.service";
import {Router} from "@angular/router";
import {ItemService} from "../../../services/items/item.service";
import {FlashMessagesService} from "angular2-flash-messages";

@Component({
  selector: 'app-add-service',
  templateUrl: './add-service.component.html',
  styleUrls: ['./add-service.component.css']
})
export class AddServiceComponent implements OnInit {
  name: String;
  category: String;
  price: String;
  location: String;
  district: String;
  description: String;
  availableDays: String;
  startTime: String;
  endTime: String;
  extraNotes: String;

  sellerID: String;

  itemType: String = 'service';

  districts: Array<any> = [
    {value: 'Ampara', viewValue: 'Ampara'},
    {value: 'Anuradhapura', viewValue: 'Anuradhapura'},
    {value: 'Badulla', viewValue: 'Badulla'},
    {value: 'Batticaloa', viewValue: 'Batticaloa'},
    {value: 'Colombo', viewValue: 'Colombo'},
    {value: 'Galle', viewValue: 'Galle'},
    {value: 'Gampaha', viewValue: 'Gampaha'},
    {value: 'Hambantota', viewValue: 'Hambantota'},
    {value: 'Jaffna', viewValue: 'Jaffna'},
    {value: 'Kalutara', viewValue: 'Kalutara'},
    {value: 'Kandy', viewValue: 'Kandy'},
    {value: 'Kegalle', viewValue: 'Kegalle'},
    {value: 'Kilinochchi', viewValue: 'Kilinochchi'},
    {value: 'Kurunegala', viewValue: 'Kurunegala'},
    {value: 'Mannar', viewValue: 'Mannar'},
    {value: 'Matale', viewValue: 'Matale'},
    {value: 'Matara', viewValue: 'Matara'},
    {value: 'Monaragala', viewValue: 'Monaragala'},
    {value: 'Mullaitivu', viewValue: 'Mullaitivu'},
    {value: 'Nuwara Eliya', viewValue: 'Nuwara Eliya'},
    {value: 'Polonnaruwa', viewValue: 'Polonnaruwa'},
    {value: 'Puttalam', viewValue: 'Puttalam'},
    {value: 'Ratnapura', viewValue: 'Ratnapura'},
    {value: 'Trincomalee', viewValue: 'Trincomalee'},
    {value: 'Vavuniya', viewValue: 'Vavuniya'}
  ];

  constructor(
    private validateService: ValidateService,
    private router: Router,
    private itemService: ItemService,
    private flashMessagesService: FlashMessagesService
  ) {
  }

  ngOnInit() {
  }

  onAddService() {
    const service = {
      name: this.name,
      itemType: this.itemType,
      category: this.category,
      price: this.price,
      location: this.location,
      district: this.district,
      description: this.description,
      availableDays: this.availableDays,
      startTime: this.startTime,
      endTime: this.endTime,
      extraNotes: this.extraNotes,
      sellerID: localStorage.getItem('user_id')
    };

    if (!this.validateService.validateService(service)) {
      this.flashMessagesService.show("Please fill in all necessary fields", {cssClass: 'alert-danger', timeout: 5000});
      return false;
    }

    if (!this.validateService.validateItemSeller(service.sellerID)) {
      this.flashMessagesService.show("User not found", {cssClass: 'alert-danger', timeout: 5000});
      return false;
    }

    if (!this.validateService.validatePrice(service.price)) {
      this.flashMessagesService.show("Please enter a valid price", {cssClass: 'alert-danger', timeout: 5000});
      return false;
    }

    if (service.startTime) {
      if (!this.validateService.validateTime(service.startTime)) {
        this.flashMessagesService.show("Please enter a valid start time", {cssClass: 'alert-danger', timeout: 5000});
        return false;
      }
    }

    if (service.endTime) {
      if (!this.validateService.validateTime(service.endTime)) {
        this.flashMessagesService.show("Please enter a valid end time", {cssClass: 'alert-danger', timeout: 5000});
        return false;
      }
    }

    if (service.startTime && service.endTime) {
      if (!this.validateService.validateTimeGap(service.startTime, service.endTime)) {
        this.flashMessagesService.show("Please enter valid start and end times", {
          cssClass: 'alert-danger',
          timeout: 5000
        });
        return false;
      }
    }

    this.itemService.addService(service)
      .subscribe(data => {
        if (data.success) {
          this.flashMessagesService.show("The service was successfully added", {
            cssClass: 'alert-success',
            timeout: 5000
          });
          this.router.navigate(['/profile']);
        } else {
          this.flashMessagesService.show(data.msg, {cssClass: 'alert-danger', timeout: 5000});
          this.router.navigate(['/services/new']);
        }
      });
  }

}
