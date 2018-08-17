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
  newBoxerForm = null;

  openBoxerDetail(boxer: Boxer): void {
    if (this.selectedBoxer === boxer) {
      this.selectedBoxer = null;
    } else {
      this.selectedBoxer = boxer;
    }
  }

  closeBoxerDetail() {
    this.selectedBoxer = null;
  }

  openNewBoxer() {
    this.newBoxerForm = true;
  }

  closeNewBoxer() {
    this.newBoxerForm = null;
  }

  constructor() { }

  ngOnInit() {
  }

}
