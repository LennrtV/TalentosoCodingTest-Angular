export class Timeslot {
  public id?:         number;
  public projectId:  number;
  public date:       string;
  public hours:      number;
  public minutes:    number;

  constructor(
    id:         number|null,
    projectId:  number,
    date:       string,
    hours:      number,
    minutes:    number
  ) {
    if(id != null) { this.id = id; }
    this.projectId = projectId;
    this.date = date;
    this.hours = hours;
    this.minutes = minutes;
  }
}
