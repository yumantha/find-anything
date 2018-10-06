import {Injectable} from "@angular/core";
import {Router, CanActivate} from "@angular/router";
import {AuthService} from "../services/authenticate/auth.service";
import {FlashMessagesService} from "angular2-flash-messages";

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(
    private router: Router,
    private authService: AuthService,
    private flashMessagesService: FlashMessagesService
  ) {
  }

  canActivate() {
    if (this.authService.loggedIn()) {
      return true;
    } else {
      this.flashMessagesService.show("You must be logged in", {cssClass: 'alert-danger', timeout: 5000});
      this.router.navigate(['/login']);
      return false;
    }
  }
}
