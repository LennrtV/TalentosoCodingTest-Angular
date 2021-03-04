import { TimeslotDialogComponent } from './../timeslot-dialog/timeslot-dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { TimeslotsService } from './../../services/timeslots.service';
import { FormArray, FormControl, FormGroup, Validators, AbstractControl } from '@angular/forms';
import { Timeslot } from './../../models/timeslot';
import { Project } from './../../models/project';
import { projectDateValidator } from './../../utils/project-date-validation';
import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';

@Component({
  selector: 'app-timeslot-list-add',
  templateUrl: './timeslot-list-add.component.html',
  styleUrls: ['./timeslot-list-add.component.scss']
})
export class TimeslotListAddComponent implements OnInit {
  public moment = moment;

  public projects: Project[];
  public timeslots: Timeslot[];

  public today: Date = new Date();

  public projectSelect: FormControl = new FormControl('');

  public timeslotForm = new FormGroup({
    projectId: new FormControl('', Validators.required),
    timeslotGroups: new FormArray([])
  });
  public timeslotGroups = this.timeslotForm.get('timeslotGroups') as FormArray;
  public formErrors: string[] = [];

  constructor(
    private timeslotService: TimeslotsService,
    private dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.timeslotService.getProjects().subscribe(projects => {
      this.projects = projects;
      this.timeslotService.cachedProjects = this.projects;
    });

    this.timeslotForm.controls['timeslotGroups'].valueChanges.subscribe(() => {
      this.timeInputEffects();
    })
  }

  /**
   * - Convert extra minutes into hours
   * - Hours can't go above 23
   * - Minutes and hours can't go below 0
   * - Minutes and hours can't be empty
   */
  private timeInputEffects() {
    for (let group of this.timeslotGroups['controls']) {
      let minutes = group.get('minutes').value;
      let hours = group.get('hours').value;

      if (minutes > 59) {
        group.get('minutes').patchValue(59);
      } else if ( minutes < 0 || minutes == null) {
        group.get('minutes').patchValue(0);
      }

      if( hours > 23) {
        group.get('hours').patchValue(23);
      } else if ( hours < 0 || hours == null) {
        group.get('hours').patchValue(0);
      }
    }
  }

  /**
   * Add timeslot row
   */
  public addTimeslotRow() {
    let projectId = this.timeslotForm.controls['projectId'].value;
    let project = this.projects.find((project: Project) => project.id = projectId );

    (this.timeslotForm.controls['timeslotGroups'] as FormArray).push(new FormGroup({
      projectId: new FormControl(projectId, Validators.required),
      date: new FormControl(moment().format('YYYY-MM-DD'), [Validators.required, projectDateValidator(project)]),
      hours: new FormControl(0, Validators.required),
      minutes: new FormControl(0, Validators.required)
    }));
  }

  /**
   * Remove timeslot row at index
   */
  public removeTimeslotRow(i: number) {
    (this.timeslotForm.controls['timeslotGroups'] as FormArray).removeAt(i);
  }

  /**
   * Validate and submit timeslotForm
   */
  public submit() {
    if(this.timeslotForm.valid) {
      //let newTimeslots: Timeslot[] = [];

      for (let group of this.timeslotGroups['controls']) {
        let newTimeslot = new Timeslot(
          null,
          this.timeslotForm.controls['projectId'].value,
          group.get('date').value,
          group.get('hours').value,
          group.get('minutes').value,
        );
        //newTimeslots.push(newTimeslot);
        if(newTimeslot) {
          this.timeslotService.addTimeslot(newTimeslot).subscribe(r => {
            (this.timeslotForm.controls['timeslotGroups'] as FormArray).removeAt(0);
            //this.dialog.open(TimeslotDialogComponent);
          });
        }
      }

      //console.log(newTimeslots);
    } else {
      this.timeslotForm.markAllAsTouched();
    }
  }
}
