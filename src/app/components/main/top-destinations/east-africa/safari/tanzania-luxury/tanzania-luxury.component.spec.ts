import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TanzaniaLuxuryComponent } from './tanzania-luxury.component';

describe('TanzaniaLuxuryComponent', () => {
  let component: TanzaniaLuxuryComponent;
  let fixture: ComponentFixture<TanzaniaLuxuryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TanzaniaLuxuryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TanzaniaLuxuryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
