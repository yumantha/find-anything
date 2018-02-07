import {Component, OnInit} from '@angular/core';
import {ItemService} from "../../../services/items/item.service";
import {Router} from "@angular/router";
import {FlashMessagesService} from "angular2-flash-messages";

@Component({
  selector: 'app-view-item',
  templateUrl: './view-item.component.html',
  styleUrls: ['./view-item.component.css']
})
export class ViewItemComponent implements OnInit {
  item: any;
  sellerProfile: String;
  routeArray: String[] = this.router.url.split("/");
  itemId: String = this.routeArray[this.routeArray.length - 1];
  dataAvailable: Boolean = false;

  constructor(
    private itemService: ItemService,
    private router: Router,
    private flashMessagesService: FlashMessagesService,
  ){ }

  ngOnInit() {
    this.itemService.getItem(this.itemId)
      .subscribe(data => {
        if(data.success) {
          this.item = data.item;
          this.dataAvailable = true;
          this.sellerProfile = '/users/' + data.item.seller.id;
        } else {
          this.flashMessagesService.show(data.msg, {cssClass: 'alert-danger', timeout: 5000});
          return false;
        }
      });
  }

}
