import {Component, OnInit} from '@angular/core';
import {AdminService} from "../../../services/admin/admin.service";
import {FlashMessagesService} from "angular2-flash-messages";
import {Chart} from 'chart.js';

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

  constructor(
    private adminService: AdminService,
    private flashMessagesService: FlashMessagesService
  ) { }

  ngOnInit() {
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
          this.times = this.prepareTime();
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
      this.sellerChart = this.drawChart();

      console.log(this.sellerChart);

      this.enterChartData(this.sellerChart, this.times.sellers, 'Sellers');
    }
  }

  prepareTime() {
    let returnObj = {
      sellers: [],
      customers: [],
      items: [],
      services: []
    };

    let sellers = [];
    let customers = [];
    let items = [];
    let services = [];

    if(this.times.users.sellers.length > 0) {
      sellers = [
        {
          date: this.times.users.sellers[0].year + ' ' + this.times.users.sellers[0].month,
          count: 1
        }
      ];

      for(let i=1; i<this.times.users.sellers.length; i++) {
        const dateMonth = this.times.users.sellers[i].year + ' ' + this.times.users.sellers[i].month;

        if((this.times.users.sellers[i].year === this.times.users.sellers[i-1].year) && (this.times.users.sellers[i].month) === this.times.users.sellers[i-1].month) {
          sellers[sellers.length-1].count++;
        } else {
          sellers.push({
            date: dateMonth,
            count: 1
          })
        }
      }
    }

    if(this.times.users.customers.length > 0) {
      customers = [
        {
          date: this.times.users.customers[0].year + ' ' + this.times.users.customers[0].month,
          count: 1
        }
      ];

      for(let i=1; i<this.times.users.customers.length; i++) {
        const dateMonth = this.times.users.customers[i].year + ' ' + this.times.users.customers[i].month;

        if((this.times.users.customers[i].year === this.times.users.customers[i-1].year) && (this.times.users.customers[i].month) === this.times.users.customers[i-1].month) {
          customers[customers.length-1].count++;
        } else {
          customers.push({
            date: dateMonth,
            count: 1
          })
        }
      }
    }

    if(this.times.sales.items.length > 0) {
      items = [
        {
          date: this.times.sales.items[0].year + ' ' + this.times.sales.items[0].month,
          count: 1
        }
      ];

      for(let i=1; i<this.times.sales.items.length; i++) {
        const dateMonth = this.times.sales.items[i].year + ' ' + this.times.sales.items[i].month;

        if((this.times.sales.items[i].year === this.times.sales.items[i-1].year) && (this.times.sales.items[i].month) === this.times.sales.items[i-1].month) {
          items[items.length-1].count++;
        } else {
          items.push({
            date: dateMonth,
            count: 1
          })
        }
      }
    }

    if(this.times.sales.services.length > 0) {
      services = [
        {
          date: this.times.sales.services[0].year + ' ' + this.times.sales.services[0].month,
          count: 1
        }
      ];

      for(let i=1; i<this.times.sales.services.length; i++) {
        const dateMonth = this.times.sales.services[i].year + ' ' + this.times.sales.services[i].month;

        if((this.times.sales.services[i].year === this.times.sales.services[i-1].year) && (this.times.sales.services[i].month) === this.times.sales.services[i-1].month) {
          services[services.length-1].count++;
        } else {
          services.push({
            date: dateMonth,
            count: 1
          })
        }
      }
    }

    returnObj.sellers = sellers;
    returnObj.customers = customers;
    returnObj.items = items;
    returnObj.services = services;

    return returnObj;
  }

  drawChart() {
    return new Chart('canvas', {
      type: 'line',
      data: {
        labels: [],
        datasets: [{
          label: '',
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
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero:true
            }
          }]
        }
      }
    });
  }

  enterChartData(chart, data, name) {
    chart.data.datasets.label = name;

    data.forEach((element) => {
      chart.data.labels.push(element.date);
      chart.data.datasets[0].data.push(element.count);
    })
  }
}
