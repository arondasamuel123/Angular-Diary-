import { Component, OnInit } from '@angular/core';
import {Diary} from '../diary';

@Component({
  selector: 'app-diary-form',
  templateUrl: './diary-form.component.html',
  styleUrls: ['./diary-form.component.css']
})
export class DiaryFormComponent implements OnInit {
  
newEntry = new Diary(0, '', '', new Date());


  constructor() { }

  ngOnInit() {
  }

}
