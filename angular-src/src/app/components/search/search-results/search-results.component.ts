import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {SearchService} from "../../../services/search/search.service";
import {FlashMessagesService} from "angular2-flash-messages";
import {ValidateService} from "../../../services/validate/validate.service";

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

  itemCheck: Boolean = true;
  serviceCheck: Boolean = true;
  priceUpper: Number;
  priceLower: Number;
  district: String;
  name: String;
  category: String;
  rating: Number;

  searchObject: any = {};
  types:any = {};
  priceRange: any = {};
  sortBy: any = {};

  districts: Array<any> = [
    {value: 'Ampara', viewValue: 'Ampara'},
    {value: 'Anuradhapura', viewValue: 'Anuradhapura'},
    {value: 'Badulla', viewValue: 'Badulla'},
    {value: 'Batticaloa', viewValue: 'Batticaloa'},
    {value: 'Colombo', viewValue: 'Colombo'},
    {value: 'Galle', viewValue: 'Galle'},
    {value: 'Gampaha', viewValue: 'Gampaha'},
    {value: 'Hambantota', viewValue: 'Hambantota'},
    {value: 'Jaffna', viewValue: 'Jaffna'},
    {value: 'Kalutara', viewValue: 'Kalutara'},
    {value: 'Kandy', viewValue: 'Kandy'},
    {value: 'Kegalle', viewValue: 'Kegalle'},
    {value: 'Kilinochchi', viewValue: 'Kilinochchi'},
    {value: 'Kurunegala', viewValue: 'Kurunegala'},
    {value: 'Mannar', viewValue: 'Mannar'},
    {value: 'Matale', viewValue: 'Matale'},
    {value: 'Matara', viewValue: 'Matara'},
    {value: 'Monaragala', viewValue: 'Monaragala'},
    {value: 'Mullaitivu', viewValue: 'Mullaitivu'},
    {value: 'Nuwara Eliya', viewValue: 'Nuwara Eliya'},
    {value: 'Polonnaruwa', viewValue: 'Polonnaruwa'},
    {value: 'Puttalam', viewValue: 'Puttalam'},
    {value: 'Ratnapura', viewValue: 'Ratnapura'},
    {value: 'Trincomalee', viewValue: 'Trincomalee'},
    {value: 'Vavuniya', viewValue: 'Vavuniya'}
  ];

  ratings: Array<any> = [
    {value: '1', viewValue: '1+'},
    {value: '2', viewValue: '2+'},
    {value: '3', viewValue: '3+'},
    {value: '4', viewValue: '4+'},
  ];

  sortCriterias: Array<any> = [
    {value: 'rating', viewValue: 'Rating'},
    {value: 'name', viewValue: 'Name'},
    {value: 'category', viewValue: 'Category'},
    {value: 'price', viewValue: 'Price'}
  ];

  constructor(
    private router: Router,
    private searchService: SearchService,
    private flashMessagesService: FlashMessagesService,
    private validateService: ValidateService
  ) { }

  ngOnInit() {
    this.getSearchObject();
    this.assignValues();
    this.searchService.search(this.query)
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

  refineSearch() {
    if(!this.name.trim()) {
      return this.flashMessagesService.show('Please enter name to search for', {cssClass: 'alert-danger', timeout: 5000});
    }

    if(this.priceUpper) {
      if(!this.validateService.validatePrice(this.priceUpper)) {
        return this.flashMessagesService.show('Please enter a valid price', {cssClass: 'alert-danger', timeout: 5000});
      }
    }

    if(this.priceLower) {
      if(!this.validateService.validatePrice(this.priceLower)) {
        return this.flashMessagesService.show('Please enter a valid price', {cssClass: 'alert-danger', timeout: 5000});
      }
    }

    if(this.priceLower && this.priceUpper) {
      if(!this.validateService.validatePriceRange(this.priceLower, this.priceUpper)) {
        return this.flashMessagesService.show('Please enter a valid price range', {cssClass: 'alert-danger', timeout: 5000});
      }
    }

    this.types.items = this.itemCheck;
    this.types.services = this.serviceCheck;

    this.priceRange.priceUpper = this.priceUpper;
    this.priceRange.priceLower = this.priceLower;

    this.searchObject.name = this.name;
    this.searchObject.priceRange = this.priceRange;
    this.searchObject.types = this.types;
    this.searchObject.district = this.district;
    this.searchObject.category = this.category;
    this.searchObject.sortBy = this.sortBy;
    this.searchObject.rating = this.rating;

    this.router.navigate(['search/results', {search: JSON.stringify(this.searchObject)}]);

    window.location.reload();
  }

  getSearchObject() {
    this.searchObject = JSON.parse(decodeURIComponent(this.query.split(';')[1].split('=')[1]));
  }

  assignValues() {
    if(this.searchObject.name) {
      this.name = this.searchObject.name;
    }

    if(this.searchObject.priceRange) {
      if(this.searchObject.priceRange.priceUpper) {
        this.priceUpper = this.searchObject.priceRange.priceUpper
      }

      if(this.searchObject.priceRange.priceLower) {
        this.priceLower = this.searchObject.priceRange.priceLower
      }
    }

    if(this.searchObject.types) {
      this.itemCheck = this.searchObject.types.items;
      this.serviceCheck = this.searchObject.types.services;
    }

    if(this.searchObject.district) {
      this.district = this.searchObject.district;
    }

    if(this.searchObject.category) {
      this.category = this.searchObject.category;
    }

    if(this.searchObject.sortBy) {
      this.sortBy.criteria = this.searchObject.sortBy.criteria;
      this.sortBy.way = this.searchObject.sortBy.way;
    }
  }
}
