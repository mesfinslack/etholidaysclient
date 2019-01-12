import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TimketComponent } from './timket.component';

describe('TimketComponent', () => {
  let component: TimketComponent;
  let fixture: ComponentFixture<TimketComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TimketComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TimketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
