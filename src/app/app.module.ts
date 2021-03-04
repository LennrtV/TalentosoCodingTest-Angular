import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './modules/app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MomentModule } from 'ngx-moment';
import { MaterialModule } from './modules/material.module';

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
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MomentModule,
    MaterialModule
  ],
  providers: [
    HttpClient
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
