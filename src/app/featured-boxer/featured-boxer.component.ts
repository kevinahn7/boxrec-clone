import { Component, OnInit } from '@angular/core';
import { Boxer } from '../models/boxer.models';
import { boxerList } from '../models/all-boxers.models';

@Component({
  selector: 'app-featured-boxer',
  templateUrl: './featured-boxer.component.html',
  styleUrls: ['./featured-boxer.component.css']
})
export class FeaturedBoxerComponent implements OnInit {
  boxers = boxerList;

  randomBoxerNumber: number = Math.floor(Math.random() * this.boxers.length);

  randomBoxer = this.boxers[this.randomBoxerNumber];
  constructor() { }

  ngOnInit() {
  }

}
