import {Injectable} from '@angular/core';
import {HttpModule, Http, Headers} from "@angular/http";
import 'rxjs/add/operator/map'

@Injectable()
export class AuthService {
  server: String = "http://localhost:3000/";
  authToken: any;
  user: any;

  constructor(private http: Http) { }

  registerUser(user) {
    let headers = new Headers();
    headers.append("Content-Type", "application/json");
    return this.http.post(this.server + 'users/register', user, {headers: headers})
      .map(res => res.json());
  };

  authenticateUser(user) {
    let headers = new Headers();
    headers.append("Content-Type", "application/json");
    return this.http.post(this.server + 'users/authenticate', user, {headers: headers})
      .map(res => res.json());
  };

  storeUserData(token, user) {
    localStorage.setItem('id_token', token);
    localStorage.setItem('user_id', user.id);

    this.authToken = token;
    this.user = user;
  };

  logout() {
    this.authToken = null;
    this.user = null;
    localStorage.clear();
  };
}
