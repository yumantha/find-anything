import {Injectable} from '@angular/core';
import {HttpModule, Http, Headers} from "@angular/http";
import 'rxjs/add/operator/map'


@Injectable()
export class SearchService {
  server: String = "http://localhost:3000/";

  constructor(
    private http: Http
  ) { }

  //quick search for an item
  search(query) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.get(this.server + 'search/' + query, {headers: headers})
      .map(res => res.json());
  }
}
