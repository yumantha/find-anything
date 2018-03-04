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
  quickSearch(keyword) {
    let headers = new Headers();
    let searchParams = new URLSearchParams();
    headers.append('Content-Type', 'application/json');
    searchParams.append('keyword', keyword);
    return this.http.get(this.server + 'search', {headers: headers, params: searchParams})
      .map(res => res.json());
  }
}
