import {Injectable} from '@angular/core';
import {HttpModule, Http, Headers} from "@angular/http";
import 'rxjs/add/operator/map'

@Injectable()
export class ItemService {
  server: String = "http://localhost:3000/";
  // server: String = "/";

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

  //add a new service for sale
  addService(service) {
    let headers = new Headers();
    headers.append("Content-Type", "application/json");
    // console.log(service);
    return this.http.post(this.server + 'services/', service, {headers: headers})
      .map(res => res.json());
  }

  //get an item from the database
  getItem(itemId) {
    let headers = new Headers();
    headers.append("Content-Type", "application/json");
    return this.http.get(this.server + 'items/' + itemId,{headers: headers})
      .map(res => res.json());
  }

  //get an service from the database
  getService(serviceId) {
    let headers = new Headers();
    headers.append("Content-Type", "application/json");
    return this.http.get(this.server + 'services/' + serviceId,{headers: headers})
      .map(res => res.json());
  }

  //delete an item from the database
  deleteItem(itemId) {
    let headers = new Headers();
    headers.append("Content-Type", "application/json");
    return this.http.delete(this.server + 'items/' + itemId, {headers: headers})
      .map(res => res.json());
  }

  //delete a service from the database
  deleteService(serviceId) {
    let headers = new Headers();
    headers.append("Content-Type", "application/json");
    return this.http.delete(this.server + 'services/' + serviceId, {headers: headers})
      .map(res => res.json());
  }

  //edit an item in the database
  editItem(itemId, item) {
    let headers = new Headers();
    headers.append("Content-Type", "application/json");
    return this.http.put(this.server + 'items/' + itemId, item, {headers: headers})
      .map(res => res.json());
  }

  //edit a service in the database
  editService(serviceId, service) {
    let headers = new Headers();
    headers.append("Content-Type", "application/json");
    return this.http.put(this.server + 'services/' + serviceId, service, {headers: headers})
      .map(res => res.json());
  }

  //add an item to favorites
  favItem(itemId, userId) {
    let headers = new Headers();
    headers.append("Content-Type", "application/json");
    return this.http.post(this.server + 'items/' + itemId + '/favorite', {itemId: itemId, userId: userId}, {headers: headers})
      .map(res => res.json());
  }

  //remove an item from favorites
  unfavItem(itemId, userId) {
    let headers = new Headers();
    headers.append("Content-Type", "application/json");
    return this.http.post(this.server + 'items/' + itemId + '/unfavorite', {itemId: itemId, userId: userId}, {headers: headers})
      .map(res => res.json());
  }

  //add a service to favorites
  favService(serviceId, userId) {
    let headers = new Headers();
    headers.append("Content-Type", "application/json");
    return this.http.post(this.server + 'services/' + serviceId + '/favorite', {serviceId: serviceId, userId: userId}, {headers: headers})
      .map(res => res.json());
  }

  //remove a service from favorites
  unfavService(serviceId, userId) {
    let headers = new Headers();
    headers.append("Content-Type", "application/json");
    return this.http.post(this.server + 'services/' + serviceId + '/unfavorite', {serviceId: serviceId, userId: userId}, {headers: headers})
      .map(res => res.json());
  }
}
