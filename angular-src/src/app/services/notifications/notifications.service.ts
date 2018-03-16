import {Injectable} from '@angular/core';
import {HttpModule, Http, Headers} from "@angular/http";
import 'rxjs/add/operator/map'

@Injectable()
export class NotificationsService {
  server: String = "http://localhost:3000/";

  constructor(
    private http: Http
  ) { }

  //new notification
  
}
