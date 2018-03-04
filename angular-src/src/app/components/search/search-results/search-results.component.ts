import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {SearchService} from "../../../services/search/search.service";
import {FlashMessagesService} from "angular2-flash-messages";

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.css']
})
export class SearchResultsComponent implements OnInit {
  routeArray: String[] = this.router.url.split("/");
  query: String = this.routeArray.slice(-1)[0];
  resultsAvailable: Boolean = false;
  resultsArray: Array<any> = [];

  constructor(
    private router: Router,
    private searchService: SearchService,
    private flashMessagesService: FlashMessagesService
  ) { }

  ngOnInit() {
    this.searchService.quickSearch(this.query)
      .subscribe(data => {
        if(data.success) {
          if(data.results) {
            this.resultsAvailable = true;
            data.results.forEach((result) => {
              this.resultsArray.push(result);
            });
          }
        } else {
          return this.flashMessagesService.show(data.msg, {cssClass: 'alert-danger', timeout: 5000});
        }
      });
  }

  goToItem(itemId) {
    this.router.navigate(['/items/' + itemId])
  }

  goToService(serviceId) {
    this.router.navigate(['/services/' + serviceId])
  }

}
