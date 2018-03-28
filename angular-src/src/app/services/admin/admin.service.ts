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

  //get seller stats
  getSellerStats() {
    let headers = new Headers();
    headers.append("Content-Type", "application/json");
    return this.http.get(this.server + 'admin/getstats/sellers', {headers: headers})
      .map(res => res.json());
  }

  //get top rated items. services and sellers
  getTopRated() {
    let headers = new Headers();
    headers.append("Content-Type", "application/json");
    return this.http.get(this.server + 'admin/getstats/toprated', {headers: headers})
      .map(res => res.json());
  }

  //get sign up and item/service adding times
  getTimes() {
    let headers = new Headers();
    headers.append("Content-Type", "application/json");
    return this.http.get(this.server + 'admin/getstats/times', {headers: headers})
      .map(res => res.json());
  }

  //get numbers
  getNumbers() {
    let headers = new Headers();
    headers.append("Content-Type", "application/json");
    return this.http.get(this.server + 'admin/getstats/numbers', {headers: headers})
      .map(res => res.json());
  }

}
