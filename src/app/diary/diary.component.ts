import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import {Diary} from '../diary';


@Component({
  selector: 'app-diary',
  templateUrl: './diary.component.html',
  styleUrls: ['./diary.component.css']
})
export class DiaryComponent implements OnInit {
  constructor() { }

  @Output () isDeleted = new EventEmitter<boolean>();
  entries: Diary[] = [


  ];

  deleteEntry(index) {

      const toDelete = confirm(`Are you sure you want to delete`);
      if (toDelete) {

      this.entries.splice(index, 1);
      }

  }

  addNewEntry(entry) {
    const entryLength = this.entries.length;
    entry.id = entryLength + 1;
    entry.entryDate = new Date(entry.entryDate);
    this.entries.push(entry);

  }

  ngOnInit() {
  }

}
