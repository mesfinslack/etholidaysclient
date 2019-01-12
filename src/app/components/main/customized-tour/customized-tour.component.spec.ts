import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomizedTourComponent } from './customized-tour.component';

describe('CustomizedTourComponent', () => {
  let component: CustomizedTourComponent;
  let fixture: ComponentFixture<CustomizedTourComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomizedTourComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomizedTourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
