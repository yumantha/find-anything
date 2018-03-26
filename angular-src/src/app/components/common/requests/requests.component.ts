import {Component, OnInit} from '@angular/core';
import {RequestService} from "../../../services/requests/request.service";
import {FlashMessagesService} from "angular2-flash-messages";
import {Router} from "@angular/router";
import {AuthService} from "../../../services/authenticate/auth.service";
import {ItemService} from "../../../services/items/item.service";

@Component({
  selector: 'app-requests',
  templateUrl: './requests.component.html',
  styleUrls: ['./requests.component.css']
})
export class RequestsComponent implements OnInit {
  requests: Array<any> = [];
  reqsAvailable: Boolean = false;

  constructor(
    private router: Router,
    private authService: AuthService,
    private requestService: RequestService,
    private itemService: ItemService,
    private flashMessagesService: FlashMessagesService
  ) { }

  ngOnInit() {
    if(!this.authService.loggedIn()) {
      this.flashMessagesService.show('You much be logged in to access that page', {cssClass: 'alert-danger', timeout: 5000});
      return this.router.navigate(['/login']);
    }

    if(localStorage.getItem('user_type') !== 'seller') {
      this.flashMessagesService.show('You much be signed in as a seller to receive purchase requests', {cssClass: 'alert-danger', timeout: 5000});
      return this.router.navigate(['/profile']);
    }

    this.requestService.getRequstsBySeller(localStorage.getItem('user_id'))
      .subscribe(data => {
        if(!data.success) {
          this.flashMessagesService.show(data.msg, {cssClass: 'alert-danger', timeout: 5000});
        } else {
          data.reqs.forEach((req) => {
            this.authService.getUser(req.from, 'customer')
              .subscribe(users => {
                if(!users.success) {
                  this.flashMessagesService.show(data.msg, {cssClass: 'alert-danger', timeout: 5000});
                } else {
                  if(req.itemType==='item') {
                    this.itemService.getItem(req.item)
                      .subscribe(items => {
                        if(!items.success) {
                          this.flashMessagesService.show(data.msg, {cssClass: 'alert-danger', timeout: 5000});
                        } else {
                          const request = {
                            id: req._id,
                            from: users.user,
                            item: items.item,
                            itemType: 'item',
                            accepted: req.accepted,
                            timestamp: req.timestamp
                          };

                          this.requests.push(request);

                          if(this.requests.length > 0) {
                            this.reqsAvailable = true;
                          }
                        }
                      })
                  } else if(req.itemType==='service') {
                    this.itemService.getService(req.item)
                      .subscribe(services => {
                        if(!services.success) {
                          this.flashMessagesService.show(data.msg, {cssClass: 'alert-danger', timeout: 5000});
                        } else {
                          const request = {
                            id: req._id,
                            from: users.user,
                            item: services.service,
                            itemType: 'service',
                            accepted: req.accepted,
                            timestamp: req.timestamp
                          };

                          this.requests.push(request);

                          if(this.requests.length > 0) {
                            this.reqsAvailable = true;
                          }
                        }
                      })
                  }
                }
              });
          });
        }
      });

    this.requests = this.sortByKey(this.requests, 'timestamp').reverse()
  }

  sortByKey(array, key) {
    return array.sort(function(a, b) {
      const x = a[key];
      const y = b[key];
      return ((x < y) ? -1 : ((x > y) ? 1 : 0));
    });
  }

  acceptReq(reqId) {
    this.requestService.acceptRequest(reqId)
      .subscribe(data => {
        if(data.success) {
          this.flashMessagesService.show("The request for purchase has been accepted", {cssClass: 'alert-success', timeout: 5000});
          window.location.reload();
        } else {
          this.flashMessagesService.show(data.msg, {cssClass: 'alert-danger', timeout: 5000});
        }
      })
  }

  declineReq(reqId) {
    this.requestService.declineRequest(reqId)
      .subscribe(data => {
        if(data.success) {
          this.flashMessagesService.show("The was successfully declined", {cssClass: 'alert-success', timeout: 5000});
          window.location.reload();
        } else {
          this.flashMessagesService.show(data.msg, {cssClass: 'alert-danger', timeout: 5000});
        }
      })
  }

}
