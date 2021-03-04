import { TimeslotDialogComponent } from './../timeslot-dialog/timeslot-dialog.component';
import { TimeslotsService } from './../../services/timeslots.service';
import { Timeslot } from './../../models/timeslot';
import { Project } from './../../models/project';
import { projectDateValidator } from './../../utils/project-date-validation';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import * as moment from 'moment';

@Component({
  selector: 'app-timeslot-edit',
  templateUrl: './timeslot-edit.component.html',
  styleUrls: ['./timeslot-edit.component.scss']
})
export class TimeslotEditComponent implements OnInit {
  public moment = moment;

  public projects: Project[];
  public timeslots: Timeslot[];

  public currentTimeslot: Timeslot;
  public currentProject: Project;

  public timeslotForm = new FormGroup({
    projectId: new FormControl('', Validators.required),
    date: new FormControl('', [Validators.required]),
    hours: new FormControl('', Validators.required),
    minutes: new FormControl('', Validators.required)
  });
  public formErrors: string[] = [];

  public hoursAdded = "";

  constructor(
    public timeslotService: TimeslotsService,
    private router: Router,
    private route: ActivatedRoute,
    private dialog: MatDialog
  ) {}

  ngOnInit(): void {
    // Redirect to home if no cached data is found
    if(!this.timeslotService.cachedProjects || !this.timeslotService.cachedProjects) {
      this.router.navigate(['/timeslot-overview']);
    } else {
      this.projects = this.timeslotService.cachedProjects;
      this.timeslots = this.timeslotService.cachedTimeSlots;

      this.currentTimeslot = this.timeslots.find((timeslot: Timeslot) => timeslot.id.toString() === this.route.snapshot.params.id);
      this.currentProject = this.projects.find((project: Project) => project.id = this.currentTimeslot.id );

      // Patch timeslotForm values from timeslot id in route
      this.timeslotForm.patchValue(this.currentTimeslot);
      this.timeslotForm.controls['date'].setValue(moment(this.currentTimeslot.date).format('YYYY-MM-DD'));
      this.timeslotForm.controls['projectId'].patchValue(this.currentTimeslot.projectId);

      this.timeInputEffects();
      this.addProjectDateValidation()
    }
  }

  /**
   * - Convert extra minutes into hours
   * - Hours can't go above 23
   * - Minutes and hours can't go below 0
   * - Minutes and hours can't be empty
   */
  private timeInputEffects() {
      this.timeslotForm.controls['minutes'].valueChanges.subscribe(minutes => {
        if (minutes > 59) {
          this.timeslotForm.controls['minutes'].patchValue(minutes - 60);
          this.timeslotForm.controls['hours'].patchValue(this.timeslotForm.controls['hours'].value + 1);
          this.hoursAdded = "Hours have been adjusted"
        } else if ( minutes < 0 || minutes == null) {
          this.timeslotForm.controls['minutes'].patchValue(0);
        }
      });

      this.timeslotForm.controls['hours'].valueChanges.subscribe(hours => {
        if( hours > 23) {
          this.timeslotForm.controls['hours'].patchValue(23);
        } else if ( hours < 0 || hours == null) {
          this.timeslotForm.controls['hours'].patchValue(0);
        }
      });
  }

  private addProjectDateValidation() {
    let projectId = this.timeslotForm.controls['projectId'].value;
    let project = this.projects.find((project: Project) => project.id = projectId );
    this.timeslotForm.controls['date'].setValidators([Validators.required, projectDateValidator(project)]);
  }

  /**
   * Validate and submit timeslotForm
   */
  public submit() {
    if(this.timeslotForm.valid) {
      const newTimeslot: Timeslot = new Timeslot(
        this.currentTimeslot.id,
        this.timeslotForm.controls['projectId'].value,
        this.timeslotForm.controls['date'].value,
        this.timeslotForm.controls['hours'].value,
        this.timeslotForm.controls['minutes'].value,
      );
      // console.log(newTimeslot);

      if(newTimeslot && newTimeslot.id) {
        this.timeslotService.saveTimeslot(newTimeslot).subscribe(r => {
          this.dialog.open(TimeslotDialogComponent);
        });
      }
    } else {
      this.timeslotForm.markAllAsTouched();
    }
  }
}
