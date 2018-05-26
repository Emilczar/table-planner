import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgDragDropModule } from 'ng-drag-drop';


import { AppComponent } from './app.component';
import { StolComponent } from './stol/stol.component';
import { Stol2Component } from './stol2/stol2.component';
import { DataService } from './data.service';
import { Stol3Component } from './stol3/stol3.component';
import { Stol4Component } from './stol4/stol4.component';
import { Stol5Component } from './stol5/stol5.component';
import { ListaComponent } from './lista/lista.component';
import { AComponent } from './a/a.component';





@NgModule({
  declarations: [
    AppComponent,
    StolComponent,
    Stol2Component,
    Stol3Component,
    Stol4Component,
    Stol5Component,
    ListaComponent,
    AComponent

  ],
  imports: [
    BrowserModule, FormsModule, NgDragDropModule.forRoot(), HttpClientModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
