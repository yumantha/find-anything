import {Injectable} from '@angular/core';
import {HttpModule, Http, Headers} from "@angular/http";
import 'rxjs/add/operator/map'

@Injectable()
export class AdminService {
  server: String = "http://localhost:3000/";

  constructor(
    private http: Http
  ) { }

  //get item stats
  getItemStats() {
    let headers = new Headers();
    headers.append("Content-Type", "application/json");
    return this.http.get(this.server + 'admin/getstats/items', {headers: headers})
      .map(res => res.json());
  }

  //get service stats
  getServiceStats() {
    let headers = new Headers();
    headers.append("Content-Type", "application/json");
    return this.http.get(this.server + 'admin/getstats/services', {headers: headers})
      .map(res => res.json());
  }

}
