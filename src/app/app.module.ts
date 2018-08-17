import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { BoxersComponent } from './boxers/boxers.component';
import { BoxerDetailComponent } from './boxer-detail/boxer-detail.component';
import { NewBoxerComponent } from './new-boxer/new-boxer.component';
import { FeaturedBoxerComponent } from './featured-boxer/featured-boxer.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { WhichWeightPipe } from './whichWeight.pipe';

@NgModule({
  declarations: [
    AppComponent,
    BoxersComponent,
    BoxerDetailComponent,
    NewBoxerComponent,
    FeaturedBoxerComponent,
    NavBarComponent,
    WhichWeightPipe
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
