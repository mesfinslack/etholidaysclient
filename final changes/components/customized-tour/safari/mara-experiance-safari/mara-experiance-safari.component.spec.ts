import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MaraExperianceSafariComponent } from './mara-experiance-safari.component';

describe('MaraExperianceSafariComponent', () => {
  let component: MaraExperianceSafariComponent;
  let fixture: ComponentFixture<MaraExperianceSafariComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MaraExperianceSafariComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MaraExperianceSafariComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
