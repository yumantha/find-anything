import {Injectable} from '@angular/core';
import {HttpModule, Http, Headers} from "@angular/http";
import 'rxjs/add/operator/map'

@Injectable()
export class ItemService {
  server: String = "http://localhost:3000/";

  constructor(
    private http: Http
  ) { }

  //add a new item for sale
  addItem(item) {
    let headers = new Headers();
    headers.append("Content-Type", "application/json");
    // console.log(item);
    return this.http.post(this.server + 'items/', item, {headers: headers})
      .map(res => res.json());
  }

  //get an item from the database
  getItem(itemId) {
    let headers = new Headers();
    headers.append("Content-Type", "application/json");
    return this.http.get(this.server + 'items/' + itemId,{headers: headers})
      .map(res => res.json());
  }

  //delete an item from the database
  deleteItem(itemId) {
    let headers = new Headers();
    headers.append("Content-Type", "application/json");
    return this.http.delete(this.server + 'items/' + itemId, {headers: headers})
      .map(res => res.json());
  }
}
