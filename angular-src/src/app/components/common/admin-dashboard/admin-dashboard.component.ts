import {Component, OnInit} from '@angular/core';
import {AdminService} from "../../../services/admin/admin.service";

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent implements OnInit {

  constructor(
    private adminService: AdminService
  ) { }

  ngOnInit() {
    this.adminService.getItemStats()
      .subscribe(data => {
        console.log(data)
      });

    this.adminService.getServiceStats()
      .subscribe(data => {
        console.log(data)
      });

    this.adminService.getTopRated()
      .subscribe(data => {
        console.log(data)
      });

    this.adminService.getTimes()
      .subscribe(data => {
        console.log(data);
      });

    this.adminService.getNumbers()
      .subscribe(data => {
        console.log(data);
      })
  }

}
