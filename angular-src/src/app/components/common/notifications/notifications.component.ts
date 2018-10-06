import {Component, OnDestroy, OnInit} from '@angular/core';
import {NotificationsService} from "../../../services/notifications/notifications.service";
import {AuthService} from "../../../services/authenticate/auth.service";
import {FlashMessagesService} from "angular2-flash-messages";
import {Router} from "@angular/router";

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.css']
})
export class NotificationsComponent implements OnInit, OnDestroy {
  userId: String = localStorage.getItem('user_id');
  notsAvailable: Boolean = false;
  notifications: Array<any> = [];

  constructor(
    private notificationsService: NotificationsService,
    private authService: AuthService,
    private flashMessagesService: FlashMessagesService,
    private router: Router
  ) {
  }

  ngOnInit() {
    if (!this.authService.loggedIn()) {
      return this.router.navigate(['/login'])
    }

    this.notificationsService.getNotifications(this.userId)
      .subscribe(data => {
        if (!data.success) {
          this.flashMessagesService.show(data.msg, {cssClass: 'alert-danger', timeout: 5000});
        } else {
          if (data.nots.length !== 0) {
            this.notsAvailable = true;
          }

          data.nots.forEach((not) => {
            this.notifications.push(not);
          });

          this.notifications = this.sortByKey(this.notifications, 'timestamp').reverse()
        }
      });
  }

  sortByKey(array, key) {
    return array.sort(function (a, b) {
      const x = a[key];
      const y = b[key];
      return ((x < y) ? -1 : ((x > y) ? 1 : 0));
    });
  }

  checkNots(nots: Array<any>) {
    nots.forEach((not) => {
      if (!not.checked) {
        this.notificationsService.checkNotification(not._id)
          .subscribe(data => {

          })
      }
    });
  }

  ngOnDestroy() {
    this.checkNots(this.notifications);
  }

  deleteNot(notId) {
    this.notificationsService.deleteNotification(notId)
      .subscribe(data => {
        if (!data.success) {
          this.flashMessagesService.show(data.msg, {cssClass: 'alert-danger', timeout: 5000});
        } else {
          window.location.reload();
          this.flashMessagesService.show(data.msg, {cssClass: 'alert-success', timeout: 5000});
        }
      })
  }
}
