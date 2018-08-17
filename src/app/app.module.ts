import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { BoxersComponent } from './boxers/boxers.component';
import { BoxerDetailComponent } from './boxer-detail/boxer-detail.component';


@NgModule({
  declarations: [
    AppComponent,
    BoxersComponent,
    BoxerDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
