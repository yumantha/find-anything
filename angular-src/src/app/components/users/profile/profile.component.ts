import {Component, OnInit} from '@angular/core';
import {AuthService} from "../../../services/authenticate/auth.service";
import {Router} from "@angular/router";
import {ItemService} from "../../../services/items/item.service";
import {log} from "util";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  user: any;
  sellingItemsList: any[] = [];
  sellingServicesList: any[] = [];
  favItemsList: any[] = [];
  favServicesList: any[] = [];
  boughtItemsList: any[] = [];
  boughtServicesList: any[] = [];
  reqItemsList: any[] = [];
  reqServicesList: any[] = [];

  constructor(
    private authService: AuthService,
    private itemService: ItemService,
    private router: Router
  ) { }

  ngOnInit() {
    this.authService.getProfile()
      .subscribe(profile => {
        this.user = profile.user;

        if(this.user.userType === 'seller') {
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
        } else if(this.user.userType === 'customer') {
          this.user.favItems.forEach((item) => {
            this.itemService.getItem(item)
              .subscribe(data => {
                this.favItemsList.push(data.item);
              })
          });

          this.user.favServices.forEach((service) => {
            this.itemService.getService(service)
              .subscribe(data => {
                this.favServicesList.push(data.service);
              })
          });

          this.user.boughtItems.forEach((item) => {
            this.itemService.getItem(item)
              .subscribe(data => {
                this.boughtItemsList.push(data.item);
              })
          });

          this.user.boughtServices.forEach((service) => {
            this.itemService.getService(service)
              .subscribe(data => {
                this.boughtServicesList.push(data.service);
              })
          });

          this.user.reqItems.forEach((item) => {
            this.itemService.getItem(item)
              .subscribe(data => {
                this.reqItemsList.push(data.item);
              })
          });

          this.user.reqServices.forEach((service) => {
            this.itemService.getService(service)
              .subscribe(data => {
                this.reqServicesList.push(data.service);
              })
          });
        }
      },
        error => {
        console.log(error);
        return false;
        }
      );

    console.log(this.favItemsList);
    console.log(this.favServicesList);
  }

  goToItem(itemId) {
    this.router.navigate(['/items/' + itemId])
  }

  goToService(serviceId) {
    this.router.navigate(['/services/' + serviceId])
  }
}
