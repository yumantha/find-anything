import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {SearchService} from "../../../services/search/search.service";

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.css']
})
export class SearchResultsComponent implements OnInit {


  constructor(
    private router: Router,
    private searchService: SearchService
  ) { }

  ngOnInit() {

  }

}
