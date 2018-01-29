import {Component, OnInit} from '@angular/core';
import {ValidateService} from "../../../services/validate.service";
import {FlashMessagesService} from "angular2-flash-messages";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  hide: Boolean = true;

  name: String;
  username: String;
  email: String;
  password: String;
  confPass: String;

  constructor(private validateService: ValidateService, private flashMessagesService: FlashMessagesService) { }

  ngOnInit() {
  }

  onRegisterSubmit() {
    const user = {
      name: this.name,
      username: this.username,
      email: this.email,
      password: this.password,
      confPass: this.confPass
    };

    if(!this.validateService.validateRegister(user)) {
      this.flashMessagesService.show("Please fill in all necessary fields", {cssClass: 'alert-danger', timeout: 3000});
      return false;
    } else if(!this.validateService.validateUsername(user.username)) {
      this.flashMessagesService.show("Please enter a valid username", {cssClass: 'alert-danger', timeout: 3000});
      return false;
    } else if(!this.validateService.validateEmail(user.email)) {
      this.flashMessagesService.show("Please enter a valid email address", {cssClass: 'alert-danger', timeout: 3000});
      return false;
    } else if(!this.validateService.validatePassword(user.password, user.confPass)) {
      this.flashMessagesService.show("Password and confirm password do not match", {cssClass: 'alert-danger', timeout: 3000});
      return false;
    } else {
      this.flashMessagesService.show("Success", {cssClass: 'alert-success', timeout: 3000});
    }
  }
}
