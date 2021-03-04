import { Timeslot } from './../../models/timeslot';
import { Project } from './../../models/project';
import { TimeslotsService } from './../../services/timeslots.service';
import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { switchMap } from 'rxjs/operators';
import * as moment from 'moment';

@Component({
  selector: 'app-timeslot-overview',
  templateUrl: './timeslot-overview.component.html',
  styleUrls: ['./timeslot-overview.component.scss']
})
export class TimeslotOverviewComponent implements OnInit {
  public moment = moment;

  public projects: Project[];
  public timeslots: Timeslot[];

  public today: Date = new Date();

  public projectSelect: FormControl = new FormControl('');
  public startDate: FormControl = new FormControl(moment().startOf('isoWeek').format('YYYY-MM-DD'));
  public endDate: FormControl = new FormControl(moment().endOf('isoWeek').format('YYYY-MM-DD'));

  constructor(
    private timeslotService: TimeslotsService
  ) { }

  ngOnInit(): void {
    this.timeslotService.getProjects().subscribe(projects => {
      this.projects = projects;
      this.timeslotService.cachedProjects = this.projects;
      this.onProjectChange();
      this.onPeriodChange();
    });
  }

  /**
   * Show new project timeslots when current project is changed
   */
  private onProjectChange() {
    this.projectSelect.valueChanges.pipe(
      switchMap(projectId => {
        return this.timeslotService.getTimeslots(projectId);
      })
    ).subscribe(timeslots => {
      this.timeslots = timeslots;
      this.timeslotService.cachedTimeSlots = this.timeslots;
      // console.log('timeslots: ', this.timeslots);
   })
  }

  /**
   * Re-render timeslots when time period changes
   */
  private onPeriodChange() {
    this.startDate.valueChanges.subscribe(d => {
      // console.log('start date: ', this.startDate.value);
      if(this.timeslots?.length > 0){this.timeslots = [...this.timeslots]};
   });
    this.endDate.valueChanges.subscribe(d => {
      // console.log('end date: ', this.endDate.value);
      if(this.timeslots?.length > 0){this.timeslots = [...this.timeslots]};
   });
  }

  public toDate(dateString: string, type: string): Date {
    // console.log(type + ' date: ', new Date(dateString));
    return new Date(dateString);
  }
}
