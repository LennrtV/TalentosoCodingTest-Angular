import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TimeslotEditComponent } from './components/timeslot-edit/timeslot-edit.component';
import { TimeslotListAddComponent } from './components/timeslot-list-add/timeslot-list-add.component';
import { TimeslotOverviewComponent } from './components/timeslot-overview/timeslot-overview.component';

@NgModule({
  declarations: [
    AppComponent,
    TimeslotEditComponent,
    TimeslotListAddComponent,
    TimeslotOverviewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
