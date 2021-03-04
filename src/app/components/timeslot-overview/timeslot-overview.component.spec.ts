import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TimeslotOverviewComponent } from './timeslot-overview.component';

describe('TimeslotOverviewComponent', () => {
  let component: TimeslotOverviewComponent;
  let fixture: ComponentFixture<TimeslotOverviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TimeslotOverviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TimeslotOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
