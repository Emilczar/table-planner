import { DataService } from './../data.service';
import { Component, OnInit } from '@angular/core';
import * as FileSaver from 'file-saver';


@Component({
  selector: 'app-a',
  templateUrl: './a.component.html',
  styleUrls: ['./a.component.scss']
})
export class AComponent implements OnInit {

  constructor( public db: DataService ) { }
    textSave() {
      const file = new File([this.db.textJSON()],  'file.json', { type: 'application/json'});
      FileSaver.saveAs(file);
    }
  ngOnInit() {
  }

}

