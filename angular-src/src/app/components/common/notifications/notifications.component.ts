import {Component, OnInit} from '@angular/core';
import {NotificationsService} from "../../../services/notifications/notifications.service";
import {AuthService} from "../../../services/authenticate/auth.service";
import {FlashMessagesService} from "angular2-flash-messages";
import {Router} from "@angular/router";

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.css']
})
export class NotificationsComponent implements OnInit {
  userId: String = localStorage.getItem('user_id');
  notsAvailable: Boolean = false;
  newNots: Boolean = false;
  notifications: Array<any> = [];

  constructor(
    private notificationsService: NotificationsService,
    private authService: AuthService,
    private flashMessagesService: FlashMessagesService,
    private router: Router
  ) { }

  ngOnInit() {
    if(!this.authService.loggedIn()) {
      return this.router.navigate(['/login'])
    }

    this.notificationsService.getNotifications(this.userId)
      .subscribe(data => {
        if(!data.success) {
          this.flashMessagesService.show(data.msg, {cssClass: 'alert-danger', timeout: 5000});
        } else {
          if(data.nots.length !== 0) {
            this.notsAvailable = true;
          }

          data.nots.forEach((not) => {
            this.notifications.push(not);
          });

          console.log(this.notifications);
        }
      });
  }

}
