import { Timeslot } from './../models/timeslot';
import { Project } from './../models/project';
import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TimeslotsService {

  private endpoint = environment.endpoint;

  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json'
    })
  };

  public cachedProjects: Project[];
  public cachedTimeSlots: Timeslot[];

  constructor(
    private http: HttpClient
  ) { }

  getProjects(): Observable<Project[]> {
    return this.http.get<Project[]>(this.endpoint + 'projects')
  }

  getTimeslots(projectId: number): Observable<Timeslot[]> {
    return this.http.get<Timeslot[]>(this.endpoint + 'timeRegistrations?projectId='+projectId)
  }

  addTimeslots(timeslots: Timeslot[]): Observable<Timeslot[]> {
    return this.http.post<Timeslot[]>(this.endpoint + 'timeRegistrations', timeslots, this.httpOptions)
  }

  saveTimeslot(timeslot: Timeslot): Observable<Timeslot[]> {
    return this.http.put<Timeslot[]>(this.endpoint + 'timeRegistrations/'+timeslot.id, timeslot, this.httpOptions)
  }
}
