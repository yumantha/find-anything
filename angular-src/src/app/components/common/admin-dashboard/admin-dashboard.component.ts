import {Component, OnInit} from '@angular/core';
import {AdminService} from "../../../services/admin/admin.service";
import {FlashMessagesService} from "angular2-flash-messages";
import {Chart} from 'chart.js';
import {Router} from "@angular/router";

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

  loaded: Boolean = false;

  sellerChart: any;
  customerChart: any;
  itemChart: any;
  serviceChart: any;

  monthList: Array<String> = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec"
  ];
  startYear: String = "2018";
  sellerDateCount: Array<any> = [];
  customerDateCount: Array<any> = [];
  itemDateCount: Array<any> = [];
  serviceDateCount: Array<any> = [];
  currentYear: String = (new Date(Date.now())).toString().split(" ")[3];
  currentMonth: String = (new Date(Date.now())).toString().split(" ")[1];

  constructor(
    private adminService: AdminService,
    private flashMessagesService: FlashMessagesService,
    private router: Router
  ) { }

  ngOnInit() {
    if(localStorage.getItem('user_type') !== 'admin') {
      this.flashMessagesService.show("You must be an admin to access this page", {cssClass: 'alert-danger', timeout: 5000});
      this.router.navigate(['/profile']);
      return false;
    }

    this.adminService.getNumbers()
      .subscribe(data => {
        if(data.success) {
          this.numbers = data.stats;
          // console.log(this.numbers);
          this.dataLoaded();
        } else {
          this.flashMessagesService.show(data.msg, {cssClass: 'alert-danger', timeout: 5000});
        }
      });

    this.adminService.getTimes()
      .subscribe(data => {
        if(data.success) {
          this.times = data.stats;
          this.createDates(this.sellerDateCount);
          this.createDates(this.customerDateCount);
          this.createDates(this.itemDateCount);
          this.createDates(this.serviceDateCount);
          // console.log(this.times);
          this.times = this.prepareTime();
          // console.log(this.times);
          this.dataLoaded();
        } else {
          this.flashMessagesService.show(data.msg, {cssClass: 'alert-danger', timeout: 5000});
        }
      });

    this.adminService.getTopRated()
      .subscribe(data => {
        if(data.success) {
          this.topRated = data.stats;
          // console.log(this.topRated);
          this.dataLoaded();
        } else {
          this.flashMessagesService.show(data.msg, {cssClass: 'alert-danger', timeout: 5000});
        }
      });

    this.adminService.getCustomerStats()
      .subscribe(data => {
        if(data.success) {
          this.customerStats = data.stats;
          // console.log(this.customerStats);
          this.dataLoaded();
        } else {
          this.flashMessagesService.show(data.msg, {cssClass: 'alert-danger', timeout: 5000});
        }
      });

    this.adminService.getItemStats()
      .subscribe(data => {
        if(data.success) {
          this.itemStats = data.stats;
          // console.log(this.itemStats);
          this.dataLoaded();
        } else {
          this.flashMessagesService.show(data.msg, {cssClass: 'alert-danger', timeout: 5000});
        }
      });

    this.adminService.getServiceStats()
      .subscribe(data => {
        if(data.success) {
          this.serviceStats = data.stats;
          // console.log(this.serviceStats);
          this.dataLoaded();
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
          // console.log(this.sellerStats);
          this.dataLoaded();
        } else {
          this.flashMessagesService.show(data.msg, {cssClass: 'alert-danger', timeout: 5000});
        }
      });
  }

  dataLoaded() {
    if(this.numbers && this.times && this.topRated && this.sellerStats && this.customerStats && this.itemStats && this.serviceStats) {
      this.loaded = true;

      this.sellerChart = this.drawChart('sellerCanvas', this.times.sellers, 'Seller');
      this.customerChart = this.drawChart('customerCanvas', this.times.customers, 'Customer');
      this.itemChart = this.drawChart('itemCanvas', this.times.items, 'Items');
      this.serviceChart = this.drawChart('serviceCanvas', this.times.services, 'Services');
    }
  }

  prepareTime() {
    let returnObj = {
      sellers: [],
      customers: [],
      items: [],
      services: []
    };

    let sellers = this.sellerDateCount;
    let customers = this.customerDateCount;
    let items = this.itemDateCount;
    let services = this.serviceDateCount;

    if(this.times.users.sellers.length > 0) {
      for(let i=0; i<this.times.users.sellers.length; i++) {
        let dateToCompare = this.times.users.sellers[i].year + " " + this.times.users.sellers[i].month;

        for(let j=0; j<sellers.length; j++) {
          if(dateToCompare === sellers[j].date) {
            sellers[j].count++;
          }
        }
      }
    }

    if(this.times.users.customers.length > 0) {
      for(let i=0; i<this.times.users.customers.length; i++) {
        let dateToCompare = this.times.users.customers[i].year + " " + this.times.users.customers[i].month;

        for(let j=0; j<customers.length; j++) {
          if(dateToCompare === customers[j].date) {
            customers[j].count++;
          }
        }
      }
    }

    if(this.times.sales.items.length > 0) {
      for(let i=0; i<this.times.sales.items.length; i++) {
        let dateToCompare = this.times.sales.items[i].year + " " + this.times.sales.items[i].month;

        for(let j=0; j<items.length; j++) {
          if(dateToCompare === items[j].date) {
            items[j].count++;
          }
        }
      }
    }

    if(this.times.sales.services.length > 0) {
      for(let i=0; i<this.times.sales.services.length; i++) {
        let dateToCompare = this.times.sales.services[i].year + " " + this.times.sales.services[i].month;

        for(let j=0; j<services.length; j++) {
          if(dateToCompare === services[j].date) {
            services[j].count++;
          }
        }
      }
    }

    returnObj.sellers = sellers;
    returnObj.customers = customers;
    returnObj.items = items;
    returnObj.services = services;

    return returnObj;
  }

  createDates(array) {
    let i = 0;
    let year = this.startYear;

    while(true) {
      array.push({
        date: year + " " + this.monthList[i],
        count: 0
      });

      if((this.currentYear === year) && (this.currentMonth) === this.monthList[i]) {
        break;
      }

      i++;

      if(i === 12) {
        i = 0;
        year = (parseInt(year.toString()) + 1).toString();
      }
    }
  }

  drawChart(ctx, data, name) {
    let chart = new Chart(ctx, {
      type: 'line',
      data: {
        labels: [],
        datasets: [{
          // label: '',
          data: [],
          backgroundColor: [
            'rgba(255, 255, 255, 0)'
          ],
          borderColor: [
            'rgba(0, 0, 0, 0.5)'
          ],
          borderWidth: 2.5
        }]
      },
      options: {
        legend: {
          display: false
        },
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero:true
            }
          }]
        }
      }
    });

    this.enterChartData(chart, data, name);

    return chart;
  }

  enterChartData(chart, data, name) {
    chart.data.datasets.label = name;

    data.forEach((element) => {
      chart.data.labels.push(element.date);
      chart.data.datasets[0].data.push(element.count);
    });

    chart.update();
  }
}
