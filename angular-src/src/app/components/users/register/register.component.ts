import {Component, OnInit} from '@angular/core';
import {ValidateService} from "../../../services/validate/validate.service";
import {FlashMessagesService} from "angular2-flash-messages";
import {AuthService} from "../../../services/authenticate/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  hidePass: Boolean = true;
  hideConfPass: Boolean = true;

  name: String;
  username: String;
  email: String;
  password: String;
  confPass: String;
  telephone: String;
  mobile: String;
  address: String;
  userType: String;

  constructor(
    private validateService: ValidateService,
    private flashMessagesService: FlashMessagesService,
    private authService: AuthService,
    private router: Router
  ) {
  }

  ngOnInit() {
    this.authService.logout();
  }

  onRegisterSubmit() {
    const user = {
      name: this.name,
      username: this.username,
      email: this.email,
      password: this.password,
      confPass: this.confPass,
      telephone: this.telephone,
      mobile: this.mobile,
      address: this.address,
      userType: this.userType
    };

    console.log(user);

    if (!this.validateService.validateRegister(user)) {
      this.flashMessagesService.show("Please fill in all necessary fields", {cssClass: 'alert-danger', timeout: 5000});
      return false;
    }

    if (!this.validateService.validateUsername(user.username)) {
      this.flashMessagesService.show("Please enter a valid username", {cssClass: 'alert-danger', timeout: 5000});
      return false;
    }

    if (!this.validateService.validateEmail(user.email)) {
      this.flashMessagesService.show("Please enter a valid email address", {cssClass: 'alert-danger', timeout: 5000});
      return false;
    }

    if (!this.validateService.validatePassword(user.password, user.confPass)) {
      this.flashMessagesService.show("Password and confirm password do not match", {
        cssClass: 'alert-danger',
        timeout: 5000
      });
      return false;
    }

    if (user.telephone) {
      if (!this.validateService.validatePhone(user.telephone)) {
        this.flashMessagesService.show("Please enter a valid telephone number", {
          cssClass: 'alert-danger',
          timeout: 5000
        });
        return false;
      }
    }

    if (user.mobile) {
      if (!this.validateService.validatePhone(user.mobile)) {
        this.flashMessagesService.show("Please enter a valid mobile number", {cssClass: 'alert-danger', timeout: 5000});
        return false;
      }
    }

    this.authService.registerUser(user)
      .subscribe(data => {
        if (data.success) {
          this.flashMessagesService.show("You are registered and can now login.", {
            cssClass: 'alert-success',
            timeout: 5000
          });
          this.router.navigate(['/login']);
        } else {
          this.flashMessagesService.show(data.msg, {cssClass: 'alert-danger', timeout: 5000});
          this.router.navigate(['/register']);
        }
      })
  }
}
