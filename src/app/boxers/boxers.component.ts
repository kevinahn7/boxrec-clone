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

  weightClasses = WEIGHTS;
  boxers = boxerList;
  selectedBoxer: Boxer;
  newBoxerForm = null;
  sortRankingAscending = false;
  sortCountryAscending = false;
  sortNameAscending = false;
  sortRecordAscending = false;
  sortWeightClassAscending = false;
  filterByWeight: string = "allWeights";

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
        let A = a.name.toUpperCase();
        let B = b.name.toUpperCase();
        if (A < B) {
          return -1;
        }
        if (A > B) {
          return 1;
        }
        return 0;
      });
    } else {
      this.sortNameAscending = false;
      this.boxers.sort((a, b) => {
        let A = a.name.toUpperCase();
        let B = b.name.toUpperCase();
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
    } else {
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

  sortByCountry() {
    if (this.sortCountryAscending === false) {
      this.sortCountryAscending = true;
      this.boxers.sort((a, b) => {
        let A = a.country.toUpperCase();
        let B = b.country.toUpperCase();
        if (A < B) {
          return -1;
        }
        if (A > B) {
          return 1;
        }
        return 0;
      });
    } else {
      this.sortCountryAscending = false;
      this.boxers.sort((a, b) => {
        let A = a.country.toUpperCase();
        let B = b.country.toUpperCase();
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

  sortByRanking() {
    if (this.sortRankingAscending === false) {
      this.sortRankingAscending = true;
      this.boxers.sort((a, b) => {return a.ranking - b.ranking})
    }
    else {
      this.sortRankingAscending = false;
      this.boxers.sort((a, b) => {return b.ranking - a.ranking})
    }
  }

  sortByRecord() {
    if (this.sortRecordAscending === false) {
      this.sortRecordAscending = true;
      this.boxers.sort((a, b) => {
        let A = parseInt(a.record.split("-")[0]);
        let B = parseInt(b.record.split("-")[0]);
        if (A < B) {
          return -1;
        }
        if (A > B) {
          return 1;
        }
        return 0;
      });
    } else {
      this.sortRecordAscending = false;
      this.boxers.sort((a, b) => {
        let A = parseInt(a.record.split("-")[0]);
        let B = parseInt(b.record.split("-")[0]);
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

  onChange(optionFromMenu) {
    this.filterByWeight = optionFromMenu;
  }

  constructor() { }

  ngOnInit() {
  }

}
