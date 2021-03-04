export class Timeslot {
  public id:         number;
  public projectId:  number;
  public date:       string;
  public hours:      number;
  public minutes:    number;

  constructor(
    id:         number,
    projectId:  number,
    date:       string,
    hours:      number,
    minutes:    number
  ) {
    this.id = id;
    this.projectId = projectId;
    this.date = date;
    this.hours = hours;
    this.minutes = minutes;
  }
}
