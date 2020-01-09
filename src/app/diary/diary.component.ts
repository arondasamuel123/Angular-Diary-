import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import {Diary} from '../diary';
import { globalAgent } from 'http';

@Component({
  selector: 'app-diary',
  templateUrl: './diary.component.html',
  styleUrls: ['./diary.component.css']
})
export class DiaryComponent implements OnInit {
  constructor() { }

  @Output () isDeleted = new EventEmitter<boolean>();
  entries: Diary[] = [
    new Diary(1, 'Entry 001', 'First time writing in my diary', new Date(2020, 1, 9)),
    new Diary(2, 'Entry 002', 'My charger blew which has pissed me off', new Date(2020, 1, 8)),
    new Diary(3, 'Entry 003','Met someone today with a type c charger very nice person', new Date(2020,1,9))

  ];

  deleteEntry(index) {

      const toDelete = confirm(`Are you sure you want to delete`);
      if (toDelete) {

      this.entries.splice(index, 1);
      }

  }

  addEntry(entry) {
    const entryLength = this.entries.length;
    entry.id = entry.length+ 1;
    entry.entryDate = new Date(entry.entryDate);

  }

  ngOnInit() {
  }

}
