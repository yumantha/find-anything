import { Component, OnInit } from '@angular/core';
import {ValidateService} from "../../../services/validate/validate.service";
import {FlashMessagesService} from "angular2-flash-messages";
import {AuthService} from "../../../services/authenticate/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-edit-account',
  templateUrl: './edit-account.component.html',
  styleUrls: ['./edit-account.component.css']
})
export class EditAccountComponent implements OnInit {
  user: any;
  dataAvailable: Boolean = false;

  hidePass: Boolean = true;
  hideConfPass: Boolean = true;

  password: String;
  confPass: String;

  constructor(
    private validateService: ValidateService,
    private flashMessagesService: FlashMessagesService,
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
    this.authService.getProfile()
      .subscribe(profile => {
          this.user = profile.user;
          this.dataAvailable = true;
          // console.log(this.user);
        },
        error => {
          console.log(error);
          return false;
        }
      )
  }

  onCancel() {
    this.router.navigate(['/profile']);
  }

  onEditAcc() {
    if(!this.user.email) {
      this.flashMessagesService.show("Please enter an email address", {cssClass: 'alert-danger', timeout: 5000});
      return false;
    }

    if(!this.validateService.validateEmail(this.user.email)) {
      this.flashMessagesService.show("Please enter a valid email address", {cssClass: 'alert-danger', timeout: 5000});
      return false;
    }

    const editedUser = {
      user_id: this.user._id,
      email: this.user.email,
      password: null
    };

    if(this.password) {
      if(!this.validateService.validatePassword(this.password, this.confPass)){
        this.flashMessagesService.show("Password and confirm password do not match", {cssClass: 'alert-danger', timeout: 5000});
        return false;
      } else {
        editedUser.password = this.password;
      }
    }

    this.authService.editUserAcc(editedUser)
      .subscribe(data => {
        if(data.success) {
          this.flashMessagesService.show("User edited. Please login again.", {cssClass: 'alert-success', timeout: 5000});
          this.authService.logout();
          this.router.navigate(['/login']);
        } else {
          this.flashMessagesService.show(data.msg, {cssClass: 'alert-danger', timeout: 5000});
          this.router.navigate(['/profile']);
        }
      });
  }


}
