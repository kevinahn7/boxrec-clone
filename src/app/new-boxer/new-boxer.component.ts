import { Component, OnInit } from '@angular/core';
import { Boxer } from '../models/boxer.models';
import { boxerList } from '../models/all-boxers.models';
import { WEIGHTS } from '../models/weightClasses.models';

@Component({
  selector: 'app-new-boxer',
  templateUrl: './new-boxer.component.html',
  styleUrls: ['./new-boxer.component.css']
})
export class NewBoxerComponent implements OnInit {
  weightClasses = WEIGHTS;

  addNewBoxer(name, weightClass, country, record, ranking) {
    if (name && weightClass && country && record && ranking) {
      let newBoxer: Boxer = new Boxer(name, weightClass, country, record, ranking);
      boxerList.push(newBoxer);
    }
  }


  constructor() { }

  ngOnInit() {
  }

}
