import { Component, OnInit } from '@angular/core';
import { Boxer } from '../models/boxer.models';
import { boxerList } from '../models/all-boxers.models';

@Component({
  selector: 'app-boxers',
  templateUrl: './boxers.component.html',
  styleUrls: ['./boxers.component.css']
})
export class BoxersComponent implements OnInit {

  boxers = boxerList;
  selectedBoxer: Boxer;

  onSelect(boxer: Boxer): void {
    if (this.selectedBoxer === boxer) {
      this.selectedBoxer = null;
    } else {
      this.selectedBoxer = boxer;
    }
  }


  constructor() { }

  ngOnInit() {
  }

}