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
  resultItems: Array<any> = [];
  resultServices: Array<any> = [];
  resultsAvailable: Boolean = false;

  constructor(
    private authService: AuthService,
    private searchService: SearchService,
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

    this.searchService.quickSearch(searchKeyword)
      .subscribe(data => {
        if(!data.success) {
          return this.flashMessagesService.show(data.msg, {cssClass: 'alert-danger', timeout: 5000});
        } else {
          if(data.results) {
            this.resultsAvailable = true;
            data.results.forEach((result => {
              if(result.type === 'item') {
                this.resultItems.push(result);
              } else if (result.type === 'service') {
                this.resultServices.push(result);
              }
            }));
          } else {

          }
        }
      });
    this.router.navigate(['search/results']);
  }
}
