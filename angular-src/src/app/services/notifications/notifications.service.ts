import {Injectable} from '@angular/core';
import {HttpModule, Http, Headers} from "@angular/http";
import 'rxjs/add/operator/map'

@Injectable()
export class NotificationsService {
  server: String = "http://localhost:3000/";

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
}
