import {Injectable} from '@angular/core';
import {HttpModule, Http, Headers} from "@angular/http";
import 'rxjs/add/operator/map'

@Injectable()
export class NotificationsService {
  server: String = "http://localhost:3000/";
  // server: String = "/";

  constructor(
    private http: Http
  ) { }

  //get notifications
  getNotifications(userId) {
    let headers = new Headers();
    headers.append("Content-Type", "application/json");
    return this.http.get(this.server + 'notifications/' + userId, {headers: headers})
      .map(res => res.json());
  }

  getUnreadNum(userId) {
    let headers = new Headers();
    headers.append("Content-Type", "application/json");
    return this.http.get(this.server + 'notifications/unread/' + userId, {headers: headers})
      .map(res => res.json());
  }

  //check notification
  checkNotification(notId) {
    let headers = new Headers();
    headers.append("Content-Type", "application/json");
    return this.http.post(this.server + 'notifications/' + notId + '/check', {},{headers: headers})
      .map(res => res.json());
  }

  //delete notification
  deleteNotification(notId) {
    let headers = new Headers();
    headers.append("Content-Type", "application/json");
    return this.http.delete(this.server + 'notifications/' + notId,{headers: headers})
      .map(res => res.json());
  }
}
