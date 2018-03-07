import {Injectable} from '@angular/core';
import {HttpModule, Http, Headers} from "@angular/http";
import 'rxjs/add/operator/map'

@Injectable()
export class ReviewService {
  server: String = "http://localhost:3000/";

  constructor(
    private http: Http
  ) { }

  //add a review
  addReview(itemId, itemType, review) {
    let headers = new Headers();
    headers.append("Content-Type", "application/json");
    return this.http.post(this.server + itemType + 's/' + itemId + '/reviews/' , review, {headers: headers})
      .map(res => res.json());
  }

}
