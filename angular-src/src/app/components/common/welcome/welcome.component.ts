import {Component, OnInit} from '@angular/core';
import {AuthService} from "../../../services/authenticate/auth.service";

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {
  loggedIn: Boolean;

  constructor(
    private authService: AuthService,
  ) {
  }

  ngOnInit() {
    this.loggedIn = this.authService.loggedIn();
  }

  onLogoutClick() {
    this.authService.logout();
    this.loggedIn = false;
    return false;
  }

}
