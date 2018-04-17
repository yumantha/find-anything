import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {AuthService} from "../../../services/authenticate/auth.service";
import {FlashMessagesService} from "angular2-flash-messages";
import {ItemService} from "../../../services/items/item.service";

@Component({
  selector: 'app-view-user',
  templateUrl: './view-user.component.html',
  styleUrls: ['./view-user.component.css']
})
export class ViewUserComponent implements OnInit {
  user: any;
  sellingItemsList: any[] = [];
  sellingServicesList: any[] = [];

  routeArray: String[] = this.router.url.split("/");
  userId: String = this.routeArray[this.routeArray.length - 1];
  userType: String = this.routeArray[this.routeArray.length - 2];
  dataAvailable: Boolean = false;
  loggedUserId: String = localStorage.getItem("user_id");
  loggedUserType: String = localStorage.getItem("user_type");

  constructor(
    private router: Router,
    private authService: AuthService,
    private itemService: ItemService,
    private flashMessagesService: FlashMessagesService
  ) { }

  ngOnInit() {
    if(this.userId === this.loggedUserId && this.userType === this.loggedUserType) {
      this.router.navigate(['/profile']);
    } else {
      this.authService.getUser(this.userId, this.userType)
        .subscribe(data => {
          if(data.success) {
            this.user = data.user;
            if (this.userType === 'seller') {
              if(this.user.avgRating) {
                this.user.avgRating = (Math.round(this.user.avgRating * 100))/100;
              }

              this.user.sellingItems.forEach((item) => {
                this.itemService.getItem(item)
                  .subscribe(data => {
                    this.sellingItemsList.push(data.item);
                  })
              });
              this.user.sellingServices.forEach((service) => {
                this.itemService.getService(service)
                  .subscribe(data => {
                    this.sellingServicesList.push(data.service);
                  })
              });
            }
          } else {
            this.flashMessagesService.show(data.msg, {cssClass: 'alert-danger', timeout: 5000});
          }
        });
    }
  }

  goToItem(itemId) {
    this.router.navigate(['/items/' + itemId])
  }

  goToService(serviceId) {
    this.router.navigate(['/services/' + serviceId])
  }
}
