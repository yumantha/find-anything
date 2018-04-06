import {Component, OnInit} from '@angular/core';
import {Chart} from 'chart.js';
import {ImageService} from "../../../services/image/image.service";
import {FlashMessagesService} from "angular2-flash-messages";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  files : FileList;
  imageId: String = '5ac762d148de1c0b4c3e1c2b';
  displayImage: any;
  imageUrl: String = 'http://localhost:3000/images/' + this.imageId;

  constructor(
    private imageService:ImageService,
    private flashMessagesService: FlashMessagesService,
  ) { }

  ngOnInit() {
  }

  getFiles(event){
    this.files = event.target.files;
  }

  submitFile() {
    if(!this.files) {
      this.flashMessagesService.show("Please select an image to upload", {cssClass: 'alert-danger', timeout: 5000});
      return false;
    } else {
      if(this.files.length !== 1) {
        this.flashMessagesService.show("Please select a single image to upload", {cssClass: 'alert-danger', timeout: 5000});
        return false;
      } else {
        this.imageService.uploadImage(this.files[0])
          .subscribe(data => {
            if(data.success) {
              this.flashMessagesService.show(data.msg, {cssClass: 'alert-success', timeout: 5000});
              return true;
            } else {
              this.flashMessagesService.show(data.msg, {cssClass: 'alert-danger', timeout: 5000});
              return false;
            }
          })
      }
    }
  }

  getFile() {
    this.imageService.getImage(this.imageId)
      .subscribe(data => {
        console.log(data);
      })
  }
}
