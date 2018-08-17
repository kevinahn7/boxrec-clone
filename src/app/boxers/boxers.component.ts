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



  constructor() { }

  ngOnInit() {
  }

}
