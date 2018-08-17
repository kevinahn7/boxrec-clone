import { Component, OnInit } from '@angular/core';
import { Boxer } from '../models/boxer.models';
import { boxerList } from '../models/all-boxers.models';
import { WEIGHTS } from '../models/weightClasses.models';


@Component({
  selector: 'app-boxers',
  templateUrl: './boxers.component.html',
  styleUrls: ['./boxers.component.css']
})
export class BoxersComponent implements OnInit {

  boxers = boxerList;
  selectedBoxer: Boxer;
  newBoxerForm = null;
  sortRankingAscending = false;
  sortCountryAscending = false;
  sortNameAscending = false;
  sortRecordAscending = false;
  sortWeightClassAscending = false;

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
    if (this.sortNameAscending === false) {
      this.sortNameAscending = true;
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
      this.sortNameAscending = false;
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

  sortByWeightClass() {
    if (this.sortWeightClassAscending === false) {
      this.sortWeightClassAscending = true;
      this.boxers.sort((a, b) => {
        let A = WEIGHTS.indexOf(a.weightClass);
        let B = WEIGHTS.indexOf(b.weightClass);
        if (A < B) {
          return -1;
        }
        if (A > B) {
          return 1;
        }
        return 0;
      });
    }
    else {
      this.sortWeightClassAscending = false;
      this.boxers.sort((a, b) => {
        let A = WEIGHTS.indexOf(a.weightClass);
        let B = WEIGHTS.indexOf(b.weightClass);
        if (A < B) {
          return -1;
        }
        if (A > B) {
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
