import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NorthAdventureTourComponent } from './north-adventure-tour.component';

describe('NorthAdventureTourComponent', () => {
  let component: NorthAdventureTourComponent;
  let fixture: ComponentFixture<NorthAdventureTourComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NorthAdventureTourComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NorthAdventureTourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
