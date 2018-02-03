import {Component, OnInit} from '@angular/core';
import {ValidateService} from "../../../services/validate/validate.service";
import {FlashMessagesService} from "angular2-flash-messages";
import {AuthService} from "../../../services/authenticate/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css']
})
export class EditProfileComponent implements OnInit {
  user: any;

  dataAvailable: Boolean = false;
  hidePass: Boolean = true;
  hideConfPass: Boolean = true;

  password: String;
  confPass: String;
  newPass: Boolean = false;

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
          console.log(this.user)
        },
        error => {
          console.log(error);
          return false;
        }
      )
  }

  onEditSubmit() {
    if(this.user.username) {
      if(!this.validateService.validateUsername(this.user.username)) {
        this.flashMessagesService.show("Please enter a valid username", {cssClass: 'alert-danger', timeout: 5000});
        return false;
      }
    }

    if(this.user.email) {
      if(!this.validateService.validateEmail(this.user.email)) {
        this.flashMessagesService.show("Please enter a valid email address", {cssClass: 'alert-danger', timeout: 5000});
        return false;
      }
    }

    if(this.password && this.validateService.validatePassword(this.password, this.confPass)) {
      this.newPass = true;
      this.user.password = this.password;
    } else {
      this.flashMessagesService.show("Password and confirm password do not match", {cssClass: 'alert-danger', timeout: 5000});
      return false;
    }

    this.user.newPass = this.newPass;

    console.log(this.user);

    // this.authService.editUser(this.user)
    //   .subscribe(data => {
    //     if(data.success) {
    //       this.authService.logout();
    //       this.flashMessagesService.show("User edited. Please login again.", {cssClass: 'alert-success', timeout: 5000});
    //       this.router.navigate(['/login']);
    //     } else {
    //       this.flashMessagesService.show(data.msg, {cssClass: 'alert-danger', timeout: 5000});
    //       this.router.navigate(['/profile']);
    //     }
    //   })
  }
}
