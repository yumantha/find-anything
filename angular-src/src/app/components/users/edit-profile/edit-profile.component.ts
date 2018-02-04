import {Component, OnInit} from '@angular/core';
import {ValidateService} from "../../../services/validate/validate.service";
import {FlashMessagesService} from "angular2-flash-messages";
import {AuthService} from "../../../services/authenticate/auth.service";
import {Router} from "@angular/router";
import {MatDialog} from "@angular/material";
import {EnterPassDialog} from "./enter-pass/enter-pass.component";

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css']
})
export class EditProfileComponent implements OnInit {
  user: any;

  dataAvailable: Boolean = false;

  // password: String;
  // confPass: String;
  // newPass: Boolean = false;

  constructor(
    private validateService: ValidateService,
    private flashMessagesService: FlashMessagesService,
    private authService: AuthService,
    private router: Router,
    private dialog: MatDialog
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

  onEditSubmit() {
    if(this.user.username) {
      if(!this.validateService.validateUsername(this.user.username)) {
        this.flashMessagesService.show("Please enter a valid username", {cssClass: 'alert-danger', timeout: 5000});
        return false;
      }
    }

    if(this.user.telephone) {
      if(!this.validateService.validatePhone(this.user.telephone)) {
        this.flashMessagesService.show("Please enter a valid telephone number", {cssClass: 'alert-danger', timeout: 5000});
        return false;
      }
    } else {
      this.user.telephone = null;
    }

    if(this.user.mobile) {
      if(!this.validateService.validatePhone(this.user.mobile)) {
        this.flashMessagesService.show("Please enter a valid mobile number", {cssClass: 'alert-danger', timeout: 5000});
        return false;
      }
    } else {
      delete this.user.mobile;
    }

    if(!this.user.address) {
      delete this.user.address;
    }

    // console.log(this.user);

    this.authService.editUser(this.user)
      .subscribe(data => {
        if(data.success) {
          this.flashMessagesService.show("User edited.", {cssClass: 'alert-success', timeout: 5000});
          this.router.navigate(['/profile']);
        } else {
          this.flashMessagesService.show(data.msg, {cssClass: 'alert-danger', timeout: 5000});
          this.router.navigate(['/profile']);
        }
      });
  }

  openDialog() {
    let dialogRef = this.dialog.open(EnterPassDialog, {
      width: '400px'
    });

    dialogRef.afterClosed()
      .subscribe(result => {
        console.log('dialog closed: ' + result);
      })
  }
}
