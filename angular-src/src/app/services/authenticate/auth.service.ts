import {Injectable} from '@angular/core';
import {HttpModule, Http, Headers} from "@angular/http";
import 'rxjs/add/operator/map'
import {tokenNotExpired} from "angular2-jwt";

@Injectable()
export class AuthService {
  // server: String = "http://localhost:3000/";
  server: String = "";
  authToken: any;
  user: any;

  constructor(
    private http: Http
  ) { }

  //register user
  registerUser(user) {
    let headers = new Headers();
    headers.append("Content-Type", "application/json");
    // console.log(user);
    return this.http.post(this.server + 'users/register', user, {headers: headers})
      .map(res => res.json());
  };

  //edit user profile data
  editUser(user) {
    let headers = new Headers();
    headers.append("Content-Type", "application/json");
    // console.log(user);
    return this.http.post(this.server + 'users/editProf', user, {headers: headers})
      .map(res => res.json());
  }

  //edit user account data
  editUserAcc(user) {
    let headers = new Headers();
    headers.append("Content-Type", "application/json");
    // console.log(user);
    return this.http.post(this.server + 'users/editAcc', user, {headers: headers})
      .map(res => res.json());
  }

  //compare passwords
  comparePasswords(user) {
    let headers = new Headers();
    headers.append("Content-Type", "application/json");
    // console.log(user);
    return this.http.post(this.server + 'users/comparePAss', user, {headers: headers})
      .map(res => res.json());
  }

  //authenticate a given user
  authenticateUser(user) {
    let headers = new Headers();
    headers.append("Content-Type", "application/json");
    return this.http.post(this.server + 'users/authenticate', user, {headers: headers})
      .map(res => res.json());
  };

  //get the profile of a user
  getProfile() {
    let headers = new Headers();
    this.loadToken();
    headers.append('Authorization', this.authToken);
    headers.append("Content-Type", "application/json");
    return this.http.get(this.server + 'users/profile',{headers: headers})
      .map(res => res.json());
  }

  //get a user from the database
  getUser(userId, userType) {
    let headers = new Headers();
    headers.append("Content-Type", "application/json");
    return this.http.post(this.server + 'users/' + userType + '/' + userId, {headers: headers})
      .map(res => res.json());
  }

  //delete a user
  deleteUser(userId, userType) {
    let headers = new Headers();
    headers.append("Content-Type", "application/json");
    return this.http.delete(this.server + 'users/' + userType + '/' + userId, {headers: headers})
      .map(res => res.json());
  }

  //store user data in local storage
  storeUserData(token, user) {
    localStorage.setItem('id_token', token);
    localStorage.setItem('user_id', user.id);
    localStorage.setItem('user_username', user.username);
    localStorage.setItem('user_type', user.userType);

    this.authToken = token;
    this.user = user;
  };

  //load the stored token
  loadToken() {
    this.authToken = localStorage.getItem('id_token');
  };

  //check whether a user is logged in
  loggedIn() {
    return tokenNotExpired('id_token');
  }

  //clear the local storage and logout a user
  logout() {
    this.authToken = null;
    this.user = null;
    localStorage.clear();
  };
}
