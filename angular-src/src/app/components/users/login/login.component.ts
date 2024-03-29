import {Component, OnInit} from '@angular/core';
import {AuthService} from "../../../services/authenticate/auth.service";
import {Router} from "@angular/router";
import {FlashMessagesService} from "angular2-flash-messages";
import {ValidateService} from "../../../services/validate/validate.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  hide: Boolean = true;

  username: String;
  password: String;
  userType: String;

  constructor(
    private validateService: ValidateService,
    private authService: AuthService,
    private router: Router,
    private flashMessagesService: FlashMessagesService
  ) {
  }

  ngOnInit() {
    this.authService.logout();
  }

  onLoginSubmit() {
    const user = {
      username: this.username,
      password: this.password,
      userType: this.userType
    };

    if (!this.validateService.validateLogin(user)) {
      this.flashMessagesService.show("Please enter a username, password and an account category", {
        cssClass: 'alert-danger',
        timeout: 5000
      });
      return false;
    }

    this.authService.authenticateUser(user)
      .subscribe(data => {
        if (data.success) {
          this.authService.storeUserData(data.token, data.user);
          this.flashMessagesService.show("User logged in.", {cssClass: 'alert-success', timeout: 5000});
          if (this.userType === 'admin') {
            this.router.navigate(['/dashboard']);
          } else {
            this.router.navigate(['/profile']);
          }
        } else {
          this.flashMessagesService.show("Login failed: " + data.msg, {cssClass: 'alert-danger', timeout: 5000});
          this.router.navigate(['/login']);
        }
      });
  }

}
