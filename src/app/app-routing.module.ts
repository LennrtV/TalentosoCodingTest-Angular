import { TimeslotListAddComponent } from './components/timeslot-list-add/timeslot-list-add.component';
import { TimeslotOverviewComponent } from './components/timeslot-overview/timeslot-overview.component';
import { TimeslotEditComponent } from './components/timeslot-edit/timeslot-edit.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', pathMatch: 'full',redirectTo: '/timeslot-overview' },
  { path: 'timeslot-overview', component: TimeslotOverviewComponent },
  { path: 'timeslot-list-add', component: TimeslotListAddComponent },
  { path: 'timeslot-edit/:id', component: TimeslotEditComponent },
  { path: '**', component: TimeslotOverviewComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
