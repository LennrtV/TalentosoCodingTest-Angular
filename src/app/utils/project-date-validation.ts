import { ValidatorFn, AbstractControl } from '@angular/forms';
import { Project } from './../models/project';
import * as moment from 'moment';

/**
 * Check if the entered date is between the start and end dates of the project.
 * @param project project for which the entered date needs to be validated
 */
export function projectDateValidator(project: Project): ValidatorFn {
  return (control: AbstractControl): {[key: string]: any} | null => {
    const minDate = moment(project.startDate);
    const maxDate = moment(project.endDate);
    const date = moment(control.value);

    const forbidden = (date.isAfter(maxDate) || date.isBefore(minDate));
    // console.log('dates:', minDate, date, maxDate);
    // console.log('forbidden?', forbidden);
    return forbidden ? {dateNotWithinBounds: {value: control.value}} : null;
  };
}
