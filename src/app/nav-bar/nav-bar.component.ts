import { Component, OnInit } from '@angular/core';
import { Boxer } from '../models/boxer.models';
import { boxerList } from '../models/all-boxers.models';
import { WEIGHTS } from '../models/weightClasses.models';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
