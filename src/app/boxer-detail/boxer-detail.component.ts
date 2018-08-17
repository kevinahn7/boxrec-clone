import { Component, OnInit, Input } from '@angular/core';
import { Boxer } from '../models/boxer.models';

@Component({
  selector: 'app-boxer-detail',
  templateUrl: './boxer-detail.component.html',
  styleUrls: ['./boxer-detail.component.css']
})
export class BoxerDetailComponent implements OnInit {
  @Input() boxer: Boxer;


  
  constructor() { }

  ngOnInit() {
  }

}
