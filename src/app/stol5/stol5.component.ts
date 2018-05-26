import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-stol5',
  templateUrl: './stol5.component.html',
  styleUrls: ['./stol5.component.scss']
})
export class Stol5Component implements OnInit {

  constructor(public db: DataService) { }

    lockDrop(index: number, tab: Array<string>) {
      return this.db.lockDrop(index, tab);
    }
    lockDrag(index: number, tab: Array<string>) {
      return this.db.lockDrag(index, tab);
    }
    onItemDrop(e: any, index: number, db: Array<string>) {
      return this.db.onItemDrop(e, index, db);
     }


  ngOnInit() {
  }

}
