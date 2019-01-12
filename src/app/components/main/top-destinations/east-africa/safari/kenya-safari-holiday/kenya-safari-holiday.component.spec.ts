import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KenyaSafariHolidayComponent } from './kenya-safari-holiday.component';

describe('KenyaSafariHolidayComponent', () => {
  let component: KenyaSafariHolidayComponent;
  let fixture: ComponentFixture<KenyaSafariHolidayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KenyaSafariHolidayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KenyaSafariHolidayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
