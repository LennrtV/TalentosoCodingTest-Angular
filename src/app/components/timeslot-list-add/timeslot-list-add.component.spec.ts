import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TimeslotListAddComponent } from './timeslot-list-add.component';

describe('TimeslotListAddComponent', () => {
  let component: TimeslotListAddComponent;
  let fixture: ComponentFixture<TimeslotListAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TimeslotListAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TimeslotListAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
