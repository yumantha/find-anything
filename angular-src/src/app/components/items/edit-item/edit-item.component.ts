import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {ItemService} from "../../../services/items/item.service";
import {FlashMessagesService} from "angular2-flash-messages";
import {ValidateService} from "../../../services/validate/validate.service";

@Component({
  selector: 'app-edit-item',
  templateUrl: './edit-item.component.html',
  styleUrls: ['./edit-item.component.css']
})
export class EditItemComponent implements OnInit {
  item: any;
  routeArray: String[] = this.router.url.split("/");
  itemId: String = this.routeArray[this.routeArray.length - 2];
  dataAvailable: Boolean = false;

  constructor(
    private router: Router,
    private itemService: ItemService,
    private flashMessagesService: FlashMessagesService,
    private validateService: ValidateService
  ) {
  }

  ngOnInit() {
    this.itemService.getItem(this.itemId)
      .subscribe(data => {
        if (data.success) {
          this.item = data.item;
          this.dataAvailable = true;
        } else {
          this.flashMessagesService.show(data.msg, {cssClass: 'alert-danger', timeout: 5000});
          return false;
        }
      });
  }

  onEditItem() {
    if (!this.validateService.validateItem(this.item)) {
      this.flashMessagesService.show("Please fill in all necessary fields", {cssClass: 'alert-danger', timeout: 5000});
      return false;
    }

    if (!this.validateService.validateItemSeller(this.item.seller)) {
      this.flashMessagesService.show("User not found", {cssClass: 'alert-danger', timeout: 5000});
      return false;
    }

    if (!this.validateService.validatePrice(this.item.price)) {
      this.flashMessagesService.show("Please enter a valid price", {cssClass: 'alert-danger', timeout: 5000});
      return false;
    }

    this.itemService.editItem(this.itemId, this.item)
      .subscribe(data => {
        if (data.success) {
          this.flashMessagesService.show("Item successfully edited", {cssClass: 'alert-success', timeout: 5000});
          this.router.navigate(['/items/' + this.itemId]);
        } else {
          this.flashMessagesService.show(data.msg, {cssClass: 'alert-danger', timeout: 5000});
          this.router.navigate(['/items/' + this.itemId]);
        }
      })
  }

  onCancel() {
    this.router.navigate(['/items/' + this.itemId]);
  }
}
