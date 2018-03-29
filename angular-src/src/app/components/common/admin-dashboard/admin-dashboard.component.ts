import {Component, OnInit} from '@angular/core';
import {AdminService} from "../../../services/admin/admin.service";
import {FlashMessagesService} from "angular2-flash-messages";

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent implements OnInit {
  numbers: any;
  times: any;
  topRated: any;
  sellerStats: any;
  customerStats: any;
  itemStats: any;
  serviceStats: any;

  constructor(
    private adminService: AdminService,
    private flashMessagesService: FlashMessagesService
  ) { }

  ngOnInit() {
    this.adminService.getNumbers()
      .subscribe(data => {
        if(data.success) {
          this.numbers = data.stats;
        } else {
          this.flashMessagesService.show(data.msg, {cssClass: 'alert-danger', timeout: 5000});
        }
      });

    this.adminService.getTimes()
      .subscribe(data => {
        if(data.success) {
          this.times = data.stats;
        } else {
          this.flashMessagesService.show(data.msg, {cssClass: 'alert-danger', timeout: 5000});
        }
      });

    this.adminService.getTopRated()
      .subscribe(data => {
        if(data.success) {
          this.topRated = data.stats;
        } else {
          this.flashMessagesService.show(data.msg, {cssClass: 'alert-danger', timeout: 5000});
        }
      });

    this.adminService.getCustomerStats()
      .subscribe(data => {
        if(data.success) {
          this.customerStats = data.stats;
        } else {
          this.flashMessagesService.show(data.msg, {cssClass: 'alert-danger', timeout: 5000});
        }
      });

    this.adminService.getItemStats()
      .subscribe(data => {
        if(data.success) {
          this.itemStats = data.stats;
        } else {
          this.flashMessagesService.show(data.msg, {cssClass: 'alert-danger', timeout: 5000});
        }
      });

    this.adminService.getServiceStats()
      .subscribe(data => {
        if(data.success) {
          this.serviceStats = data.stats;
        } else {
          this.flashMessagesService.show(data.msg, {cssClass: 'alert-danger', timeout: 5000});
        }
      });

    this.adminService.getSellerStats()
      .subscribe(data => {
        if(data.success) {
          this.sellerStats = data.stats;
          for(const statType in this.sellerStats) {
            if(this.sellerStats.hasOwnProperty(statType)) {
              if(statType !== 'selling') {
                for(const itemType in this.sellerStats[statType]) {
                  if(this.sellerStats[statType].hasOwnProperty(itemType)) {
                    this.sellerStats[statType][itemType].forEach((seller) => {
                      this.adminService.getSellerUsername(seller._id)
                        .subscribe(data => {
                          seller.username = data.username;
                        });
                    });
                  }
                }
              }
            }
          }
        } else {
          this.flashMessagesService.show(data.msg, {cssClass: 'alert-danger', timeout: 5000});
        }
      });
  }
}
