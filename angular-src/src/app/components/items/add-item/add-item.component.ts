import {Component, OnInit} from '@angular/core';
import {ValidateService} from "../../../services/validate/validate.service";
import {FlashMessagesService} from "angular2-flash-messages";
import {ItemService} from "../../../services/items/item.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.css']
})
export class AddItemComponent implements OnInit {
  name: String;
  category: String;
  price: String;
  location: String;
  description: String;
  isAvailable: Boolean = true;

  sellerID: String;

  itemType: String = 'item';

  constructor(
    private validateService: ValidateService,
    private flashMessagesService: FlashMessagesService,
    private itemService: ItemService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  onAddItem() {
    const item = {
      name: this.name,
      itemType: this.itemType,
      category: this.category,
      price: this.price,
      location: this.location,
      description: this.description,
      isAvailable: this.isAvailable,
      sellerID: localStorage.getItem('user_id')
    };

    if(!this.validateService.validateItem(item)) {
      this.flashMessagesService.show("Please fill in all necessary fields", {cssClass: 'alert-danger', timeout: 5000});
      return false;
    }

    if(!this.validateService.validateItemSeller(item.sellerID)) {
      this.flashMessagesService.show("User not found", {cssClass: 'alert-danger', timeout: 5000});
      return false;
    }

    if(!this.validateService.validatePrice(item.price)) {
      this.flashMessagesService.show("Please enter a valid price", {cssClass: 'alert-danger', timeout: 5000});
      return false;
    }

    this.itemService.addItem(item)
      .subscribe(data => {
        if(data.success) {
          this.flashMessagesService.show("The item was successfully added", {cssClass: 'alert-success', timeout: 5000});
          this.router.navigate(['/profile']);
        } else {
          this.flashMessagesService.show(data.msg, {cssClass: 'alert-danger', timeout: 5000});
          this.router.navigate(['/items/new']);
        }
      })
  }
}
