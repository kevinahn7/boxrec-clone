import { Component, OnInit } from '@angular/core';
import { Boxer } from '../models/boxer.models';
import { boxerList } from '../models/all-boxers.models';

@Component({
  selector: 'app-new-boxer',
  templateUrl: './new-boxer.component.html',
  styleUrls: ['./new-boxer.component.css']
})
export class NewBoxerComponent implements OnInit {

  addNewBoxer(name, weightClass, country, record ) {
    if (name && weightClass && country && record) {
      let newBoxer: Boxer = new Boxer(name, weightClass, country, record);
      boxerList.push(newBoxer);
    }
  }


  constructor() { }

  ngOnInit() {
  }

}
