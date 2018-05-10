import {Injectable} from '@angular/core';
import {HttpModule, Http, Headers} from "@angular/http";
import 'rxjs/add/operator/map'

@Injectable()
export class RequestService {
  server: String = "http://localhost:3000/";
  // server: String = "/";

  constructor(
    private http: Http
  ) { }

  //new request
  newRequest(newReq) {
    let headers = new Headers();
    headers.append("Content-Type", "application/json");
    return this.http.post(this.server + "requests/" , newReq, {headers: headers})
      .map(res => res.json());
  }

  //cancel request
  cancelRequest(query) {
    let headers = new Headers();
    headers.append("Content-Type", "application/json");
    return this.http.delete(this.server + "requests/" + query, {headers: headers})
      .map(res => res.json());
  }

  //get requests by seller
  getRequstsBySeller(sellerId) {
    let headers = new Headers();
    headers.append("Content-Type", "application/json");
    return this.http.get(this.server + "requests/seller/" + sellerId, {headers: headers})
      .map(res => res.json());
  }

  //accept request
  acceptRequest(reqId) {
    let headers = new Headers();
    headers.append("Content-Type", "application/json");
    return this.http.post(this.server + "requests/" + reqId + "/accept", {}, {headers: headers})
      .map(res => res.json());
  }

  //decline request
  declineRequest(reqId) {
    let headers = new Headers();
    headers.append("Content-Type", "application/json");
    return this.http.post(this.server + "requests/" + reqId + "/decline", {}, {headers: headers})
      .map(res => res.json());
  }
}
