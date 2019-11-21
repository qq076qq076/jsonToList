import { Component, OnInit } from '@angular/core';
declare var require: any;
const data = require('./road.json');

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'JsonToList';
  data = data;
  stringData = JSON.stringify(data).substr(0, 5000) + '......';

  ngOnInit() {
    console.log(this.data);
  }
}
