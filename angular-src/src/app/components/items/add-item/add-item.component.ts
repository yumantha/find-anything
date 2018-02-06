import {Component, OnInit} from '@angular/core';
import {ValidateService} from "../../../services/validate/validate.service";
import {FlashMessagesService} from "angular2-flash-messages";
import {ItemService} from "../../../services/items/item.service";
import {Router} from "@angular/router";
// import {FormControl} from "@angular/forms";
// import {Observable} from 'rxjs/Observable';
// import {startWith} from 'rxjs/operators/startWith';
// import {map} from 'rxjs/operators/map';

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.css']
})
export class AddItemComponent implements OnInit {
  name: String;
  type: String;
  price: String;
  location: String;
  description: String;
  seller: {
    id: String,
    username: String
  };
  isAvailable: Boolean = true;

  // typeCtrl: FormControl;
  // filteredTypes: Observable<any[]>;

  // types: String[] = ['aaa', 'bbb', 'ccc', 'ddd', 'eee'];

  constructor(
    private validateService: ValidateService,
    private flashMessagesService: FlashMessagesService,
    private itemService: ItemService,
    private router: Router
  ) {
    // this.typeCtrl = new FormControl();
    // this.filteredTypes = this.typeCtrl.valueChanges
    //   .pipe(
    //     startWith(''),
    //     map(type => type ? this.filterTypes(type) : this.types.slice())
    //   );
  }

  // filterTypes(type: string) {
  //   return this.types.filter(type =>
  //     type.toLowerCase().indexOf(type.toLowerCase()) === 0);
  // }

  ngOnInit() {
  }

  onAddItem() {
    const item = {
      name: this.name,
      type: this.type,
      price: this.price,
      location: this.location,
      description: this.description,
      isAvailable: this.isAvailable,
      seller: {
        id: localStorage.getItem('user_id'),
        username: localStorage.getItem('user_username')
      }
    };

    if(!this.validateService.validateItem(item)) {
      this.flashMessagesService.show("Please fill in all necessary fields", {cssClass: 'alert-danger', timeout: 5000});
      return false;
    }

    if(!this.validateService.validateItemSeller(item.seller)) {
      this.flashMessagesService.show("User not found", {cssClass: 'alert-danger', timeout: 5000});
      return false;
    }

    if(!this.validateService.validatePrice(item.price)) {
      this.flashMessagesService.show("Please enter a valid price", {cssClass: 'alert-danger', timeout: 5000});
      return false;
    }

    this.itemService.addItem(item)
      .subscribe(data => {
        if(data.success) {
          this.flashMessagesService.show("The item was successfully added", {cssClass: 'alert-success', timeout: 5000});
          this.router.navigate(['/profile']);
        } else {
          this.flashMessagesService.show(data.msg, {cssClass: 'alert-danger', timeout: 5000});
          this.router.navigate(['/items/new']);
        }
      })
  }
}
