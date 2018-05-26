import {
  Injectable
} from '@angular/core';
import {
  HttpClient
} from '@angular/common/http';
import {
  Subject
} from 'rxjs/Subject';
import {
  Observable
} from 'rxjs/Observable';

@Injectable()
export class DataService {

  private listaURL = 'assets/file.json';

  private lista$ = new Subject < any > ();
  private data: string[] = new Array();

  public stol0_1: string[] = new Array(16);
  public stol0_2: string[] = new Array(16);

  public stol1_1: string[] = new Array(13);
  public stol1_2: string[] = new Array(13);

  public stol2_1: string[] = new Array(10);
  public stol2_2: string[] = new Array(10);

  public stol4_1: string[] = new Array(10);
  public stol4_2: string[] = new Array(10);

  public stol5_1: string[] = new Array(13);
  public stol5_2: string[] = new Array(13);

  public lista: string[];

  // tslint:disable-next-line:max-line-length
  public listaName: string[] = ['"stol0_1":', '"stol0_2":', '"stol1_1":', '"stol1_2":', '"stol2_1":', '"stol2_2":', '"stol4_1":', '"stol4_2":', '"stol5_1":', '"stol5_2":', '"lista":'];

  public tabMain = '{';

  constructor(private http: HttpClient) {
    this.getData().subscribe((data) => {
      this.lista = data['lista'];
      this.stol0_1 = data['stol0_1'];
      this.stol0_2 = data['stol0_2'];
      this.stol1_1 = data['stol1_1'];
      this.stol1_2 = data['stol1_2'];
      this.stol2_1 = data['stol2_1'];
      this.stol2_2 = data['stol2_2'];
      this.stol4_1 = data['stol4_1'];
      this.stol4_2 = data['stol4_2'];
      this.stol5_1 = data['stol5_1'];
      this.stol5_2 = data['stol5_2'];
    });
  }

  getData() {
    return this.http.get(this.listaURL);
  }

  getAllTab(...arr) {
      const tab: any[] = new Array(arguments.length);
      // przepisanie wszystkich tablic do jednej
      for (let i = 0; i < arguments.length; i++) {
            tab[i] = arguments[i];
      }
      return tab;
  }


  textJSON() {
    const count = this.listaName.length;

    // tslint:disable-next-line:max-line-length
    const tabAll =  this.getAllTab(this.stol0_1, this.stol0_2, this.stol1_1, this.stol1_2, this.stol2_1, this.stol2_2, this.stol4_1, this.stol4_2, this.stol5_1, this.stol5_2, this.lista);

    for (let i = 0; i < this.listaName.length; i++) {
      if ( i <  this.listaName.length - 1 ) {
        this.tabMain +=  this.listaName[i] + JSON.stringify(tabAll[i]) + ',';
      } else {
        this.tabMain +=  this.listaName[i] + JSON.stringify(tabAll[i]) + '}';
      }
    }
     return  this.tabMain;
  }

  // drag and drop function

  lockDrop(index: number, tab: Array < string > ) {
    if (tab[index] === null) {
      return true;
    } else {
      return false;
    }
  }

  lockDrag(index: number, tab: Array < string > ) {
    if (tab[index] === null) {
      return false;
    } else {
      return true;
    }
  }


  onItemDrop(e: any, index: number, db: Array < string > ) {
    db[index] = e.dragData.name;
    const value: string = e.dragData.db;
    switch (value) {
      case 'lista':
        {
          this.lista[e.dragData.index] = null;
          console.log('lista');
          break;
        }
      case 'stol5_1':
        {
          this.stol5_1[e.dragData.index] = null;
          console.log('stol5_1');
          break;
        }
      case 'stol5_2':
        {
          this.stol5_2[e.dragData.index] = null;
          console.log('stol5_2');
          break;
        }
      case 'stol4_1':
        {
          this.stol4_1[e.dragData.index] = null;
          console.log('stol4_1');
          break;
        }
      case 'stol4_2':
        {
          this.stol4_2[e.dragData.index] = null;
          console.log('stol4_2');
          break;
        }
      case 'stol2_1':
        {
          this.stol2_1[e.dragData.index] = null;
          console.log('stol3_1');
          break;
        }
      case 'stol2_2':
        {
          this.stol2_2[e.dragData.index] = null;
          console.log('stol2_2');
          break;
        }
      case 'stol1_1':
        {
          this.stol1_1[e.dragData.index] = null;
          console.log('stol1_1');
          break;
        }
      case 'stol1_2':
        {
          this.stol1_2[e.dragData.index] = null;
          console.log('stol1_2');
          break;
        }
      case 'stol0_1':
        {
          this.stol0_1[e.dragData.index] = null;
          console.log('stol0_1');
          break;
        }
      case 'stol0_2':
        {
          this.stol0_2[e.dragData.index] = null;
          console.log('stol0_2');
          break;
        }
      default:
        {
          console.log('bład z tabelami');
          break;
        }
    }
  }

}
