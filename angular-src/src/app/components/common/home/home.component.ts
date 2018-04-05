import {Component, OnInit} from '@angular/core';
import {Chart} from 'chart.js';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  file: File;

  constructor() { }

  ngOnInit() {
  }

  submitFile() {
    console.log(this.file);
  }

  getFile(event) {
    this.file = event.target.file;
    // console.log(event.target.image)
  }
}
