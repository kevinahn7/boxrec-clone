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
  sortRankingAsc = false;
  sortCountryAsc = false;
  sortNameAsc = false;
  sortRecordAsc = false;
  sortWeightClassAsc = false;

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

  sortByName() {
    if (this.sortNameAsc === false) {
      this.sortNameAsc = true;
      this.boxers.sort((a, b) => {
        let nameA = a.name.toUpperCase();
        let nameB = b.name.toUpperCase();
        if (nameA < nameB) {
          return -1;
        }
        if (nameA > nameB) {
          return 1;
        }
        return 0;
      });
    }
    else {
      this.sortNameAsc = false;
      this.boxers.sort((a, b) => {
        let nameA = a.name.toUpperCase();
        let nameB = b.name.toUpperCase();
        if (nameA < nameB) {
          return -1;
        }
        if (nameA > nameB) {
          return 1;
        }
        return 0;
      });
      this.boxers.reverse();
    }
  }

  constructor() { }

  ngOnInit() {
  }

}
