import {Component, OnInit} from '@angular/core';
import {AuthService} from "../../../services/authenticate/auth.service";
import {FlashMessagesService} from "angular2-flash-messages";
import {Router} from "@angular/router";
import {SearchService} from "../../../services/search/search.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  searchKeyword: String;
  searchObject: any = {};
  types: any = {};
  sortBy: any = {};

  constructor(
    private authService: AuthService,
    private flashMessagesService: FlashMessagesService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  onLogoutClick() {
    this.authService.logout();
    this.flashMessagesService.show("User logged out", {cssClass: 'alert-success', timeout: 5000});
    this.router.navigate(['/login']);
    return false;
  }

  quickSearch(searchKeyword) {
    if(!searchKeyword) {
      return this.flashMessagesService.show("Please enter a keyword to search", {cssClass: 'alert-danger', timeout: 5000});
    }

    this.types.items = true;
    this.types.services = true;

    this.sortBy.criteria = 'name';
    this.sortBy.way = 'asc';

    this.searchObject.name = searchKeyword;
    this.searchObject.types = this.types;
    this.searchObject.sortBy = this.sortBy;

    this.router.navigate(['search/results', {search: JSON.stringify(this.searchObject)}]);

    window.location.reload();
  }
}
