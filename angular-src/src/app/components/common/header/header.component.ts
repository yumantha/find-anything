import {Component, OnInit} from '@angular/core';
import {AuthService} from "../../../services/authenticate/auth.service";
import {FlashMessagesService} from "angular2-flash-messages";
import {Router} from "@angular/router";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(
    private authService: AuthService,
    private flashMessagesService: FlashMessagesService,
    private router: Router
  ) { }

  ngOnInit() {
    // console.log(this.authService.loggedIn());
  }

  onLogoutClick() {
    this.authService.logout();
    this.flashMessagesService.show("User logged out.", {cssClass: 'alert-success', timeout: 5000});
    this.router.navigate(['/login']);
    return false;
  }

}
