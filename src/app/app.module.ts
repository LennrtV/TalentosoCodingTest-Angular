import { HttpClient, HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TimeslotEditComponent } from './components/timeslot-edit/timeslot-edit.component';
import { TimeslotListAddComponent } from './components/timeslot-list-add/timeslot-list-add.component';
import { TimeslotOverviewComponent } from './components/timeslot-overview/timeslot-overview.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    TimeslotEditComponent,
    TimeslotListAddComponent,
    TimeslotOverviewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    HttpClient
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
